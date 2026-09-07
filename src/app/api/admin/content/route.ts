import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE, tokenIsValid } from "@/lib/session";
import { githubConfigured, readFile } from "@/lib/github";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PATH = "src/data/content.json";

export async function GET() {
  if (!tokenIsValid(cookies().get(COOKIE)?.value)) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
  if (!githubConfigured()) {
    return NextResponse.json({ error: "GitHub access isn't set up yet." }, { status: 500 });
  }
  try {
    const { text, sha } = await readFile(PATH);
    return NextResponse.json({ content: JSON.parse(text), sha });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
