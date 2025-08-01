import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const mockGroups = ['core-services', 'frontend-apps', 'dev-tools']
const mockRepos = {
  'core-services': ['auth-api', 'billing-api'],
  'frontend-apps': ['dashboard-ui', 'admin-ui'],
  'dev-tools': ['gita-wrapper', 'monorepo-helpers'],
}

export const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const groups = mockGroups
  const repos = selectedGroup ? mockRepos[selectedGroup] || [] : []

  return (
    <aside className="w-72 bg-white border-r border-gray-200 shadow-sm h-full flex flex-col p-4 space-y-6">
      <ContextIndicator
        selectedGroup={selectedGroup}
        onClear={() => setSelectedGroup(null)}
      />

      <div>
        <SectionHeader title="Groups" />
        <ul className="space-y-1 mt-2">
          {groups.map((group) => (
            <li
              key={group}
              className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg transition hover:bg-gray-100 ${
                selectedGroup === group
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700'
              }`}
              onClick={() => setSelectedGroup(group)}
            >
              {selectedGroup === group ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="truncate">{group}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader
          title={selectedGroup ? `Repos in ${selectedGroup}` : 'Repos'}
        />
        {repos.length ? (
          <ul className="space-y-1 mt-2">
            {repos.map((repo) => (
              <li
                key={repo}
                className="px-3 py-2 rounded-md bg-gray-100 text-sm text-gray-800 font-medium truncate"
              >
                {repo}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 mt-2">No repos</p>
        )}
      </div>
    </aside>
  )
}

const ContextIndicator = ({
  selectedGroup,
  onClear,
}: {
  selectedGroup: string | null
  onClear: () => void
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 text-sm text-gray-700 border rounded-md p-3 shadow-sm">
      <span>
        Context:{' '}
        <span className="font-semibold">{selectedGroup ?? 'none'}</span>
      </span>
      {selectedGroup && (
        <button
          onClick={onClear}
          className="text-xs text-red-500 hover:underline"
        >
          Clear
        </button>
      )}
    </div>
  )
}

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
    {title}
  </h2>
)
