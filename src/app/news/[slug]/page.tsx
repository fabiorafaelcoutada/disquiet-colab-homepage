import { getMarkdownContent } from '@/lib/markdown';

type Props = {
    params: { slug: string }
};

type NewsFrontmatter = {
    title: string;
    date: string;
    description: string;
    source?: string;
};

export default async function NewsEntryPage({ params }: Props) {
    const { slug } = params;
    // 1. Fetch content using the slug and content folder name
    const { data, contentHtml } = await getMarkdownContent(`news/${slug}`);
    const newsData = data as NewsFrontmatter;

    return (
        <div className="flex-grow flex flex-col items-center p-4 md:p-12 w-full">
            <div className="max-w-4xl w-full">

                {/* News Header */}
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                        {newsData.title}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Published: {newsData.date}
                        {newsData.source && <span className="ml-4 font-semibold text-blue-600 dark:text-blue-400">Source: {newsData.source}</span>}
                    </p>
                </header>

                {/* Content Body */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

            </div>
        </div>
    );
}