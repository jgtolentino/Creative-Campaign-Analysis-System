import React, { useState } from 'react'

export default function AskCES() {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/ask-ces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
    const data = await res.json()
    setAnswer(data.answer)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded shadow">🎨 Ask CES</button>
      ) : (
        <div className="bg-white p-4 w-[340px] h-[460px] rounded shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">Ask CES</h3>
            <button onClick={handleToggle}>✖</button>
          </div>
          <p className="text-sm mb-3">Ask me anything about your campaign's creative effectiveness.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask CES..."
              className="w-full border rounded px-2 py-1"
            />
          </form>
          {answer && <p className="mt-2 text-sm text-gray-700">{answer}</p>}
        </div>
      )}
    </div>
  )
} 