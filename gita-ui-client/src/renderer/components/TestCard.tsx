import React from 'react'

const TestCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">✅ Tailwind Test</h2>
      <p className="mt-2 text-sm text-gray-600">
        Tailwind is correctly configured.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
    </div>
  )
}

export default TestCard
