import Link from 'next/link';
import { getAllNews } from '@/lib/markdown';

export default function NewsIndex() {
    // 1. Fetch all news data
    const allNews = getAllNews();

    return (
        <div className="flex-grow flex flex-col items-center w-full">
            <div className="max-w-4xl mx-auto p-4 md:p-8 w-full">
                <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white border-b pb-2">Latest News & Press</h1>

                <div className="space-y-8">
                    {allNews.map((entry) => (
                        <article key={entry.slug} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition hover:shadow-lg">
                            <Link href={`/news/${entry.slug}`} className="block group">
                                <h2 className="text-2xl font-bold mb-1 text-blue-700 dark:text-blue-400 group-hover:underline">
                                    {entry.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {entry.date} {entry.source && ` | Source: ${entry.source}`}
                                </p>
                                <p className="text-gray-800 dark:text-gray-300">
                                    {entry.description}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>

                {allNews.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No news entries available yet.</p>
                )}
            </div>
        </div>
    );
}