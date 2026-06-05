const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export async function analyzeWorkflowAPI(documentText) {
  const response = await fetch(`${API_URL}/analyze-workflow`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ documentText })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.error || 'Failed to analyze workflow.')
  }

  return data
}