// app/team/[slug]/TeamMemberPDF.tsx

"use client"; // This component MUST be a client component

import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, Link as PdfLink } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { TeamMemberFrontmatter, ACADEMIC_ACRONYMS } from '@/types/team';
import { styles } from './pdfstyles'; // Import your styles

function formatKeyTitle(key: string): string {
    if (ACADEMIC_ACRONYMS.includes(key.toLowerCase())) {
        return key.toUpperCase();
    }
    const spacedKey = key.replace(/([A-Z])/g, ' $1');
    return spacedKey.charAt(0).toUpperCase() + spacedKey.slice(1).trim();
}


// This is the <Document> component
const MyPDFDocument = ({ data }: { data: TeamMemberFrontmatter }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.memberName}>{data.firstName} {data.lastName}</Text>
                <Text style={styles.memberPosition}>{data.position}</Text>
                {data.contact?.email && <PdfLink style={styles.link} src={`mailto:${data.contact.email}`}>{data.contact.email}</PdfLink>}

                {/* 4. ADDED tel: LINK FOR PHONE */}
                {data.contact?.phone && (
                    <PdfLink style={styles.link} src={`tel:${data.contact.phone.replace(/[\s\(\)-]/g, '')}`}>
                        {data.contact.phone}
                    </PdfLink>
                )}

                {data.links?.linkedin && <PdfLink style={styles.link} src={data.links.linkedin}>LinkedIn</PdfLink>}
                {data.links?.github && <PdfLink style={styles.link} src={data.links.github}>GitHub</PdfLink>}
                {data.links?.portfolio && <PdfLink style={styles.link} src={data.links.portfolio}>Portfolio</PdfLink>}
            </View>

            {/* --- About Me Section --- */}
            {data.aboutMe && data.aboutMe.trim() !== '' && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About Me</Text>
                    {data.aboutMe.trim().split('\n\n').map((paragraph, index) => (
                        <Text key={index} style={styles.paragraph}>
                            {paragraph}
                        </Text>
                    ))}
                </View>
            )}

            {/* --- Experience Section --- */}
            {data.experiences && data.experiences.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {data.experiences.map((exp, index) => {
                        const descriptionList = Array.isArray(exp.description)
                            ? exp.description
                            : typeof exp.description === 'string'
                                ? [exp.description]
                                : [];

                        return (
                            <View key={index} style={styles.experienceItem}>
                                <Text style={styles.experienceRole}>{exp.role}</Text>
                                <Text style={styles.experienceCompany}>{exp.company} {exp.location && `(${exp.location})`}</Text>
                                <Text style={styles.experiencePeriod}>{exp.period}</Text>
                                <View style={styles.descriptionList}>
                                    {descriptionList.map((item, i) => (
                                        <Text key={i} style={styles.descriptionItem}>- {item}</Text>
                                    ))}
                                </View>
                            </View>
                        );
                    })}
                </View>
            )}

            {/* --- Skills Section (Recursive PDF Renderer) --- */}
            {data.skills && Object.keys(data.skills).length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    {Object.entries(data.skills).map(([key, value]) => (
                        <PdfSkillRenderer key={key} title={key} data={value} />
                    ))}
                </View>
            )}

            {/* --- Achievements --- */}
            {data.achievements && data.achievements.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Achievements</Text>
                    {data.achievements.map((ach, index) => <Text key={index} style={styles.listItem}>- {ach}</Text>)}
                </View>
            )}

            {/* --- Hobbies --- */}
            {data.hobbies && data.hobbies.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hobbies</Text>
                    {data.hobbies.map((hobby, index) => <Text key={index} style={styles.listItem}>- {hobby}</Text>)}
                </View>
            )}

            {/* --- Interests --- */}
            {data.interests && data.interests.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Interests</Text>
                    {data.interests.map((interest, index) => <Text key={index} style={styles.listItem}>- {interest}</Text>)}
                </View>
            )}

        </Page>
    </Document>
);

// 3. UPDATE THE RENDERER TO USE THE HELPER FUNCTION
const PdfSkillRenderer = ({ title, data }: { title: string, data: any }) => {
    if (Array.isArray(data)) {
        return (
            <View style={styles.skillCategory}>
                {/* --- CHANGED --- */}
                <Text style={styles.skillCategoryTitle}>{formatKeyTitle(title)}</Text>
                <View style={styles.skillList}>
                    {data.map((skill) => (
                        <Text key={skill} style={styles.skillItem}>- {skill}</Text>
                    ))}
                </View>
            </View>
        );
    }

    // For nested skill objects
    return (
        <View style={styles.skillCategory}>
            {/* --- CHANGED --- */}
            <Text style={styles.skillCategoryTitle}>{formatKeyTitle(title)}</Text>
            <View style={{ marginLeft: 10 }}>
                {Object.entries(data).map(([key, value]) => (
                    <PdfSkillRenderer key={key} title={key} data={value} />
                ))}
            </View>
        </View>
    );
};


// --- Client Download Button ---
export default function TeamMemberPDFDownloader({ data, slug }: { data: TeamMemberFrontmatter, slug: string }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <PDFDownloadLink
            document={<MyPDFDocument data={data} />}
            fileName={`${slug}-profile.pdf`}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF Profile')}
        </PDFDownloadLink>
    );
}