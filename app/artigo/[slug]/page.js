import { getArticleBySlug, getAllSlugs } from '@/lib/articles';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    return {
        title: article.title,
        description: article.summary,
        openGraph: {
            title: article.title,
            description: article.summary,
            type: 'article',
            publishedTime: article.date,
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    const date = new Date(article.date + 'T00:00:00');
    const formattedDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return (
        <>
            <Link href="/" className="back-link">
                ← Voltar
            </Link>

            <article>
                <div className="article-header">
                    <h1>{article.title}</h1>
                    <div className="article-meta">
                        <span>{formattedDate}</span>
                        {article.category && (
                            <>
                                <span>·</span>
                                <span>{article.category}</span>
                            </>
                        )}
                    </div>
                </div>

                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />
            </article>
        </>
    );
}
