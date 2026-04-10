import { desc, eq } from "drizzle-orm";
import * as crypto from "expo-crypto";
import { db } from "./db/client";
import { groceryItems } from "./db/schema";

export const listGroceryItems = async () => {
  try {
    return await db
      .select()
      .from(groceryItems)
      .orderBy(desc(groceryItems.updated_at));
  } catch (error) {
    console.error("Failed to fetch grocery items:", error);
    throw new Error("Could not retrieve your list.");
  }
};

export const createGroceryItems = async (input: {
  name: string;
  category: string;
  quantity: number;
  priority: string;
}) => {
  const rows = await db
    .insert(groceryItems)
    .values({
      id: crypto.randomUUID(),
      name: input.name,
      category: input.category,
      quantity: Math.max(1, input.quantity),
      purchased: false,
      priority: input.priority,
      updated_at: Date.now(),
    })
    .returning();

  return rows[0];
};

// purchased
export const setGroceryItemPurchased = async (
  id: string,
  purchased: boolean,
) => {
  const rows = await db
    .update(groceryItems)
    .set({ purchased, updated_at: Date.now() })
    .where(eq(groceryItems.id, id))
    .returning();

  if (!rows.length) return null;
  return rows[0];
};

// update
// 1. Fixed typo: "aysnc" -> "async"
export const updateGroceryItemQuantity = async (
  id: string,
  quantity: number,
) => {
  const rows = await db
    .update(groceryItems)
    .set({
      // 2. Math logic is good, ensures positive integers
      quantity: Math.max(1, Math.floor(quantity)),
      updated_at: Date.now(),
    })
    .where(eq(groceryItems.id, id))
    .returning();

  // 4. Clean return pattern
  return rows.length ? rows[0] : null;
};
// DELETE ITEM
export const deleteGroceryItem = async (id: string) => {
  try {
    return await db
      .delete(groceryItems)
      .where(eq(groceryItems.id, id))
      .returning();
  } catch (error) {
    console.error("Failed to delete item:", error);
    return null;
  }
};
