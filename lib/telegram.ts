import "server-only"

async function callTelegram(method: string, payload: Record<string, unknown>): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  if (!token || !payload.chat_id) return

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error(`Telegram ${method} failed:`, res.status, await res.text())
    }
  } catch (error) {
    console.error(`Telegram ${method} failed:`, error)
  }
}

export async function sendTelegramMessage(text: string, chatId?: string | number): Promise<void> {
  await callTelegram("sendMessage", { chat_id: chatId ?? process.env.TELEGRAM_CHAT_ID, text })
}

export async function sendTelegramHtml(html: string, chatId?: string | number): Promise<void> {
  await callTelegram("sendMessage", {
    chat_id: chatId ?? process.env.TELEGRAM_CHAT_ID,
    text: html,
    parse_mode: "HTML",
  })
}

export async function sendTelegramDocument(
  filename: string,
  content: string,
  mimeType: string,
  chatId?: string | number
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const targetChatId = chatId ?? process.env.TELEGRAM_CHAT_ID
  if (!token || !targetChatId) return

  try {
    const form = new FormData()
    form.append("chat_id", String(targetChatId))
    form.append("document", new Blob([content], { type: mimeType }), filename)
    const res = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
      method: "POST",
      body: form,
    })
    if (!res.ok) {
      console.error("Telegram sendDocument failed:", res.status, await res.text())
    }
  } catch (error) {
    console.error("Telegram sendDocument failed:", error)
  }
}

export function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
