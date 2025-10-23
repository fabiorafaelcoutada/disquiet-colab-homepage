import { getMarkdownContent } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { TeamMemberFrontmatter, SkillCategory, SkillList } from '@/types/team';

type Props = {
    params: { slug: string }
};

// --- NEW/REFACTORED HELPER COMPONENT: Handles Recursion ---
// This component checks if the input data is a final list or another nested object.
function RecursiveSkillsRenderer({ data }: { data: SkillCategory | SkillList }) {
    if (Array.isArray(data)) {
        // Case 1: It's the final list (SkillList: ['C', 'C++']) - RENDER VERTICAL LIST
        return (
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                {data.map((skill) => (
                    <li key={skill} className="text-sm">{skill}</li>
                ))}
            </ul>
        );
    }

    // Case 2: It's a nested object (SkillCategory) - Recurse
    // We are deliberately NOT adding a surrounding div here.
    return (
        <>
            {Object.entries(data).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0)) return null;

                // Check if the current object is the *top-level* skill category
                // If the value is a SkillList (string[]), then this key (e.g., 'lowLevel') is a sub-category.
                const isSubCategory = !Array.isArray(value);

                return (
                    // We apply spacing and border here for visual separation
                    <div
                        key={key}
                        className={`
                            p-4 
                            border dark:border-gray-700 rounded-lg 
                            break-inside-avoid-column 
                            ${isSubCategory ? 'space-y-2' : ''} 
                            ${isSubCategory ? 'col-span-1 md:col-span-1' : 'col-span-full'}
                        `}
                    >
                        {/* The heading for the category (e.g., 'Programming Languages') */}
                        <h3 className="text-xl font-semibold mb-2 capitalize text-gray-900 dark:text-white">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>

                        {/* Recurse: Call the same component with the nested data */}
                        {/* We use a slight left padding for nesting visibility */}
                        <div className="pl-0">
                            <RecursiveSkillsRenderer data={value} />
                        </div>
                    </div>
                );
            })}
        </>
    );
}

// Check if skills exist at all (helper logic)
function hasSkills(skills: SkillCategory | undefined): boolean {
    return skills ? Object.keys(skills).length > 0 : false;
}


export default async function TeamMemberPage({ params }: Props) {
    const { slug } = params;
    const { data, contentHtml } = await getMarkdownContent(`team/${slug}`) as { data: TeamMemberFrontmatter, contentHtml: string };

    const hasAnySkills = hasSkills(data.skills);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>

                {/* === MEMBER HEADER (Unchanged) === */}
                <div className={styles.memberHeader}>
                    <div className={styles.avatar}>
                        <Image src={data.image} alt={`${data.firstName} ${data.lastName}`} fill style={{ objectFit: 'cover' }}/>
                    </div>
                    <div>
                        <h1 className={styles.memberName}>{data.firstName} {data.lastName}</h1>
                        <p className={styles.memberPosition}>{data.position}</p>
                        <div className="mt-4 space-y-1 text-sm">
                            {data.contact?.email && <p><Link href={`mailto:${data.contact.email}`} className="text-blue-500 hover:underline">{data.contact.email}</Link></p>}
                            {data.contact?.phone && <p>{data.contact.phone}</p>}
                            <div className="flex space-x-4 mt-2">
                                {data.links?.linkedin && <Link href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</Link>}
                                {data.links?.github && <Link href={data.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</Link>}
                                {data.links?.portfolio && <Link href={data.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Portfolio</Link>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* === STRUCTURED RESUME CONTENT === */}
                <div className={`${styles.resumeContentContainer} space-y-10`}>

                    {/* --- About Me (Unchanged) --- */}
                    {contentHtml && contentHtml.trim() !== '' && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">About Me</h2>
                            <div
                                className="prose dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </section>
                    )}

                    {/* --- Skills Section (Modified Grid for Horizontal Categories) --- */}
                    {hasAnySkills && data.skills && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Skills</h2>

                            {/* NEW: Use flex-wrap instead of grid for simpler horizontal flow */}
                            <div className="flex flex-wrap gap-4">
                                {/* We pass data.skills to start the recursion */}
                                <RecursiveSkillsRenderer data={data.skills} />
                            </div>
                        </section>
                    )}

                    {/* --- Professional Experience Section (Unchanged) --- */}
                    {data.experiences && data.experiences.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Experience</h2>
                            <div className="space-y-8">
                                {data.experiences.map((exp, index) => (
                                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="text-xl font-semibold dark:text-white">{exp.role}</h3>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{exp.company} {exp.location && <span className="text-gray-500 dark:text-gray-400">({exp.location})</span>}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* --- Achievements Section (Unchanged) --- */}
                    {data.achievements && data.achievements.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Achievements</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {data.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
                            </ul>
                        </section>
                    )}

                    {/* --- Hobbies & Interests Sections (Unchanged) --- */}
                    {data.hobbies && data.hobbies.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Hobbies</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {data.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                            </ul>
                        </section>
                    )}
                    {data.interests && data.interests.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Interests</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {data.interests.map((interest, index) => <li key={index}>{interest}</li>)}
                            </ul>
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
}
