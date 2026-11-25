"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Layers, LayoutGrid, Star, X } from "lucide-react";

import { SidebarCollectionsNav } from "@/components/layout/SidebarCollectionsNav";
import { SidebarTypesNav } from "@/components/layout/SidebarTypesNav";
import { SidebarUser } from "@/components/layout/SidebarUser";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const MAIN_NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Favorites", href: "/favorites", icon: Star },
  { label: "Recently used", href: "/recent", icon: Clock },
] as const;

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar, setOpenMobile } = useSidebar();
  const closeMobile = () => setOpenMobile(false);

  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex-row items-center justify-between border-b px-4">
        <Link href="/dashboard" onClick={closeMobile} className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Layers className="size-4" />
          </span>
          DevStash
        </Link>
        <Button variant="ghost" size="icon-sm" onClick={toggleSidebar} aria-label="Close sidebar">
          <X />
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {MAIN_NAV.map(({ label, href, icon: Icon }) => (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton
                  isActive={pathname === href}
                  render={<Link href={href} onClick={closeMobile} />}
                >
                  <Icon />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarTypesNav pathname={pathname} onNavigate={closeMobile} />
        <SidebarCollectionsNav pathname={pathname} onNavigate={closeMobile} />
      </SidebarContent>

      <SidebarFooter className="border-t p-3">
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
}
