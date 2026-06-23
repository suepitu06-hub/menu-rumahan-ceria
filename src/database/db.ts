import Dexie, { type Table } from "dexie";
import type { MealPlan, Favorite, ShoppingItem, Settings } from "@/types";

export class DapurDB extends Dexie {
  settings!: Table<Settings, number>;
  mealPlans!: Table<MealPlan, number>;
  favorites!: Table<Favorite, number>;
  shoppingList!: Table<ShoppingItem, number>;

  constructor() {
    super("DapurPlannerDB");
    this.version(1).stores({
      settings: "id",
      mealPlans: "++id, day",
      favorites: "++id, menuId",
      shoppingList: "++id, category, name",
    });
  }
}

export const db = new DapurDB();

export const DEFAULT_SETTINGS: Settings = {
  id: 1,
  familySize: "3",
  weeklyBudget: 500000,
  preferAyam: true,
  preferIkan: true,
  preferSayur: true,
  preferTelur: true,
};

export async function getSettings(): Promise<Settings> {
  const s = await db.settings.get(1);
  if (!s) {
    await db.settings.put(DEFAULT_SETTINGS);
    return DEFAULT_SETTINGS;
  }
  return s;
}
