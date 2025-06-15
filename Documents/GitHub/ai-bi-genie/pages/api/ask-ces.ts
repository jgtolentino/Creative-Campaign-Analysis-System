import type { NextApiRequest, NextApiResponse } from 'next'
import { getCESContext } from '../../utils/context'
import { queryClaude } from '../../utils/llm'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const context = await getCESContext(req.body)
  const prompt = `You are CESAI, a creative insights assistant. Context: ${context}. Question: ${req.body.query}`
  const response = await queryClaude(prompt)
  res.status(200).json({ answer: response })
} 