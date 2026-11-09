import { ref, onMounted } from "vue";
import { parseNewsCSV, type NewsItem } from "../utils/csvParser";

// Category order, colors and labels shared by the news and map views
export const categories: Record<string, { emoji: string; color: string; en: string; es: string }> = {
  paper: { emoji: "📄", color: "#db2777", en: "Papers", es: "Artículos" },
  talk: { emoji: "🎤", color: "#0891b2", en: "Talks", es: "Charlas" },
  media: { emoji: "📰", color: "#d97706", en: "Media", es: "Medios" },
  career: { emoji: "🚀", color: "#7c3aed", en: "Career", es: "Trayectoria" },
  service: { emoji: "🤝", color: "#059669", en: "Service", es: "Comunidad" },
  award: { emoji: "🏆", color: "#ca8a04", en: "Awards", es: "Premios" },
};

export const categoryOf = (item: NewsItem) => categories[item.category] || categories.talk;

// "Budapest, Hungary" -> "Hungary"; remote items have no country
export const countryOf = (item: NewsItem) =>
  item.lat === undefined ? "" : item.location.split(",").pop()!.trim();

export function useNews() {
  const news = ref<NewsItem[]>([]);
  onMounted(async () => {
    try {
      news.value = parseNewsCSV(await (await fetch("/data/news.csv")).text());
    } catch (error) {
      console.error("Error loading news:", error);
    }
  });
  return news;
}

export const countByCategory = (items: NewsItem[]) => {
  const counts: Record<string, number> = {};
  items.forEach((item) => (counts[item.category] = (counts[item.category] || 0) + 1));
  return counts;
};
