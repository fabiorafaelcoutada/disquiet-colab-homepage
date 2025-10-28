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
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

const contentDirectory = path.join(process.cwd(), 'src', 'content');
const blogContentDir = path.join(contentDirectory, 'blog');
const teamContentDir = path.join(contentDirectory, 'team');
const newsContentDir = path.join(contentDirectory, 'news');

// Helper to convert frontmatter data safely
const castToFrontmatter = (data: matter.GrayMatterFile<string>['data']) => {
    return data as Record<string, any>;
};

/**
 * Processes raw markdown content into HTML with math and syntax highlighting support.
 */
async function processMarkdownToHtml(markdownContent: string): Promise<string> {
    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeHighlight)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(markdownContent);

    return processedContent.toString();
}

/**
 * Gets the content and metadata for a single .md file.
 */
export async function getMarkdownContent(filePath: string) {
    const fullPath = path.join(contentDirectory, `${filePath}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);

    const contentHtml = await processMarkdownToHtml(content);

    return {
        contentHtml,
        data: castToFrontmatter(data),
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

/**
 * NEW: Gets sorted frontmatter for all News entries.
 */
export function getAllNews() {
    const fileNames = fs.readdirSync(newsContentDir);

    const allNewsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(newsContentDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            slug,
            // Include all standard fields needed for a news card preview
            ...(matterResult.data as { title: string; date: string; description: string; source: string }),
        };
    });

    // Sort news by date (newest first)
    return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}