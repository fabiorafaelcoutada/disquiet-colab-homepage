// This interface defines the reusable structure for ANY content card:
// be it a Specialty, Industry, Service, or Blog Preview.
export interface CardData {
    title: string;
    // NOTE: This field should now contain a specific icon identifier
    // (e.g., 'HiOutlineCog', 'FaChartBar') or a simplified name.
    icon: string;
    description: string;
    link?: string;
    color?: string;
}