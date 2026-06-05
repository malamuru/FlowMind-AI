import express from 'express'
import { analyzeWorkflow } from '../controllers/workflowController.js'

const router = express.Router()

router.post('/analyze-workflow', analyzeWorkflow)

export default router