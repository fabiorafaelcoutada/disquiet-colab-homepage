import { getMarkdownContent } from '@/lib/markdown';
// 1. Import all necessary types
import { ServicesFrontmatter, ServiceModel, ServiceDetail } from '@/types/service';
import { HiOutlineArrowRight, HiOutlineUserGroup, HiOutlineCube, HiOutlineChartSquareBar } from 'react-icons/hi';

// Placeholder Icon Mapping
const getServiceIconComponent = (iconName: string): React.ElementType => {
    switch (iconName.toLowerCase()) {
        case 'full-stack': return HiOutlineCube;
        case 'consulting': return HiOutlineChartSquareBar;
        case 'team': return HiOutlineUserGroup;
        default: return HiOutlineArrowRight;
    }
};

export default async function ServicesPage() {
    // 1. Fetch content and cast to the imported type
    const { data, contentHtml } = await getMarkdownContent('pages/services');
    const pageData = data as ServicesFrontmatter;

    return (
        <div className="flex-grow flex flex-col w-full">

            {/* 1. HERO/HEADER SECTION (Consistent blue branding) */}
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

            {/* 2. SERVICES GRIDS */}
            <section className="w-full py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto space-y-16">

                    {pageData.serviceModels.map((model: ServiceModel, index: number) => {
                        const IconComponent = getServiceIconComponent(model.icon);

                        return (
                            <div
                                key={index}
                                className="border border-gray-200 dark:border-gray-700 rounded-xl p-8"
                            >
                                {/* HEADER ROW: Icon, Title, and Description */}
                                <div className="flex items-start mb-6">
                                    <IconComponent className="w-10 h-10 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {model.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 italic">
                                            {model.description}
                                        </p>
                                    </div>
                                </div>

                                {/* DETAILS GRID: Specific Services Offered */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 border-t pt-6 dark:border-gray-700">
                                    {model.details.map((detail: ServiceDetail, detailIndex: number) => (
                                        <div key={detailIndex} className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                                {detail.name}
                                            </h3>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {detail.summary}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

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