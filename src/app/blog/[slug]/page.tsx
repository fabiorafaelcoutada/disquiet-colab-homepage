import { getMarkdownContent } from '@/lib/markdown';

type Props = {
    params: { slug: string }
};

export default async function BlogPost({ params }: Props) {
    // The 'blog/' prefix comes from your /content subfolder
    const { data, contentHtml } = await getMarkdownContent(`blog/${params.slug}`);

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
            <div className="max-w-4xl w-full text-lg space-y-8">
                {/* Post Header */}
                <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
                <p className="text-gray-600 mb-8">{data.date}</p>

                {/* Post Content */}
                <div
                    className="prose prose-lg dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </main>
    );
}