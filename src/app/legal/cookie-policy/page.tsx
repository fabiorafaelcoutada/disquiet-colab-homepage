import { getMarkdownContent } from '@/lib/markdown';

// Define the expected structure of the frontmatter data
type PolicyFrontmatter = {
    title: string;
    lastUpdated: string;
};

export default async function CookiePolicyPage() {
    // Fetch the content from the Markdown file
    const { data, contentHtml } = await getMarkdownContent('pages/cookie-policy');
    const policyData = data as PolicyFrontmatter;

    return (
        // flex-grow ensures the sticky footer works
        <div className="flex-grow flex flex-col items-center p-4 md:p-12">
            <div className="max-w-4xl w-full">

                {/* Header/Title */}
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                    {policyData.title}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Last Updated: {policyData.lastUpdated}
                </p>

                {/* Content Body: Rendered with the prose classes for clean typography */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </div>
    );
}