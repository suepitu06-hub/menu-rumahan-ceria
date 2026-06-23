import { db, getSettings } from "@/database/db";
import { MENU_MASTER, categorize, priceOf } from "@/data/menu_master";
import type { MealPlan, Menu, Category } from "@/types";
import { DAYS } from "@/types";

export function getMenuById(id: number | null): Menu | undefined {
  if (id == null) return undefined;
  return MENU_MASTER.find((m) => m.id === id);
}

export async function generateWeeklyPlan(): Promise<MealPlan[]> {
  const s = await getSettings();
  const allowed: Category[] = [];
  if (s.preferAyam) allowed.push("ayam");
  if (s.preferIkan) allowed.push("ikan");
  if (s.preferTelur) allowed.push("telur");
  if (s.preferSayur) allowed.push("sayur");
  allowed.push("tempe_tahu", "karbo");

  const breakfastPool = MENU_MASTER.filter((m) => m.category === "karbo" || m.category === "telur");
  const mainPool = MENU_MASTER.filter((m) => allowed.includes(m.category) && m.category !== "karbo");

  const pickAvoid = (pool: Menu[], avoidIds: number[]): Menu => {
    const filtered = pool.filter((m) => !avoidIds.includes(m.id));
    const list = filtered.length ? filtered : pool;
    return list[Math.floor(Math.random() * list.length)];
  };

  const plans: MealPlan[] = [];
  let prevLunch: number | null = null;
  let prevDinner: number | null = null;
  let prevBreakfast: number | null = null;

  for (const day of DAYS) {
    const b = pickAvoid(breakfastPool, [prevBreakfast].filter((x): x is number => x !== null));
    const l = pickAvoid(mainPool, [prevLunch, prevDinner].filter((x): x is number => x !== null));
    const d = pickAvoid(mainPool, [l.id, prevDinner].filter((x): x is number => x !== null));
    plans.push({ day, breakfast: b.id, lunch: l.id, dinner: d.id });
    prevBreakfast = b.id;
    prevLunch = l.id;
    prevDinner = d.id;
  }
  return plans;
}

export async function savePlans(plans: MealPlan[]) {
  await db.mealPlans.clear();
  await db.mealPlans.bulkAdd(plans);
}

export async function generateShoppingFromPlans(plans: MealPlan[]) {
  const set = new Set<string>();
  for (const p of plans) {
    [p.breakfast, p.lunch, p.dinner].forEach((id) => {
      const m = getMenuById(id);
      m?.ingredients.forEach((i) => set.add(i));
    });
  }
  const items = Array.from(set).map((name) => ({
    name,
    category: categorize(name),
    checked: false,
  }));
  await db.shoppingList.clear();
  await db.shoppingList.bulkAdd(items);
  return items;
}

export function estimateTotal(items: { name: string; checked?: boolean }[]) {
  return items.reduce((sum, i) => sum + priceOf(i.name), 0);
}
