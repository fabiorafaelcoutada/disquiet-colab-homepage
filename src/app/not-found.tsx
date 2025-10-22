import Link from 'next/link';

export default function NotFound() {
    return (
        // This div uses 'flex-grow' to fill the space in your <main> element
        // It also centers the content, which is common for 404 pages
        <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
            <p className="text-gray-500 mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
}