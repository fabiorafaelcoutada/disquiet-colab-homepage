import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// --- Types for Team Member Data ---

/** Defines the structure of the data in the team member's frontmatter. */
export type TeamMemberData = {
    slug: string;
    firstName: string;
    lastName: string;
    position: string;
    image: string;
    dateOfBirth?: string; // Optional field
    contact?: {
        email: string;
        phone: string;
    };
    links?: {
        linkedin?: string;
        github?: string;
        gitlab?: string;
    };
};

// --- Constants ---

// Adjust this path to where your team member markdown files are located
const TEAM_DIR = path.join(process.cwd(), 'src/content/team');

// --- Core Utility Function ---

/**
 * Reads and parses a single team member file.
 * @param slug The filename (slug) of the team member.
 * @returns The structured TeamMemberData.
 */
export async function getTeamMemberBySlug(slug: string): Promise<TeamMemberData | null> {
    const fullPath = path.join(TEAM_DIR, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        console.error(`Team member file not found at: ${fullPath}`);
        return null;
    }

    // Read file content
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the frontmatter
    const { data } = matter(fileContents);

    return data as TeamMemberData;
}


// --- Function Required by the Blog Post Component ---

/**
 * Retrieves the author's full name from their slug for display on the blog post.
 * This is the function required by src/app/blog/[slug]/page.tsx.
 * @param slug The author's slug (e.g., 'fabio-cunha').
 * @returns The full name (e.g., 'Fábio Cunha') or null if not found.
 */
export async function getAuthorFullNameBySlug(slug: string): Promise<string | null> {
    const member = await getTeamMemberBySlug(slug);

    if (member) {
        // Use the actual first and last name from the data
        return `${member.firstName} ${member.lastName}`;
    }

    return null;
}

// --- Optional: Get all team members ---

/**
 * Gets a list of all team member slugs available.
 * @returns An array of slugs.
 */
export function getAllTeamMemberSlugs(): string[] {
    const files = fs.readdirSync(TEAM_DIR);

    // Filter for markdown files and remove the .md extension to get the slug
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace(/\.md$/, ''));
}