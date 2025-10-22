export type TeamMemberContact = {
    email?: string;
    phone?: string;
};

export type TeamMemberLinks = {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    twitter?: string; // Add others as needed
};

// Define specific skill categories you plan to use
export type TeamMemberSkills = {
    programming?: string[];
    buildSystems?: string[];
    frameworks?: string[];
    databases?: string[];
    cloud?: string[];
    testing?: string[];
    devops?: string[];
    other?: string[];
    // Add more categories as needed
};

export type TeamMemberExperience = {
    role: string;
    company: string;
    period: string;
    description: string;
    location?: string;
};

// This is the overall type for the frontmatter 'data' object
export type TeamMemberFrontmatter = {
    slug: string;
    firstName: string;
    lastName: string;
    position: string;
    image: string;
    dateOfBirth?: string; // Optional field
    contact?: TeamMemberContact; // Optional object
    links?: TeamMemberLinks; // Optional object
    skills?: TeamMemberSkills; // Optional object
    experiences?: TeamMemberExperience[]; // Optional array
    achievements?: string[]; // Optional array
    hobbies?: string[]; // <-- Add this
    interests?: string[]; // <-- Add this
};