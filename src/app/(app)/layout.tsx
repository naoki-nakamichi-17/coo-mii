"use client"

import Header from "@/components/Header"
import AppSidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="content flex">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">
            <Header />
            <div className="px-4 py-8">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </div>

      <Footer />
    </>
  )
}