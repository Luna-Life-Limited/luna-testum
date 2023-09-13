import { Article } from "../../types";
import "./ArticleDisplay.css";

interface IArticleDisplay {
  article: Article;
  onHideArticle: () => void;
}

export function ArticleDisplay({ article, onHideArticle }: IArticleDisplay) {
  return (
    <div className="ArticleDisplay" data-testid="ArticleDisplay">
      <div className="ArticleContainer">
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <div className="ArticleContent">
          {article.content.map(({ content, type }, index) => {
            if (type === "paragraph") {
              return (
                <div key={index} className="ArticleContentParagraph">
                  {content.map(({ type, text }, index2) => {
                    return (
                      <span
                        key={index2}
                        style={{
                          fontWeight: type === "bold-text" ? "bold" : "inherit",
                        }}
                      >
                        {text}
                      </span>
                    );
                  })}
                </div>
              );
            } else if (type === "bullet-list" || type === "ordered-list") {
              /* TODO: implement lists display */
              return (
                <div key={index} className="ArticleContentList">
                  LIST CONTENT NEEDS TO APPEAR HERE
                </div>
              );
            }
          })}
        </div>
        <button onClick={onHideArticle}>Close</button>
      </div>
    </div>
  );
}
