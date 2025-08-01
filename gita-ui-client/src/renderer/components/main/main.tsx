// src/renderer/components/UIFragments.tsx
import React from 'react'

export const GroupList = () => <div className="p-2">Group List</div>

export const RepoList = () => <div className="p-2">Repo List</div>

export const ContextIndicator = () => <div className="p-2">Context: none</div>

export const RepoSummaryPanel = () => (
  <div className="w-1/2 p-2 border-r border-gray-300">Repo Summary</div>
)

export const StagingAndDiffPanel = () => (
  <div className="w-1/2 p-2">Staging + Diff</div>
)

export const CommitPanel = () => (
  <div className="border-t p-2">Commit Message + Button</div>
)
