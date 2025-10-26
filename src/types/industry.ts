/**
 * Defines the structure for a single application line item within an industry.
 */
export interface ApplicationDetail {
    name: string;
    details: string;
}

/**
 * Defines the structure for an entire industry sector block.
 */
export interface IndustrySector {
    title: string;
    icon: string;       // Used for icon lookup (e.g., 'car', 'factory')
    description: string;
    applications: ApplicationDetail[]; // The list of specific applications
}

/**
 * Defines the overall structure for the frontmatter of the industries page.
 */
export interface IndustriesFrontmatter {
    title: string;
    subtitle: string;
    industrySectors: IndustrySector[]; // The main array of sectors
}