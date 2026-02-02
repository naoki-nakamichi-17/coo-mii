"use client"

import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarToggle() {
  const { open, setOpen } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setOpen(!open)}
      aria-label="Toggle Sidebar"
    >
      <PanelLeft className="size-4" />
    </Button>
  )
}
