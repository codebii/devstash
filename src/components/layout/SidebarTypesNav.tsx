import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getItemTypeStyle } from "@/lib/item-type-styles";
import { mockItemTypes } from "@/lib/mock-data";

interface SidebarTypesNavProps {
  pathname: string;
  onNavigate: () => void;
}

function toLabel(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function SidebarTypesNav({ pathname, onNavigate }: SidebarTypesNavProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Types</SidebarGroupLabel>
      <SidebarMenu>
        {mockItemTypes.map((type) => {
          const href = `/items/${type.slug}`;
          const { icon: Icon, textClass } = getItemTypeStyle(type.name);

          return (
            <SidebarMenuItem key={type.id}>
              <SidebarMenuButton
                isActive={pathname === href}
                render={<Link href={href} onClick={onNavigate} />}
              >
                <Icon className={textClass} />
                <span>{toLabel(type.slug)}</span>
                {type.pro && (
                  <Badge variant="outline" className="h-4 px-1.5 text-[10px] tracking-wide">
                    PRO
                  </Badge>
                )}
              </SidebarMenuButton>
              <SidebarMenuBadge className="text-muted-foreground">{type.itemCount}</SidebarMenuBadge>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
