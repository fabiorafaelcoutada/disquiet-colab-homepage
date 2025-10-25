import { getMarkdownContent } from '@/lib/markdown';
import Link from 'next/link';
import { CardData } from '@/types/CardData';
import { ContentCard } from '@/components/ContentCard';

// Define the shape of the full frontmatter data (Unchanged)
type HomepageFrontmatter = {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    specialties: CardData[];
    visionTitle: string;
    visionCopy: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonLink: string;
};


export default async function Home() {
    const { data, contentHtml } = await getMarkdownContent('pages/homepage');
    const homepageData = data as HomepageFrontmatter;

    return (
        <div className="flex flex-col items-center w-full grow">

            {/* 1. HERO SECTION (Unchanged) */}
            <section className="w-full bg-blue-900 text-white py-32 flex justify-center text-center">
                <div className="max-w-5xl px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                        {homepageData.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-200">
                        {homepageData.subtitle}
                    </h2>
                    <Link
                        href={homepageData.buttonLink}
                        className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
                    >
                        {homepageData.buttonText}
                    </Link>
                </div>
            </section>

            {/* 2. VISION / ABOUT SECTION (Unchanged) */}
            <section className="w-full bg-gray-50 dark:bg-gray-800 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
                        {homepageData.visionTitle}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {homepageData.visionCopy}
                    </p>
                </div>
            </section>

            {/* 3. SPECIALTIES GRID (Unchanged) */}
            <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Core Competencies</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {homepageData.specialties.map((cardData, index) => (
                        <ContentCard key={index} cardData={cardData} />
                    ))}
                </div>
            </section>

            {/* 4. OPTIONAL LONG-FORM CONTENT (Rendered with prose) */}
            {contentHtml && contentHtml.trim() !== '' && (
                <section className="w-full py-16 px-6 bg-white dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>
                </section>
            )}

            {/* 5. FINAL CALL TO ACTION - MATCHES GRID COLOR SCHEME */}
            <section className="w-full py-24 px-6 bg-gray-50 dark:bg-gray-900 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Heading must be dark text now */}
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                        {homepageData.ctaTitle}
                    </h2>
                    {/* Subtitle adjusted for the light background */}
                    <p className="text-xl font-light mb-8 text-gray-700 dark:text-gray-300">
                        {homepageData.ctaSubtitle}
                    </p>
                    {/* Button remains the yellow accent */}
                    <Link
                        href={homepageData.ctaButtonLink}
                        className="inline-block px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-xl"
                    >
                        {homepageData.ctaButtonText}
                    </Link>
                </div>
            </section>
        </div>
    );
}
