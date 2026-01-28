'use client'

import Link from 'next/link'
import { sidebarMenu } from '@/data/sidebarMenu'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu } from '@/components/ui/sidebar'

type Props = {
  open: boolean
}

// export default function Sidebar({ open }: Props) {
export default function AppSidebar() {
  return (
    // <>
    // <Sidebar>
    //   <SidebarHeader />
    //   <SidebarContent>
    //     <SidebarGroup />
    //     <SidebarGroup />
    //   </SidebarContent>
    //   <SidebarFooter />
    // </Sidebar>
    // </>
    <aside className="side open">
      <div className="sidemenu-list">
        {sidebarMenu.map((item) => (
          <div className="list-menu" key={item.path}>
            <Link href={item.path}>
              <span className="material-icons">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
