import { getAllArticles } from '@/lib/articles';

const BASE_URL = 'https://radarneural.com';

export default function sitemap() {
    const articles = getAllArticles();

    const articleEntries = articles.map((article) => ({
        url: `${BASE_URL}/artigo/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/sobre`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...articleEntries,
    ];
}
