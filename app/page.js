import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <>
      <div className="home-header">
        <h1>Radar Neural</h1>
        <p>Notícias e análises sobre inteligência artificial</p>
      </div>

      {articles.length === 0 ? (
        <div className="empty-state">
          <p>Nenhum artigo publicado ainda.</p>
        </div>
      ) : (
        <div className="article-list">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  );
}
