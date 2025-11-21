"use client";

import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { Icon } from "@tabler/icons-react";
import { IconCode, IconPencil, IconWallet } from "@tabler/icons-react";
import { PenTool } from "lucide-react";

type RouteItem = {
  title: string;
  url: string;
  icon?: Icon;
};

const routes: RouteItem[] = [
  {
    title: "Draw",
    url: "/user/dashboard/draw",
    icon: IconPencil,
  },
  {
    title: "Codes",
    url: "/user/dashboard/codes",
    icon: IconCode,
  },
  {
    title: "Pricing",
    url: "/user/dashboard/pricing",
    icon: IconWallet,
  },
];

export function AppSidebar() {
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
        <NavMain items={routes} isQuickActionVisible={false} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
