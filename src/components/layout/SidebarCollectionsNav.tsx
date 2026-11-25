import Link from "next/link";
import { Star } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getDominantTypeId, getFavoriteCollections, getRecentCollections } from "@/lib/collections";
import { getItemTypeStyle } from "@/lib/item-type-styles";
import { mockCollections, mockItems, mockItemTypes, type MockCollection } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface SidebarCollectionsNavProps {
  pathname: string;
  onNavigate: () => void;
}

interface CollectionGroupProps extends SidebarCollectionsNavProps {
  label: string;
  collections: MockCollection[];
}

function getCollectionDotClass(collection: MockCollection): string {
  const typeId = getDominantTypeId(collection);
  const typeName = mockItemTypes.find((type) => type.id === typeId)?.name;
  return getItemTypeStyle(typeName).bgClass;
}

function CollectionGroup({ label, collections, pathname, onNavigate }: CollectionGroupProps) {
  if (collections.length === 0) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {collections.map((collection) => {
          const href = `/collections/${collection.id}`;

          return (
            <SidebarMenuItem key={collection.id}>
              <SidebarMenuButton
                isActive={pathname === href}
                render={<Link href={href} onClick={onNavigate} />}
              >
                <span
                  aria-hidden="true"
                  className={cn("ml-1 size-2.5 shrink-0 rounded-full", getCollectionDotClass(collection))}
                />
                <span className="flex-1 truncate">{collection.name}</span>
                {collection.isFavorite && (
                  <Star aria-label="Favorite" className="fill-yellow-400 text-yellow-400" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export function SidebarCollectionsNav(props: SidebarCollectionsNavProps) {
  return (
    <>
      <CollectionGroup label="Favorite collections" collections={getFavoriteCollections(mockCollections)} {...props} />
      <CollectionGroup
        label="Recent collections"
        collections={getRecentCollections(mockCollections, mockItems)}
        {...props}
      />
    </>
  );
}
