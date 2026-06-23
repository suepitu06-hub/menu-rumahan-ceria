import type { Menu } from "@/types";

export const MENU_MASTER: Menu[] = [
  // AYAM
  { id: 1, name: "Ayam Kecap", category: "ayam", ingredients: ["Ayam", "Bawang Merah", "Bawang Putih", "Kecap"] },
  { id: 2, name: "Ayam Goreng", category: "ayam", ingredients: ["Ayam", "Bawang Putih", "Kunyit", "Garam"] },
  { id: 3, name: "Ayam Balado", category: "ayam", ingredients: ["Ayam", "Cabai Merah", "Bawang Merah", "Tomat"] },
  { id: 4, name: "Opor Ayam", category: "ayam", ingredients: ["Ayam", "Santan", "Bawang Merah", "Bawang Putih", "Serai"] },
  { id: 5, name: "Soto Ayam", category: "ayam", ingredients: ["Ayam", "Bawang Putih", "Kunyit", "Daun Jeruk", "Bihun"] },
  { id: 6, name: "Semur Ayam", category: "ayam", ingredients: ["Ayam", "Kecap", "Bawang Merah", "Kentang"] },
  { id: 7, name: "Ayam Bakar", category: "ayam", ingredients: ["Ayam", "Kecap", "Bawang Putih", "Jahe"] },
  { id: 8, name: "Ayam Geprek", category: "ayam", ingredients: ["Ayam", "Cabai Rawit", "Bawang Putih", "Tepung"] },
  { id: 9, name: "Ayam Rica", category: "ayam", ingredients: ["Ayam", "Cabai Merah", "Jahe", "Daun Jeruk"] },
  { id: 10, name: "Ayam Tepung", category: "ayam", ingredients: ["Ayam", "Tepung", "Bawang Putih", "Telur"] },

  // IKAN
  { id: 11, name: "Ikan Goreng", category: "ikan", ingredients: ["Ikan", "Bawang Putih", "Kunyit", "Garam"] },
  { id: 12, name: "Ikan Bakar", category: "ikan", ingredients: ["Ikan", "Kecap", "Bawang Putih", "Jeruk Nipis"] },
  { id: 13, name: "Pepes Ikan", category: "ikan", ingredients: ["Ikan", "Daun Pisang", "Bawang Merah", "Cabai", "Kemangi"] },
  { id: 14, name: "Pindang Ikan", category: "ikan", ingredients: ["Ikan", "Asam Jawa", "Cabai", "Tomat"] },
  { id: 15, name: "Tongkol Balado", category: "ikan", ingredients: ["Ikan Tongkol", "Cabai Merah", "Bawang Merah"] },
  { id: 16, name: "Ikan Asam Manis", category: "ikan", ingredients: ["Ikan", "Saus Tomat", "Bawang Bombay", "Wortel"] },
  { id: 17, name: "Gulai Ikan", category: "ikan", ingredients: ["Ikan", "Santan", "Kunyit", "Cabai"] },
  { id: 18, name: "Ikan Sambal Kecap", category: "ikan", ingredients: ["Ikan", "Kecap", "Cabai Rawit", "Bawang Merah"] },

  // TELUR
  { id: 19, name: "Telur Dadar", category: "telur", ingredients: ["Telur", "Bawang Merah", "Daun Bawang"] },
  { id: 20, name: "Telur Balado", category: "telur", ingredients: ["Telur", "Cabai Merah", "Bawang Merah"] },
  { id: 21, name: "Telur Kecap", category: "telur", ingredients: ["Telur", "Kecap", "Bawang Putih"] },
  { id: 22, name: "Telur Gulung", category: "telur", ingredients: ["Telur", "Garam", "Daun Bawang"] },
  { id: 23, name: "Telur Mata Sapi", category: "telur", ingredients: ["Telur", "Garam"] },
  { id: 24, name: "Telur Rebus Sambal", category: "telur", ingredients: ["Telur", "Cabai", "Bawang Merah"] },
  { id: 25, name: "Orak Arik Telur", category: "telur", ingredients: ["Telur", "Wortel", "Bawang Putih"] },
  { id: 26, name: "Telur Pindang", category: "telur", ingredients: ["Telur", "Kecap", "Daun Salam"] },

  // SAYUR
  { id: 27, name: "Capcay", category: "sayur", ingredients: ["Wortel", "Sawi", "Kol", "Bawang Putih"] },
  { id: 28, name: "Sayur Asem", category: "sayur", ingredients: ["Kacang Panjang", "Labu", "Asam Jawa", "Jagung"] },
  { id: 29, name: "Sayur Sop", category: "sayur", ingredients: ["Wortel", "Kentang", "Buncis", "Bawang Putih"] },
  { id: 30, name: "Tumis Kangkung", category: "sayur", ingredients: ["Kangkung", "Bawang Putih", "Cabai"] },
  { id: 31, name: "Tumis Bayam", category: "sayur", ingredients: ["Bayam", "Bawang Putih", "Garam"] },
  { id: 32, name: "Sayur Lodeh", category: "sayur", ingredients: ["Labu", "Santan", "Kacang Panjang", "Bawang Merah"] },
  { id: 33, name: "Urap Sayur", category: "sayur", ingredients: ["Kacang Panjang", "Bayam", "Kelapa Parut", "Cabai"] },
  { id: 34, name: "Tumis Buncis", category: "sayur", ingredients: ["Buncis", "Bawang Putih", "Wortel"] },
  { id: 35, name: "Tumis Sawi", category: "sayur", ingredients: ["Sawi", "Bawang Putih", "Cabai"] },
  { id: 36, name: "Cah Kangkung Terasi", category: "sayur", ingredients: ["Kangkung", "Terasi", "Cabai Merah"] },
  { id: 37, name: "Bening Bayam", category: "sayur", ingredients: ["Bayam", "Jagung", "Bawang Merah"] },
  { id: 38, name: "Tumis Toge", category: "sayur", ingredients: ["Toge", "Tahu", "Bawang Putih"] },
  { id: 39, name: "Gado Gado", category: "sayur", ingredients: ["Kacang Panjang", "Tahu", "Telur", "Kacang Tanah"] },
  { id: 40, name: "Pecel Sayur", category: "sayur", ingredients: ["Bayam", "Kacang Panjang", "Toge", "Kacang Tanah"] },

  // TEMPE TAHU
  { id: 41, name: "Tempe Goreng", category: "tempe_tahu", ingredients: ["Tempe", "Bawang Putih", "Garam"] },
  { id: 42, name: "Tempe Orek", category: "tempe_tahu", ingredients: ["Tempe", "Kecap", "Cabai", "Bawang Merah"] },
  { id: 43, name: "Tempe Balado", category: "tempe_tahu", ingredients: ["Tempe", "Cabai Merah", "Bawang Merah"] },
  { id: 44, name: "Tahu Goreng", category: "tempe_tahu", ingredients: ["Tahu", "Bawang Putih", "Garam"] },
  { id: 45, name: "Tahu Kecap", category: "tempe_tahu", ingredients: ["Tahu", "Kecap", "Bawang Putih", "Cabai"] },
  { id: 46, name: "Tahu Balado", category: "tempe_tahu", ingredients: ["Tahu", "Cabai", "Bawang Merah"] },
  { id: 47, name: "Tempe Mendoan", category: "tempe_tahu", ingredients: ["Tempe", "Tepung", "Daun Bawang"] },
  { id: 48, name: "Tahu Isi Sayur", category: "tempe_tahu", ingredients: ["Tahu", "Wortel", "Kol", "Tepung"] },
  { id: 49, name: "Sambal Goreng Tempe", category: "tempe_tahu", ingredients: ["Tempe", "Cabai Merah", "Bawang Merah", "Kecap"] },
  { id: 50, name: "Tahu Crispy", category: "tempe_tahu", ingredients: ["Tahu", "Tepung", "Bawang Putih"] },

  // KARBO / SARAPAN
  { id: 51, name: "Nasi Goreng", category: "karbo", ingredients: ["Nasi", "Telur", "Bawang Merah", "Kecap"] },
  { id: 52, name: "Mie Goreng", category: "karbo", ingredients: ["Mie", "Telur", "Bawang Putih", "Kecap"] },
  { id: 53, name: "Bubur Ayam", category: "karbo", ingredients: ["Beras", "Ayam", "Bawang Goreng", "Daun Bawang"] },
  { id: 54, name: "Roti Bakar", category: "karbo", ingredients: ["Roti", "Mentega", "Selai"] },
  { id: 55, name: "Lontong Sayur", category: "karbo", ingredients: ["Lontong", "Santan", "Labu", "Bawang Merah"] },
  { id: 56, name: "Nasi Uduk", category: "karbo", ingredients: ["Beras", "Santan", "Daun Salam", "Serai"] },
  { id: 57, name: "Nasi Kuning", category: "karbo", ingredients: ["Beras", "Kunyit", "Santan", "Daun Salam"] },
  { id: 58, name: "Bubur Kacang Hijau", category: "karbo", ingredients: ["Kacang Hijau", "Santan", "Gula Merah"] },
  { id: 59, name: "Pancake Sederhana", category: "karbo", ingredients: ["Tepung", "Telur", "Susu", "Gula"] },
  { id: 60, name: "Omelet Sayur", category: "karbo", ingredients: ["Telur", "Wortel", "Daun Bawang"] },
  { id: 61, name: "Sandwich Telur", category: "karbo", ingredients: ["Roti", "Telur", "Mentega"] },
  { id: 62, name: "Nasi Tim Ayam", category: "karbo", ingredients: ["Beras", "Ayam", "Jamur", "Kecap"] },
];

