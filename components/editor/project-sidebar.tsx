"use client"

import { Pencil, Plus, Trash2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { MockProject } from "@/lib/mock-projects"

interface ProjectSidebarProps {
  isOpen: boolean
  projects: MockProject[]
  onClose: () => void
  onNewProject: () => void
  onRename: (project: MockProject) => void
  onDelete: (project: MockProject) => void
}

function ProjectItem({
  project,
  onRename,
  onDelete,
}: {
  project: MockProject
  onRename: (project: MockProject) => void
  onDelete: (project: MockProject) => void
}) {
  return (
    <div className="group flex items-center justify-between gap-2 rounded-xl px-2 py-1.5 hover:bg-bg-subtle transition-colors">
      <div className="flex flex-col min-w-0">
        <span className="text-sm text-text-primary truncate">{project.name}</span>
        <span className="text-xs text-text-muted font-mono truncate">{project.slug}</span>
      </div>
      {project.role === "owner" && (
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-6 w-6 text-text-muted hover:text-text-primary"
            onClick={(e) => { e.stopPropagation(); onRename(project) }}
          >
            <Pencil className="h-3.5 w-3.5" />
            <span className="sr-only">Rename</span>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-6 w-6 text-text-muted hover:text-state-error"
            onClick={(e) => { e.stopPropagation(); onDelete(project) }}
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      )}
    </div>
  )
}

export function ProjectSidebar({
  isOpen,
  projects,
  onClose,
  onNewProject,
  onRename,
  onDelete,
}: ProjectSidebarProps) {
  const ownedProjects = projects.filter((p) => p.role === "owner")
  const sharedProjects = projects.filter((p) => p.role === "collaborator")

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-72 z-50 flex flex-col bg-bg-elevated border-r border-border-default transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-12 border-b border-border-default shrink-0">
          <span className="text-sm font-medium text-text-primary">Projects</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-7 w-7 text-text-muted hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col min-h-0 p-3">
          <Tabs defaultValue="my-projects" className="flex-1 flex flex-col">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="flex-1 min-h-0 mt-2">
              {ownedProjects.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-text-muted">No projects yet</p>
                </div>
              ) : (
                <ScrollArea className="h-full">
                  <div className="flex flex-col gap-0.5 pr-1">
                    {ownedProjects.map((project) => (
                      <ProjectItem
                        key={project.id}
                        project={project}
                        onRename={onRename}
                        onDelete={onDelete}
                      />
                    ))}
                  </div>
                </ScrollArea>
              )}
            </TabsContent>

            <TabsContent value="shared" className="flex-1 min-h-0 mt-2">
              {sharedProjects.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-text-muted">Nothing shared with you yet</p>
                </div>
              ) : (
                <ScrollArea className="h-full">
                  <div className="flex flex-col gap-0.5 pr-1">
                    {sharedProjects.map((project) => (
                      <ProjectItem
                        key={project.id}
                        project={project}
                        onRename={onRename}
                        onDelete={onDelete}
                      />
                    ))}
                  </div>
                </ScrollArea>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="p-3 border-t border-border-default shrink-0">
          <Button variant="outline" className="w-full gap-2" onClick={onNewProject}>
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}
