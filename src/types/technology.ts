/**
 * Defines the structure for a single line item within a technology list.
 * (e.g., name: "Yocto", details: "Custom BSP Development")
 */
export interface TechnologyDetail {
    name: string;
    details: string;
}

/**
 * Defines the structure for an entire category block in the What We Do page.
 * This structure combines descriptive fields with the technical list.
 */
export interface TechnologyCategory {
    title: string;
    icon: string;       // Used for icon lookup (e.g., 'chip', 'brain')
    description: string;
    technologies: TechnologyDetail[]; // The list of items within the category
}

/**
 * Defines the overall structure for the frontmatter of the technologies page.
 */
export interface TechnologiesFrontmatter {
    title: string;
    subtitle: string;
    techCategories: TechnologyCategory[]; // The main array of categorized sections
}
