/** The final list of skills (e.g., ['C', 'C++']) */
export type SkillList = string[];

/** * A recursive type allowing nested objects for categories.
 * Keys are category names (e.g., 'programmingLanguages', 'lowLevel').
 * Values can be either a SkillList or another nested SkillCategory.
 */
export type SkillCategory = {
    [key: string]: SkillList | SkillCategory;
};

// --- Existing Types ---

export type TeamMemberContact = {
    email?: string;
    phone?: string;
};

export type TeamMemberLinks = {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    twitter?: string;
};

// 1. TeamMemberSkills is now replaced by SkillCategory for flexibility
// export type TeamMemberSkills = { ... }; // <-- REMOVED/REPLACED

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
    dateOfBirth?: string;
    contact?: TeamMemberContact;
    links?: TeamMemberLinks;

    // 2. Updated to use the recursive type
    skills?: SkillCategory;

    experiences?: TeamMemberExperience[];
    achievements?: string[];
    hobbies?: string[];
    interests?: string[];
};