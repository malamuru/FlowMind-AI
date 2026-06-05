export async function callGroqAI(systemPrompt, documentText, maxTokens = 1800) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY is missing in server .env file.')
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: maxTokens,
      temperature: 0.3,
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: `DOCUMENT:\n${documentText}`
        }
      ]
    })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.error?.message || 'Failed to get AI response.')
  }

  return data?.choices?.[0]?.message?.content || ''
}
