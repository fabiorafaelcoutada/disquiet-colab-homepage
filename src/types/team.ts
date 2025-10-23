// --- NEW: Acronym List (Unchanged) ---
export const ACADEMIC_ACRONYMS = [
    'fpga', 'rtos', 'hdl', 'fpga', 'ai/ml', 'risc-v', 'devops', 'arm-cortex-a', 'arm-cortex-m', 'tsn',
    'i2c', 'spi', 'uart', 'mqtt', 'pcie', 'plc', 'bsp', 'ci/cd', 'pcb', 'containerization/virtualization'
];

/** The final list of skills (e.g., ['C', 'C++']) */
export type SkillList = string[];

/** * A recursive type allowing nested objects for categories. */
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
    gitlab?: string;
    portfolio?: string;
    twitter?: string;
};

// 1. MODIFIED TYPE HERE
export type TeamMemberExperience = {
    role: string;
    company: string;
    period: string;
    // --- CHANGED FROM 'string' TO 'string[]' ---
    description: string[];
    location?: string;
};

// This is the overall type for the frontmatter 'data' object (Unchanged)
export type TeamMemberFrontmatter = {
    slug: string;
    firstName: string;
    lastName: string;
    position: string;
    image: string;
    aboutMe?: string;
    dateOfBirth?: string;
    contact?: TeamMemberContact;
    links?: TeamMemberLinks;
    skills?: SkillCategory;
    experiences?: TeamMemberExperience[];
    achievements?: string[];
    hobbies?: string[];
    interests?: string[];
};