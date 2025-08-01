import React, { useState } from 'react'

export const CommitPanel = () => {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const handleCommit = () => {
    console.log('Committing:', { subject, body })
    // Later: call Electron IPC to invoke gita commit
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">New Commit</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Commit title"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Commit body (optional)"
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleCommit}
      >
        Commit
      </button>
    </div>
  )
}
