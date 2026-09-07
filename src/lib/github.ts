/**
 * Reads and writes files in the site's GitHub repo.
 * Writing a file triggers a Vercel redeploy, which is how admin edits go live.
 */
const REPO = process.env.GITHUB_REPO || "niamhkearney23/GlawGlow";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const TOKEN = process.env.GITHUB_TOKEN || "";

const api = `https://api.github.com/repos/${REPO}/contents`;

function headers() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };
}

export function githubConfigured() {
  return Boolean(TOKEN);
}

export async function readFile(path: string) {
  const res = await fetch(`${api}/${path}?ref=${BRANCH}&t=${Date.now()}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Could not read ${path} (${res.status})`);
  const json = await res.json();
  return {
    sha: json.sha as string,
    text: Buffer.from(json.content, "base64").toString("utf8"),
  };
}

/** Writes (or creates) a file. Pass the sha you read to avoid overwriting newer edits. */
export async function writeFile(opts: {
  path: string;
  contentBase64: string;
  message: string;
  sha?: string;
}) {
  const body: Record<string, string> = {
    message: opts.message,
    content: opts.contentBase64,
    branch: BRANCH,
  };
  if (opts.sha) body.sha = opts.sha;

  const res = await fetch(`${api}/${opts.path}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Could not save ${opts.path} (${res.status}): ${detail.slice(0, 300)}`);
  }
  return res.json();
}

/** Look up a file's sha, or undefined if it doesn't exist yet. */
export async function shaFor(path: string) {
  const res = await fetch(`${api}/${path}?ref=${BRANCH}`, { headers: headers(), cache: "no-store" });
  if (!res.ok) return undefined;
  const json = await res.json();
  return json.sha as string | undefined;
}
