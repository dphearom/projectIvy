import "server-only"

export async function sendTelegramMessage(text: string, chatId?: string | number): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const targetChatId = chatId ?? process.env.TELEGRAM_CHAT_ID
  if (!token || !targetChatId) return

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: targetChatId,
        text,
      }),
    })
    if (!res.ok) {
      console.error("Telegram notification failed:", res.status, await res.text())
    }
  } catch (error) {
    console.error("Telegram notification failed:", error)
  }
}
