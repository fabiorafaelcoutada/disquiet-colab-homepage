import { getMarkdownContent } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { TeamMemberFrontmatter, SkillCategory, SkillList, ACADEMIC_ACRONYMS } from '@/types/team';

type Props = {
    params: { slug: string }
};

// Helper components (formatKeyTitle, RecursiveSkillsRenderer, hasSkills) are unchanged
function formatKeyTitle(key: string): string {
    if (ACADEMIC_ACRONYMS.includes(key.toLowerCase())) {
        return key.toUpperCase();
    }
    const spacedKey = key.replace(/([A-Z])/g, ' $1');
    return spacedKey.charAt(0).toUpperCase() + spacedKey.slice(1).trim();
}

function RecursiveSkillsRenderer({ data }: { data: SkillCategory | SkillList }) {
    if (Array.isArray(data)) {
        return (
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                {data.map((skill) => (
                    <li key={skill} className="text-sm">{skill}</li>
                ))}
            </ul>
        );
    }
    return (
        <>
            {Object.entries(data).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0)) return null;

                const isSubCategory = !Array.isArray(value);

                return (
                    <div
                        key={key}
                        className={`
                            p-4
                            border dark:border-gray-700 rounded-lg
                            break-inside-avoid-column
                            space-y-2
                            w-full md:w-auto md:flex-grow
                        `}
                    >
                        <h3 className="text-xl font-semibold mb-2 capitalize text-gray-900 dark:text-white">
                            {formatKeyTitle(key)}
                        </h3>

                        <div className="pl-0">
                            <RecursiveSkillsRenderer data={value} />
                        </div>
                    </div>
                );
            })}
        </>
    );
}

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

                {/* --- Skills Section (Unchanged) --- */}
                {hasAnySkills && data.skills && (
                    <section>
                        <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Skills</h2>
                        <div className="flex flex-wrap gap-4">
                            <RecursiveSkillsRenderer data={data.skills} />
                        </div>
                    </section>
                )}

                {/* --- Professional Experience Section (FIXED LOGIC) --- */}
                {data.experiences && data.experiences.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Experience</h2>
                        <div className="space-y-8">
                            {data.experiences.map((exp, index) => {
                                // FIX: Ensure description is always an array before mapping
                                const descriptionList = Array.isArray(exp.description)
                                    ? exp.description
                                    // If it's a string (from old markdown format), put it in an array
                                    : typeof exp.description === 'string'
                                        ? [exp.description]
                                        : [];

                                return (
                                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="text-xl font-semibold dark:text-white">{exp.role}</h3>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{exp.company} {exp.location && <span className="text-gray-500 dark:text-gray-400">({exp.location})</span>}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>

                                        {/* Renders the list */}
                                        {descriptionList.length > 0 && (
                                            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                                                {descriptionList.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
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
    );
}
