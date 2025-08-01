import React from 'react'
import { RepositoryList } from './RepositoryList'
import { ActionButtons } from './ActionButtons'
import { ProTip } from './ProTip'

const StartupScreen = () => {
  return (
    <div className="flex flex-col h-full text-gray-100 bg-[#1e1e1e] px-10 py-8">
      <h1 className="text-4xl font-semibold mb-2">Let's get started!</h1>

      <p className="text-gray-400 mb-6">
        Add a repository to start collaborating
      </p>

      <div className="flex flex-row gap-10 flex-1">
        <div className="w-1/2">
          <RepositoryList />
        </div>
        <div className="w-1/2">
          <ActionButtons />
          <div className="mt-6">
            <ProTip />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartupScreen
