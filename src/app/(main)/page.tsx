// Only import your new function!
import { getMarkdownContent } from '@/lib/markdown';

export default async function Home() {
    // 1. Get the content
    const { data, contentHtml } = await getMarkdownContent('pages/homepage');

    // 2. Render it
    return (
        <div className="flex flex-col items-center p-24 flex-grow">
            <div className="max-w-4xl w-full text-lg space-y-8">
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <h2 className="text-2xl text-gray-600 mb-12">{data.subtitle}</h2>
                <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
        </div>
    );
}