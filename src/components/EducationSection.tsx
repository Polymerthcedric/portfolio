import MarkdownContent from './MarkdownContent';
import { fetchMarkdownContent } from '@/utils/markdown';

export default async function EducationSection() {
  const [educationContent, certificatesContent] = await Promise.all([
    fetchMarkdownContent('src/content/Education.md'),
    fetchMarkdownContent('src/content/Certificates.md'),
  ]);

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-cAccent font-mono text-base font-normal mr-3">
            05.
          </span>
          Education &amp; Certifications
        </h2>
        <div className="space-y-6">
          <div className="glass-card p-8 sm:p-10">
            <MarkdownContent content={educationContent} />
          </div>
          <div className="glass-card p-8 sm:p-10">
            <MarkdownContent content={certificatesContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
