import MarkdownContent from './MarkdownContent';
import { fetchMarkdownContent } from '@/utils/markdown';

export default async function AboutSection() {
  const aboutContent = await fetchMarkdownContent('src/content/Abstract.md');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-cAccent font-mono text-base font-normal mr-3">
            01.
          </span>
          About
        </h2>
        <div className="glass-card p-8 sm:p-10">
          <MarkdownContent content={aboutContent} />
        </div>
      </div>
    </section>
  );
}
