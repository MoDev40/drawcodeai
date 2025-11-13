'use client';

import { type Icon } from '@tabler/icons-react';
import * as React from 'react';

import { NavMain } from '@/components/layout/nav-main';
import { NavUser } from '@/components/layout/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { PenTool } from 'lucide-react';

type AppSidebarProps = {
  routes: { title: string; url: string; icon?: Icon }[];
};

export function AppSidebar({ routes }: AppSidebarProps) {
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center gap-3">
                <PenTool />
                <span className="text-lg font-semibold tracking-tight">
                  DrawCode AI
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes} isQuickActionVisible={true} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
