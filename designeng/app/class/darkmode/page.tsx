import Home from "@/components/darkmode/home";

export default function page() {
  return (
    <div className="bg-background text-foreground h-screen [--pattern-fg:var(--color-neutral-950)]/5">
      <Home />
    </div>
  )
}
