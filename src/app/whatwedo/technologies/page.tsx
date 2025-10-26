import { getMarkdownContent } from '@/lib/markdown';
import { TechnologiesFrontmatter, TechnologyCategory, TechnologyDetail } from '@/types/technology';
import { HiOutlineLightBulb } from 'react-icons/hi'; // Icon for list items

// Placeholder Icon Mapping (Simplified for this page)
const getCategoryIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
        case 'chip': return '🔬';
        case 'brain': return '🧠';
        case 'code': return '💻';
        case 'lock': return '🔒';
        default: return '⚙️';
    }
};

export default async function TechnologiesPage() {
    // 1. Fetch content and cast to the imported type
    const { data, contentHtml } = await getMarkdownContent('pages/technologies');
    const pageData = data as TechnologiesFrontmatter;

    return (
        <div className="flex-grow flex flex-col w-full">

            {/* 1. HERO/HEADER SECTION */}
            <section className="w-full bg-blue-800 text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                        {pageData.title}
                    </h1>
                    <p className="text-xl font-light text-blue-200">
                        {pageData.subtitle}
                    </p>
                </div>
            </section>

            {/* 2. TECHNOLOGY GRIDS */}
            <section className="w-full py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto space-y-16">

                    {pageData.techCategories.map((category: TechnologyCategory, index: number) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-b pb-8 dark:border-gray-700 last:border-b-0"
                        >
                            {/* LEFT COLUMN: Category Header/Description */}
                            <div className="lg:col-span-1">
                                <div className="text-6xl text-blue-600 dark:text-blue-400 mb-4">
                                    {getCategoryIcon(category.icon)}
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    {category.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {category.description}
                                </p>
                            </div>

                            {/* RIGHT COLUMN: Detailed Technologies List */}
                            <div className="lg:col-span-2 space-y-6">
                                {category.technologies.map((tech: TechnologyDetail, techIndex: number) => (
                                    <div key={techIndex} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                                            <HiOutlineLightBulb className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                                            {tech.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 pl-7">
                                            {tech.details}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* 3. OPTIONAL LONG-FORM CONTENT */}
            {contentHtml && contentHtml.trim() !== '' && (
                <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>
                </section>
            )}
        </div>
    );
}