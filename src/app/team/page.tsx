import Link from 'next/link';
import Image from 'next/image';
import { getAllTeamMembers } from '@/lib/markdown';

export default function TeamPage() {
    // 1. Get all member data
    const members = getAllTeamMembers();

    return (
        // We use 'flex-grow' to make sure the footer stays down
        <div className="flex-grow">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Meet the Team</h1>

                {/* 2. Create a responsive grid for the cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* 3. Loop over the members and create a card for each */}
                    {members.map((member) => (
                        <Link
                            key={member.slug}
                            href={`/team/${member.slug}`}
                            className="group block"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                                {/* Member Image */}
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={member.image}
                                        alt={`${member.firstName} ${member.lastName}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                {/* Member Info */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                        {member.firstName} {member.lastName}
                                    </h2>
                                    <p className="text-blue-500 dark:text-blue-400 mt-1">
                                        {member.position}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
}