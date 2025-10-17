// This page component will receive 'params' which contains the slug (e.g., "fabio")
export default function TeamMemberPage({ params }: { params: { slug: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold">
                    Profile Page
                </h1>
                <p className="mt-4 text-2xl text-gray-400">
                    This is the page for: <span className="font-bold text-cyan-400">{params.slug}</span>
                </p>
            </div>
        </main>
    );
}