// Default harga (Rp) per bahan
export const INGREDIENT_PRICES: Record<string, number> = {
  "Ayam": 40000, "Ikan": 35000, "Ikan Tongkol": 30000, "Telur": 30000,
  "Tempe": 6000, "Tahu": 6000, "Beras": 15000, "Mie": 5000, "Bihun": 7000,
  "Lontong": 8000, "Roti": 15000, "Tepung": 10000, "Kacang Hijau": 12000,
  "Kacang Tanah": 15000, "Kacang Panjang": 6000, "Wortel": 10000, "Kentang": 12000,
  "Sawi": 5000, "Kol": 6000, "Bayam": 4000, "Kangkung": 4000, "Buncis": 8000,
  "Toge": 4000, "Labu": 8000, "Jagung": 6000, "Tomat": 8000, "Jamur": 10000,
  "Bawang Merah": 8000, "Bawang Putih": 7000, "Bawang Bombay": 6000,
  "Cabai": 10000, "Cabai Merah": 12000, "Cabai Rawit": 15000, "Kunyit": 3000,
  "Jahe": 3000, "Serai": 2000, "Daun Salam": 1000, "Daun Jeruk": 1000,
  "Daun Pisang": 2000, "Daun Bawang": 3000, "Kemangi": 3000, "Asam Jawa": 3000,
  "Jeruk Nipis": 2000, "Santan": 8000, "Kecap": 8000, "Saus Tomat": 8000,
  "Terasi": 3000, "Garam": 2000, "Gula": 5000, "Gula Merah": 6000,
  "Susu": 10000, "Mentega": 10000, "Selai": 12000, "Kelapa Parut": 5000,
  "Bawang Goreng": 5000,
};

export const INGREDIENT_CATEGORY: Record<string, ShoppingCat> = {};
type ShoppingCat = "Protein" | "Sayuran" | "Bumbu" | "Karbohidrat";
const protein = ["Ayam", "Ikan", "Ikan Tongkol", "Telur", "Tempe", "Tahu"];
const karbo = ["Beras", "Mie", "Bihun", "Lontong", "Roti", "Tepung", "Kacang Hijau", "Kacang Tanah"];
const sayur = ["Kacang Panjang", "Wortel", "Kentang", "Sawi", "Kol", "Bayam", "Kangkung", "Buncis", "Toge", "Labu", "Jagung", "Tomat", "Jamur", "Kemangi", "Daun Bawang"];
protein.forEach(i => INGREDIENT_CATEGORY[i] = "Protein");
karbo.forEach(i => INGREDIENT_CATEGORY[i] = "Karbohidrat");
sayur.forEach(i => INGREDIENT_CATEGORY[i] = "Sayuran");

export function categorize(name: string): ShoppingCat {
  return INGREDIENT_CATEGORY[name] ?? "Bumbu";
}

export function priceOf(name: string): number {
  return INGREDIENT_PRICES[name] ?? 5000;
}
