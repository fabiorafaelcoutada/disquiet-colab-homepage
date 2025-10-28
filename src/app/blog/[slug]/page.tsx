import Link from 'next/link'; // Import Link for navigation
import { getMarkdownContent } from '@/lib/markdown';
import { getAuthorFullNameBySlug } from '@/lib/team';
import styles from './page.module.css'; // 1. Import our new CSS Module

type Props = {
    params: { slug: string }
};

// Function to generate dynamic metadata (page title, description)
export async function generateMetadata({ params }: Props) {
    // Correctly fetching content data
    const { data } = await getMarkdownContent(`blog/${params.slug}`);
    return {
        title: data.title,
        description: data.description || `Read the latest post: ${data.title}`,
    };
}

export default async function BlogPost({ params }: Props) {

    // 1. Fetch the blog content
    const { data, contentHtml } = await getMarkdownContent(`blog/${params.slug}`);

    // Destructure frontmatter data, including the new 'author' slug
    const { title, date, author } = data;

    // 2. Fetch the author's full name using the slug
    const authorFullName = author ? await getAuthorFullNameBySlug(author) : null;
    const displayAuthorName = authorFullName || 'Unknown Author';

    return (
        <div className="flex justify-center w-full py-12 px-4 md:px-8">
            <article className="max-w-4xl w-full">

                {/* Post Header */}
                <header className="mb-10 border-b pb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 leading-tight">
                        {title}
                    </h1>

                    {/* Date and Author Section */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-4">
                        <time dateTime={date}>{date}</time>

                        {/* Conditional Author Link */}
                        {author && (
                            <>
                                <span className="text-gray-400">|</span>
                                <Link
                                    // Construct the link using the author slug from the frontmatter
                                    href={`/team/${author}`}
                                    className="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-150 ease-in-out"
                                >
                                    {/* 4. Display the correctly fetched full name */}
                                    Written by: {displayAuthorName}
                                </Link>
                            </>
                        )}
                        {/* 5. Fallback for posts without an author defined */}
                        {!author && <span className="text-gray-400">| {displayAuthorName}</span>}
                    </div>
                </header>

                {/* Post Content */}
                {/* Apply the wrapper class from the CSS Module */}
                <div className={styles.blogContentWrapper}>
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </article>
        </div>
    );
}