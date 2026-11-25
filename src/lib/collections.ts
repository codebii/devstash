import type { MockCollection, MockItem } from "@/lib/mock-data";

const RECENT_COLLECTIONS_LIMIT = 3;

// The type a collection holds most of; falls back to its default type when empty.
export function getDominantTypeId(collection: MockCollection): string {
  let dominantId = collection.defaultTypeId;
  let maxCount = 0;

  for (const [typeId, count] of Object.entries(collection.typeCounts)) {
    if (count > maxCount) {
      dominantId = typeId;
      maxCount = count;
    }
  }

  return dominantId;
}

export function getFavoriteCollections(collections: MockCollection[]): MockCollection[] {
  return collections.filter((collection) => collection.isFavorite);
}

// Non-favorite collections ordered by their most recently updated item.
export function getRecentCollections(
  collections: MockCollection[],
  items: MockItem[],
  limit = RECENT_COLLECTIONS_LIMIT,
): MockCollection[] {
  const lastActivity = new Map<string, number>();

  for (const item of items) {
    const updatedAt = Date.parse(item.updatedAt);
    for (const collectionId of item.collectionIds) {
      lastActivity.set(collectionId, Math.max(lastActivity.get(collectionId) ?? 0, updatedAt));
    }
  }

  return collections
    .filter((collection) => !collection.isFavorite)
    .sort((a, b) => (lastActivity.get(b.id) ?? 0) - (lastActivity.get(a.id) ?? 0))
    .slice(0, limit);
}
