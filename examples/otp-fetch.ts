// Phone verification with plain fetch: works in any server runtime
// (Next.js route handlers, Supabase Edge Functions, Deno, Bun, Node 20+).
// Never call this from browser code: the key must stay on the server.
const TELMIAN_API_KEY = process.env.TELMIAN_API_KEY; // Deno / Supabase: Deno.env.get('TELMIAN_API_KEY')
const api = 'https://app.telmian.com/v1';

export async function sendCode(phone: string, signupAttemptId: string) {
  const res = await fetch(`${api}/verify`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TELMIAN_API_KEY}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': signupAttemptId, // retry only with the same id
    },
    body: JSON.stringify({ phone }), // E.164, e.g. +393000000001
  });
  if (!res.ok) throw new Error(`Telmian ${res.status}: ${await res.text()}`);
}

export async function checkCode(phone: string, code: string): Promise<boolean> {
  const res = await fetch(`${api}/verify/check`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TELMIAN_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, code }),
  });
  const { valid } = await res.json();
  return valid === true;
}
