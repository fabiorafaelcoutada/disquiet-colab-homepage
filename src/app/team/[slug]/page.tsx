import { getMarkdownContent } from '@/lib/markdown';
import Image from 'next/image';
import styles from './page.module.css'; // 1. Import the CSS Module

type Props = {
    params: { slug: string }
};

export default async function TeamMemberPage({ params }: Props) {
    const { slug } = params;
    const { data, contentHtml } = await getMarkdownContent(`team/${slug}`);

    return (
        // 2. Apply the main container style from the CSS module
        <div className={styles.pageContainer}>
            {/* 3. Apply the content wrapper style */}
            <div className={styles.contentWrapper}>

                {/* === MEMBER HEADER === */}
                {/* 4. Apply header card styles */}
                <div className={styles.memberHeader}>
                    {/* 5. Apply avatar styles */}
                    <div className={styles.avatar}>
                        <Image
                            src={data.image}
                            alt={`${data.firstName} ${data.lastName}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    {/* Keep text alignment utilities if needed */}
                    <div className="text-center md:text-left">
                        {/* 6. Apply name styles */}
                        <h1 className={styles.memberName}>
                            {data.firstName} {data.lastName}
                        </h1>
                        {/* 7. Apply position styles */}
                        <p className={styles.memberPosition}>
                            {data.position}
                        </p>
                    </div>
                </div>

                {/* === MEMBER'S RESUME CONTENT === */}
                {/* 8. Wrap the prose content in the styled container */}
                <div className={styles.resumeContentContainer}>
                    {/* Keep prose classes for markdown styling */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>

            </div>
        </div>
    );
}