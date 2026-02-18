import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export function getAllArticles() {
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory).filter(f => f.endsWith('.md'));

    const articles = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title || slug,
            date: data.date || '2026-01-01',
            summary: data.summary || '',
            category: data.category || '',
        };
    });

    return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticleBySlug(slug) {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title || slug,
        date: data.date || '2026-01-01',
        summary: data.summary || '',
        category: data.category || '',
        contentHtml,
    };
}

export function getAllSlugs() {
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }

    return fs
        .readdirSync(articlesDirectory)
        .filter(f => f.endsWith('.md'))
        .map((fileName) => fileName.replace(/\.md$/, ''));
}
