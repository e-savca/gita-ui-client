import React from 'react'

const actions = [
  {
    label: 'Create a tutorial repository...',
    primary: true,
  },
  {
    label: 'Clone a repository from the Internet...',
  },
  {
    label: 'Create a New Repository on your local drive...',
  },
  {
    label: 'Add an Existing Repository from your local drive...',
  },
]

export const ActionButtons = () => {
  return (
    <div className="flex flex-col gap-3">
      {actions.map(({ label, primary }) => (
        <button
          key={label}
          className={`w-full text-left px-4 py-3 rounded font-medium ${
            primary
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-[#2d2d2d] text-gray-100 hover:bg-[#3a3a3a]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
