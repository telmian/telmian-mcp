// Phone verification with the telmian SDK (Node 20+), server side only.
// npm i telmian   ·   TELMIAN_API_KEY in your environment (npx telmian@1 init writes a sandbox key)
import { randomUUID } from 'node:crypto';
import { Telmian } from 'telmian';

const sms = new Telmian(); // reads TELMIAN_API_KEY

// 1. Send a code. One idempotency key per attempt: retry with the same key, never a new one.
await sms.sendVerification('+393000000001', { idempotencyKey: randomUUID() });

// 2. Check what the user typed. In the sandbox +393000000001 always receives 000000.
const { valid } = await sms.checkVerification('+393000000001', '000000');
console.log(valid ? 'Phone verified' : 'Wrong code');
