import { getMarkdownContent } from '@/lib/markdown';
import Image from 'next/image';

// This tells TypeScript what kind of 'params' to expect
type Props = {
    params: { slug: string }
};

// The component is async so we can 'await' our data
export default async function TeamMemberPage({ params }: Props) {
    // 1. Get the slug (e.g., "fabio") from the URL
    const { slug } = params;

    // 2. Fetch the data for this specific member
    //    This will read 'src/content/team/[slug].md'
    const { data, contentHtml } = await getMarkdownContent(`team/${slug}`);

    return (
        // 'flex-grow' keeps the footer at the bottom
        <div className="flex-grow flex flex-col items-center p-4 md:p-12">
            <div className="max-w-4xl w-full">

                {/* === MEMBER HEADER === */}
                {/* We use the frontmatter 'data' here */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={data.image}
                            alt={`${data.firstName} ${data.lastName}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold dark:text-white">
                            {data.firstName} {data.lastName}
                        </h1>
                        <p className="text-2xl text-blue-500 dark:text-blue-400 mt-2">
                            {data.position}
                        </p>
                    </div>
                </div>

                {/* === MEMBER'S RESUME CONTENT === */}
                {/* We use 'prose' to style the markdown body */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

            </div>
        </div>
    );
}