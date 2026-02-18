import Link from 'next/link';

export default function ArticleCard({ article }) {
    const date = new Date(article.date + 'T00:00:00');
    const formattedDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    return (
        <Link href={`/artigo/${article.slug}`} className="article-card">
            <div className="article-card-meta">
                <span className="article-card-date">{formattedDate}</span>
                {article.category && (
                    <span className="article-card-category">{article.category}</span>
                )}
            </div>
            <h2 className="article-card-title">{article.title}</h2>
            {article.summary && (
                <p className="article-card-summary">{article.summary}</p>
            )}
        </Link>
    );
}
