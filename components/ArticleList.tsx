import { Article } from 'utils/types';
import ArticleCard from './ArticleCard';
import ArticleCardLarge from './ArticleCardLarge';

type Props = {
  articles: Article[];
  isHomePage?: boolean;
};

export default function ArticleList({ articles, isHomePage }: Props) {
  const theFirstArticle: Article | null = isHomePage ? articles.shift() : null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:gap-12">
      {isHomePage && theFirstArticle && (
        <ArticleCardLarge article={theFirstArticle} key={theFirstArticle.id} />
      )}
      {articles.map(article => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}
