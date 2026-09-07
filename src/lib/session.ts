import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";
export const COOKIE = "gg_admin";
const TWELVE_HOURS = 1000 * 60 * 60 * 12;

function sign(value: string) {
  return crypto.createHmac("sha256", SECRET).update(value).digest("hex");
}

/** Constant-time password check so timing can't leak the password. */
export function passwordMatches(supplied: string) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function createToken() {
  const expires = String(Date.now() + TWELVE_HOURS);
  return `${expires}.${sign(expires)}`;
}

export function tokenIsValid(token?: string) {
  if (!token || !SECRET) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  const expected = sign(expires);
  if (signature.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  return Number(expires) > Date.now();
}
