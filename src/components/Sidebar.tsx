'use client'

import Link from 'next/link'
import { sidebarMenu } from '@/data/sidebarMenu'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { iconMap } from '@/lib/iconmap'

type Props = {
  open: boolean
}

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>メニュー</SidebarGroupLabel>

          <SidebarMenu>
            {sidebarMenu.map((item) => {
              const Icon = iconMap[item.icon as string]
              const active = pathname.startsWith(item.path)

              return (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild data-active={active}>
                    <Link href={item.path}>
                      {Icon && <Icon />}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    // <aside className="side open">
    //   <div className="sidemenu-list">
    //     {sidebarMenu.map((item) => (
    //       <div className="list-menu" key={item.path}>
    //         <Link href={item.path}>
    //           <span className="material-icons">{item.icon}</span>
    //           <span>{item.label}</span>
    //         </Link>
    //       </div>
    //     ))}
    //   </div>
    // </aside>
  )
}
