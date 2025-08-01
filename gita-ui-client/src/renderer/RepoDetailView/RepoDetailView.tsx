import { CommitHistoryPanel } from './CommitHistoryPanel'
import { CommitPanel } from './CommitPanel'

const RepoDetailView = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Commit history */}
      <div className="flex-1 overflow-y-auto p-4 bg-white text-black">
        <CommitHistoryPanel />
      </div>

      {/* Commit input panel */}
      <div className="border-t border-gray-300 p-4 bg-gray-100">
        <CommitPanel />
      </div>
    </div>
  )
}

export default RepoDetailView
