# Telmian MCP server

[![mcptry](https://mcptry.com/badge/com.telmian/sms)](https://mcptry.com/servers/com.telmian/sms)

**SMS for apps you build with AI.** Connect your AI coding assistant to Telmian and ask it to add phone
verification (OTP), reminders, order updates or two-way SMS to your app. It sets up the key, the templates
and a free test for you.

- **Remote MCP server:** `https://app.telmian.com/mcp` (Streamable HTTP)
- **Sign-in:** from the browser (OAuth). There is no API key in your config files.
- **Free sandbox:** SMS are simulated, no card needed.
- **Real SMS:** €0.05 per SMS to mobile numbers in 44 European countries, prepaid from €5, no monthly fee.
- **Nothing to run yourself:** Telmian sends from its own European numbers. No phone, no SIM, no gateway app.

Website: [telmian.com](https://telmian.com) · Guides: [telmian.com/guides](https://telmian.com/guides/) ·
For AI assistants: [telmian.com/llms.txt](https://telmian.com/llms.txt) ·
Official MCP Registry: `com.telmian/sms`

## Connect your assistant

### Claude Code

```bash
claude mcp add --transport http telmian https://app.telmian.com/mcp
```

Then type `/mcp` in Claude Code, choose **telmian › Authenticate** and approve in the browser.

### Cursor

Add this to `.cursor/mcp.json` (one project) or `~/.cursor/mcp.json` (all projects), then sign in from the
browser when Cursor asks:

```json
{
  "mcpServers": {
    "telmian": { "url": "https://app.telmian.com/mcp" }
  }
}
```

### OpenAI Codex (CLI and IDE extension)

```bash
codex mcp add telmian --url https://app.telmian.com/mcp
codex mcp login telmian
```

### Windsurf (Devin Desktop)

Agents window › Customize › MCPs, or add to `~/.config/devin/mcp_config.json`:

```json
{
  "mcpServers": {
    "telmian": { "url": "https://app.telmian.com/mcp" }
  }
}
```

### Lovable, Bolt, v0, Replit, Base44

In these builders MCP only helps the AI while you build. Your published app calls the Telmian API from
server code, with the key saved as a secret. Step-by-step guides:
[Lovable](https://telmian.com/guides/add-sms-to-lovable-app/) ·
[Bolt](https://telmian.com/guides/add-sms-to-bolt-app/) ·
[v0](https://telmian.com/guides/add-sms-to-v0-app/) ·
[Replit](https://telmian.com/guides/add-sms-to-replit-app/) ·
[Base44](https://telmian.com/guides/add-sms-to-base44-app/).

## Things to ask

- "Add phone number verification to sign-up, with Telmian."
- "Text me when a new order arrives."
- "Remind customers 24 hours before each appointment."
- "Connect Supabase phone sign-in to Telmian instead of Twilio."

## Main tools

| Tool | What it does |
|---|---|
| `whoami` | Account, permissions and the selected project |
| `create_sandbox_key` | Creates a free sandbox key for your `.env` |
| `send_verification` / `check_verification` | Sends a 6-digit code by SMS and checks it |
| `message_templates` / `submit_template` | Ready templates (Italian, English, German, French, Spanish) and your own, reviewed in seconds |
| `send_template_message` | Sends a template SMS (order updates, notices) |
| `preview_reminders` / `schedule_reminders` | Checks and schedules appointment reminders |
| `messages` / `message_status` / `message_replies` | What was sent, delivery state and replies |
| `setup_supabase_sms` | Connects the Supabase Send SMS hook |
| `simulate_reply` | Sandbox only: the recipient answers, as a real person would |
| `topup_link` | A card top-up link for real SMS |

Real, charged SMS from the AI stay off unless you allow them when you connect. Live keys for your app are
created by you in the panel, never by the AI.

## Without MCP

```bash
npx telmian@1 login   # sign in from the browser
npx telmian@1 init    # writes a sandbox key to .env as TELMIAN_API_KEY
```

See [`examples/`](examples/) for a Node.js script and a plain `fetch` version that works in any server
runtime (Next.js route handlers, Supabase Edge Functions, Deno, Bun).

## Test numbers (sandbox)

- `+393000000001` always receives the code `000000`
- `+393000000002` always fails

## Links

- Pricing: [telmian.com/pricing](https://telmian.com/pricing/) ([Markdown](https://telmian.com/pricing.md))
- npm SDK: [`telmian`](https://www.npmjs.com/package/telmian)
- Contact: info@telmian.com

Telmian is run by Stargenis Technologies Ltd, London.
