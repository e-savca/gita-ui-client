import { CommitPanel, RepoSummaryPanel, StagingAndDiffPanel } from './main'

const MainContent = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex flex-1">
        <RepoSummaryPanel />
        <StagingAndDiffPanel />
      </div>
      <CommitPanel />
    </main>
  )
}

export default MainContent
