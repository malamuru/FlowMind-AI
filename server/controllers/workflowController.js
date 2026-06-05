import { callGroqAI } from '../services/groqService.js'
import { WORKFLOW_ANALYSIS_PROMPT } from '../utils/prompts.js'

export async function analyzeWorkflow(req, res, next) {
  try {
    const { documentText } = req.body

    if (!documentText || !documentText.trim()) {
      return res.status(400).json({
        error: 'Document text is required.'
      })
    }

    const analysis = await callGroqAI(
      WORKFLOW_ANALYSIS_PROMPT,
      documentText,
      1800
    )

    res.json({ analysis })
  } catch (error) {
    next(error)
  }
}