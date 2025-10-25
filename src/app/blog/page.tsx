import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';
import styles from './page.module.css'; // 1. Import our new CSS Module

export default function BlogIndex() {
    const allPosts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 grow">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className="space-y-6">
                {allPosts.map((post) => (
                    <article key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="block group">
                            <h2 className="text-2xl font-semibold group-hover:text-blue-600">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                            <p className="text-gray-800">{post.description}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}