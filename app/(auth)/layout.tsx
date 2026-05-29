import { Sparkles, Users, FileText } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col bg-bg-elevated p-14">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-accent-primary shrink-0" />
          <span className="text-text-primary text-sm font-medium tracking-tight">Ghost AI</span>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mt-16">
          <h1 className="text-text-primary text-[2rem] font-bold leading-[1.15] tracking-tight mb-4">
            Design systems at the<br />speed of thought.
          </h1>
          <p className="text-text-muted text-sm leading-relaxed mb-12">
            Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>

          <div className="space-y-7">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="h-9 w-9 rounded-xl bg-bg-subtle border border-border-default flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-accent-primary" />
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium mb-1">{title}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 bg-bg-base">
        {children}
      </div>
    </div>
  )
}
