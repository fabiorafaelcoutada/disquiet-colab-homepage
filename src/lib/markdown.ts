import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

const contentDirectory = path.join(process.cwd(), 'src', 'content');
const blogContentDir = path.join(contentDirectory, 'blog');
const teamContentDir = path.join(contentDirectory, 'team'); // <-- 1. ADD THIS LINE

/**
 * Gets the content and metadata for a single .md file.
 * (This function is unchanged)
 */
export async function getMarkdownContent(filePath: string) {
    const fullPath = path.join(contentDirectory, `${filePath}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    // Process markdown with math plugins
    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(content);

    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        data, // This is your frontmatter (title, date, etc.)
    };
}

/**
 * Gets sorted frontmatter for all blog posts.
 * (This function is unchanged)
 */
export function getAllPosts() {
    // Get all filenames in the /blog directory
    const fileNames = fs.readdirSync(blogContentDir);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(blogContentDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...(matterResult.data as { title: string; date: string; description: string }),
        };
    });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * Gets frontmatter for all team members.
 */
export function getAllTeamMembers() {
    const fileNames = fs.readdirSync(teamContentDir);

    const allMembersData = fileNames.map((fileName) => {
        // Get slug from filename (e.g., 'fabio')
        const slug = fileName.replace(/\.md$/, '');

        // Read the file
        const fullPath = path.join(teamContentDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse frontmatter
        const { data } = matter(fileContents);

        // Return slug and frontmatter
        return {
            slug,
            ...(data as { firstName: string; lastName: string; position: string; image: string }),
        };
    });

    // Sort members by last name
    return allMembersData.sort((a, b) => a.lastName.localeCompare(b.lastName));
}