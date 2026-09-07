import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE, tokenIsValid } from "@/lib/session";
import { githubConfigured, writeFile } from "@/lib/github";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PATH = "src/data/content.json";

export async function POST(request: Request) {
  if (!tokenIsValid(cookies().get(COOKIE)?.value)) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
  if (!githubConfigured()) {
    return NextResponse.json({ error: "GitHub access isn't set up yet." }, { status: 500 });
  }

  const { content, sha } = await request.json().catch(() => ({}));
  if (!content || typeof content !== "object") {
    return NextResponse.json({ error: "Nothing to save." }, { status: 400 });
  }

  try {
    const json = JSON.stringify(content, null, 2) + "\n";
    await writeFile({
      path: PATH,
      contentBase64: Buffer.from(json, "utf8").toString("base64"),
      message: "Update site content from admin page",
      sha,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = (err as Error).message;
    // 409 from GitHub means the file changed since it was loaded.
    if (message.includes("409")) {
      return NextResponse.json(
        { error: "Someone else saved a change while you were editing. Refresh and try again." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
