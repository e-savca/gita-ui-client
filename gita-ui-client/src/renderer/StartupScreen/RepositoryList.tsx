import React from 'react'
import { Lock, Folder } from 'lucide-react'

export const RepositoryList = () => {
  const reposByGroup = {
    'Your repositories': [
      'CRME093/IBD.Core',
      'CRME093/ibd.cedint',
      'CRME093/ibd.cedint.new_tag',
      'CRME093/ibd.cedint.scum_config',
    ],
  }

  const recentGroups = ['core-services', 'frontend', 'dev-tools']

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Filter your repositories"
        className="w-full bg-[#2d2d2d] text-white px-4 py-2 rounded mb-6"
      />

      {/* Repos grouped by category */}
      {Object.entries(reposByGroup).map(([group, repos]) => (
        <div key={group} className="mb-4">
          <div className="text-sm font-semibold text-gray-400 mb-1">
            {group}
          </div>
          <ul className="space-y-1">
            {repos.map((repo) => (
              <li key={repo} className="flex items-center gap-2 text-gray-200">
                <Lock size={14} className="text-gray-500" />
                {repo}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Recently used groups */}
      <div>
        <div className="text-sm font-semibold text-gray-400 mb-2">
          Recent groups
        </div>
        <ul className="space-y-1">
          {recentGroups.map((group) => (
            <li
              key={group}
              className="flex items-center gap-2 text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer"
            >
              <Folder size={14} className="text-gray-500" />
              {group}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
