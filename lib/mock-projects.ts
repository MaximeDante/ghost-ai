export interface MockProject {
  id: string
  name: string
  slug: string
  role: "owner" | "collaborator"
}

export const MOCK_PROJECTS: MockProject[] = [
  { id: "1", name: "E-commerce Platform", slug: "e-commerce-platform", role: "owner" },
  { id: "2", name: "Chat Service", slug: "chat-service", role: "owner" },
  { id: "3", name: "Auth System", slug: "auth-system", role: "collaborator" },
]
