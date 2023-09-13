import data from "../_localData/data.json";
import { Article, Category } from "../types";

export function useData() {
  return {
    categories: data.categories as Category[],
    articles: data.articles as Article[],
  };
}
