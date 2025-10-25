import React from 'react';
import Link from 'next/link';
import { HiOutlineCog, HiOutlineLockClosed, HiOutlineChip, HiOutlineCode, HiOutlineServer, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { CardData } from '@/types/CardData';

// --- ICON MAPPING AND HELPERS ---
// Define the mapping dictionary accessible by all functions in this file
const IconMap: { [key: string]: React.ElementType } = {
    // Specialties
    'brain': HiOutlineServer,
    'lock': HiOutlineLockClosed,
    'chip': HiOutlineChip,
    'code': HiOutlineCode,

    // Industries (Example)
    'finance': HiOutlineCurrencyDollar,
    'embedded': HiOutlineChip,
    'default': HiOutlineCog,
};

// Helper function to dynamically select the component
const getIconComponent = (iconName: string): React.ElementType => {
    return IconMap[iconName.toLowerCase()] || IconMap['default'];
};


// Helper function to determine the border and text color
const getColorClass = (iconName: string) => {
    switch (iconName.toLowerCase()) {
        case 'brain':
        case 'health':
            return 'border-t-4 border-green-500 text-green-600 dark:text-green-400';
        case 'lock':
            return 'border-t-4 border-red-500 text-red-600 dark:text-red-400';
        case 'chip':
        case 'embedded':
        case 'automotive':
            return 'border-t-4 border-blue-500 text-blue-600 dark:text-blue-400';
        default:
            return 'border-t-4 border-yellow-500 text-yellow-600 dark:text-yellow-400';
    }
};
// --- END HELPERS ---


export function ContentCard({ cardData }: { cardData: CardData }) {
    const colorClasses = getColorClass(cardData.icon);
    // Destructure color classes into separate variables
    const [borderColor, textColor] = colorClasses.split(' ').slice(0, 2);

    // ✅ FIX: getIconComponent is now correctly called
    const IconComponent = getIconComponent(cardData.icon);

    return (
        <div
            className={`
                bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl 
                ${borderColor} 
                transition-shadow duration-300 
                transform hover:scale-[1.03] hover:shadow-2xl 
            `}
        >

            {/* Icon (Uses dynamic color from the helper function) */}
            <div className={`text-5xl mb-4 ${textColor}`}>
                <IconComponent className="w-12 h-12" aria-hidden="true" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold mb-2 text-gray-900 dark:text-white">
                {cardData.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cardData.description}
            </p>

            {/* Optional Link */}
            {cardData.link && (
                <Link
                    href={cardData.link}
                    className={`mt-4 inline-block ${textColor} font-semibold hover:underline text-sm`}
                >
                    Learn More &rarr;
                </Link>
            )}
        </div>
    );
}
