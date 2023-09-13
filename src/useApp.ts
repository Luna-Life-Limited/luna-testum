import { useState, useMemo } from "react";

import { useData } from "./hooks/useData";

export function useApp() {
  const { categories, articles } = useData();

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >();

  const [selectedArticleId, setSelectedArticleId] = useState<
    string | undefined
  >();

  const selectedArticle = useMemo(() => {
    return articles.find(({ id }) => id === selectedArticleId);
  }, [articles, selectedArticleId]);

  const filteredArticles = useMemo(() => {
    if (selectedCategoryId) {
      return articles.filter(({ categories }) =>
        categories.includes(selectedCategoryId)
      );
    }
    return articles;
  }, [articles, selectedCategoryId]);

  return {
    categories,
    selectedCategoryId,
    selectedArticle,
    filteredArticles,
    setSelectedCategoryId,
    setSelectedArticleId,
  };
}
