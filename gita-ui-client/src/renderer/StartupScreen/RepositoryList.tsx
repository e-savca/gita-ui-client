import React from 'react'
import { Lock } from 'lucide-react' // or use your own SVG

export const RepositoryList = () => {
  const reposByGroup = {
    'Your repositories': [
      'CRME093/IBD.Core',
      'CRME093/ibd.cedint',
      'CRME093/ibd.cedint.new_tag',
      'CRME093/ibd.cedint.scum_config',
    ],
    Architecture: ['Architecture/AY_DBXSHARE.ion-banking-desktop'],
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter your repositories"
        className="w-full bg-[#2d2d2d] text-white px-4 py-2 rounded mb-4"
      />
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
    </div>
  )
}
