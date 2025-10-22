import { getMarkdownContent } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { TeamMemberFrontmatter, TeamMemberSkills } from '@/types/team';

type Props = {
    params: { slug: string }
};

// Helper components (SkillsCategory, getSkillCategories) are unchanged
function SkillsCategory({ title, skills }: { title: string, skills?: string[] }) {
    if (!skills || skills.length === 0) return null;
    return (
        <div>
            <h3 className="text-xl font-semibold mb-2 capitalize">{title.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
}
function getSkillCategories(skills: TeamMemberSkills | undefined): [string, string[] | undefined][] {
    if (!skills) return [];
    return Object.entries(skills).filter(([, list]) => list && list.length > 0);
}


export default async function TeamMemberPage({ params }: Props) {
    const { slug } = params;
    const { data, contentHtml } = await getMarkdownContent(`team/${slug}`) as { data: TeamMemberFrontmatter, contentHtml: string };
    const skillCategories = getSkillCategories(data.skills);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>

                {/* === MEMBER HEADER (Unchanged) === */}
                <div className={styles.memberHeader}>
                    {/* ... Avatar, Name, Position, Contact, Links ... */}
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

                    {/* --- Moved "About Me" (contentHtml) Section HERE --- */}
                    {contentHtml && contentHtml.trim() !== '' && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">About Me</h2>
                            <div
                                className="prose dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </section>
                    )}
                    {/* --------------------------------------------------- */}


                    {/* --- Skills Section --- */}
                    {skillCategories.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                {skillCategories.map(([category, list]) => (
                                    <SkillsCategory key={category} title={category} skills={list} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* --- Professional Experience Section --- */}
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

                    {/* --- Achievements Section --- */}
                    {data.achievements && data.achievements.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Achievements</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {data.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
                            </ul>
                        </section>
                    )}

                    {/* --- Hobbies Section --- */}
                    {data.hobbies && data.hobbies.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-bold border-b pb-2 mb-6 dark:text-white">Hobbies</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {data.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                            </ul>
                        </section>
                    )}

                    {/* --- Interests Section --- */}
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