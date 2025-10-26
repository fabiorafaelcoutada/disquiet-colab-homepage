/**
 * Defines the structure for a single detailed point within a service model.
 */
export interface ServiceDetail {
    name: string;
    summary: string; // A short description of the service item
}

/**
 * Defines the structure for a high-level service category/model.
 */
export interface ServiceModel {
    title: string;
    icon: string;       // Used for icon lookup (e.g., 'full-stack', 'consulting')
    description: string; // The introductory description for the model
    details: ServiceDetail[]; // The list of specific services offered
}

/**
 * Defines the overall structure for the frontmatter of the services page.
 */
export interface ServicesFrontmatter {
    title: string;
    subtitle: string;
    serviceModels: ServiceModel[]; // The main array of service models
}