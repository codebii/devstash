import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { Clock, Pin } from "lucide-react";

import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { ItemCard } from "@/components/dashboard/ItemCard";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { Skeleton } from "@/components/ui/skeleton";
import { sortCollectionsByActivity } from "@/lib/collections";
import { getPinnedItems, getRecentItems } from "@/lib/items";
import { mockCollections, mockItems, mockStats } from "@/lib/mock-data";

const DASHBOARD_COLLECTIONS_LIMIT = 6;
const CARD_GRID = "grid gap-4 md:grid-cols-2";

const STATS = [
  { label: "Items", value: mockStats.items },
  { label: "Collections", value: mockStats.collections },
  { label: "Favorite items", value: mockStats.favoriteItems },
  { label: "Favorite collections", value: mockStats.favoriteCollections },
];

function CardGridSkeleton({ count }: { count: number }) {
  return (
    <div className={CARD_GRID}>
      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} className="h-52 rounded-xl" />
      ))}
    </div>
  );
}

// Relative timestamps depend on the current time, so these sections render per request.
async function getRequestTime(): Promise<number> {
  await connection();
  return Date.now();
}

async function PinnedItems() {
  const now = await getRequestTime();
  const items = getPinnedItems(mockItems);

  if (items.length === 0) return null;

  return (
    <DashboardSection title="Pinned" icon={Pin}>
      <div className={CARD_GRID}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} now={now} />
        ))}
      </div>
    </DashboardSection>
  );
}

async function RecentItems() {
  const now = await getRequestTime();

  return (
    <DashboardSection title="Recent items" icon={Clock}>
      <div className={CARD_GRID}>
        {getRecentItems(mockItems).map((item) => (
          <ItemCard key={item.id} item={item} now={now} />
        ))}
      </div>
    </DashboardSection>
  );
}

function RecentCollections() {
  const collections = sortCollectionsByActivity(mockCollections, mockItems).slice(0, DASHBOARD_COLLECTIONS_LIMIT);

  return (
    <DashboardSection
      title="Recent collections"
      action={
        <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground">
          View all
        </Link>
      }
    >
      <div className={CARD_GRID}>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </DashboardSection>
  );
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Everything you&apos;ve stashed, in one place.</p>
        </div>
        <StatsCards stats={STATS} />
      </div>

      <Suspense fallback={<CardGridSkeleton count={2} />}>
        <PinnedItems />
      </Suspense>

      <RecentCollections />

      <Suspense fallback={<CardGridSkeleton count={4} />}>
        <RecentItems />
      </Suspense>
    </div>
  );
}
