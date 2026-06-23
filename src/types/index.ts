export type Category = "ayam" | "ikan" | "telur" | "sayur" | "tempe_tahu" | "karbo";

export interface Menu {
  id: number;
  name: string;
  category: Category;
  ingredients: string[];
}

export interface MealPlan {
  id?: number;
  day: string;
  breakfast: number | null;
  lunch: number | null;
  dinner: number | null;
}

export interface Favorite {
  id?: number;
  menuId: number;
}

export interface ShoppingItem {
  id?: number;
  name: string;
  category: "Protein" | "Sayuran" | "Bumbu" | "Karbohidrat";
  checked: boolean;
}

export interface Settings {
  id: number;
  familySize: string;
  weeklyBudget: number;
  preferAyam: boolean;
  preferIkan: boolean;
  preferSayur: boolean;
  preferTelur: boolean;
}

export const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
