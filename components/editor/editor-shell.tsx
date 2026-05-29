"use client"

import { useState } from "react"

import { EditorActionsContext } from "./editor-actions-context"
import { EditorNavbar } from "./editor-navbar"
import {
  CreateProjectDialog,
  DeleteProjectDialog,
  RenameProjectDialog,
} from "./project-dialogs"
import { ProjectSidebar } from "./project-sidebar"
import { useProjectDialogs } from "@/hooks/use-project-dialogs"

export function EditorShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {
    dialog,
    name,
    setName,
    loading,
    projects,
    openCreate,
    openRename,
    openDelete,
    close,
    handleCreate,
    handleRename,
    handleDelete,
  } = useProjectDialogs()

  return (
    <EditorActionsContext.Provider value={{ openCreate }}>
      <div className="h-screen w-screen overflow-hidden bg-bg-base">
        <EditorNavbar
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen((prev) => !prev)}
        />
        <ProjectSidebar
          isOpen={sidebarOpen}
          projects={projects}
          onClose={() => setSidebarOpen(false)}
          onNewProject={openCreate}
          onRename={openRename}
          onDelete={openDelete}
        />
        <main className="h-full pt-12">{children}</main>

        <CreateProjectDialog
          open={dialog.type === "create"}
          name={name}
          loading={loading}
          onNameChange={setName}
          onSubmit={handleCreate}
          onClose={close}
        />
        <RenameProjectDialog
          open={dialog.type === "rename"}
          project={dialog.project}
          name={name}
          loading={loading}
          onNameChange={setName}
          onSubmit={handleRename}
          onClose={close}
        />
        <DeleteProjectDialog
          open={dialog.type === "delete"}
          project={dialog.project}
          loading={loading}
          onConfirm={handleDelete}
          onClose={close}
        />
      </div>
    </EditorActionsContext.Provider>
  )
}
