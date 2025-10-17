import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function AboutUs() {
  const mission = fs.readFileSync(path.join(process.cwd(), 'src/app/about-us/our-mission.md'), 'utf8');
  const vision = fs.readFileSync(path.join(process.cwd(), 'src/app/about-us/our-vision.md'), 'utf8');
  const purpose = fs.readFileSync(path.join(process.cwd(), 'src/app/about-us/our-purpose.md'), 'utf8');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-12">About Us</h1>

      <div className="max-w-4xl w-full text-lg space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{mission}</ReactMarkdown>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{vision}</ReactMarkdown>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Purpose</h2>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{purpose}</ReactMarkdown>
          </div>
        </section>
      </div>
    </main>
  );
}
