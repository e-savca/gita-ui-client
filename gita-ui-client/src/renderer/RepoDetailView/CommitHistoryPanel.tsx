import React from 'react'

const mockCommits = [
  {
    message: 'Fix login bug',
    author: 'alice',
    date: '2025-07-31 10:21',
    sha: 'a1b2c3d',
  },
  {
    message: 'Refactor API layer',
    author: 'bob',
    date: '2025-07-30 16:48',
    sha: 'd4e5f6g',
  },
]

export const CommitHistoryPanel = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Commit History</h2>
      <ul className="space-y-2">
        {mockCommits.map((commit) => (
          <li
            key={commit.sha}
            className="p-3 bg-gray-100 rounded shadow border"
          >
            <div className="font-medium">{commit.message}</div>
            <div className="text-sm text-gray-600">
              {commit.author} • {commit.date} • {commit.sha}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
