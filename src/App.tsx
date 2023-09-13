import { Hero } from "./components/Hero/Hero";
import { CategorySelector } from "./components/CategorySelector/CategorySelector";
import { ArticleGrid } from "./components/ArticleGrid/ArticleGrid";
import { ArticleDisplay } from "./components/ArticleDisplay/ArticleDisplay";
import { useApp } from "./useApp";

function App() {
  const {
    categories,
    selectedArticle,
    filteredArticles,
    selectedCategoryId,
    setSelectedCategoryId,
    setSelectedArticleId,
  } = useApp();

  return (
    <div className="App" data-testid="App">
      <Hero />
      <CategorySelector
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={(id) => {
          setSelectedCategoryId(id);
        }}
      />
      <ArticleGrid
        articles={filteredArticles}
        onSelectArticle={(id) => {
          setSelectedArticleId(id);
        }}
      />
      {!!selectedArticle && (
        <ArticleDisplay
          article={selectedArticle}
          onHideArticle={() => {
            setSelectedArticleId(undefined);
          }}
        />
      )}
    </div>
  );
}

export default App;
