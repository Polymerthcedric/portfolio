import Image from 'next/image';
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
          <div className="glass-card p-8 sm:p-10">
            <h3 className="text-lg font-semibold text-cH1 mb-1">
              The actual certificates
            </h3>
            <p className="text-sm text-cMuted mb-6">
              No claims — just the files. Click either one and check it for
              yourself.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="block overflow-hidden rounded-xl border border-cBorder/30 bg-cSurface/50 transition-all duration-200 hover:border-cAccent/40">
                <a
                  href="/certificates/alx-pathways.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/certificates/alx-pathways.png"
                      alt="ALX Pathways Certificate of Achievement"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
                <div className="p-4">
                  <p className="font-medium text-cBody text-sm">
                    ALX Pathways — Certificate of Achievement
                  </p>
                  <p className="text-xs text-cMuted mt-1">
                    ALX Africa · issued June 2026 ·{' '}
                    <a
                      href="https://ehub.alxafrica.com/ob3/verify-certificate/70dc6e6d-7457-4d29-8173-f0ebdbabc00a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cAccent hover:underline"
                    >
                      Verify
                    </a>
                  </p>
                </div>
              </div>
              <div className="block overflow-hidden rounded-xl border border-cBorder/30 bg-cSurface/50 transition-all duration-200 hover:border-cAccent/40">
                <a
                  href="/certificates/aws-cloud-practitioner-essentials.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/certificates/aws-cloud-practitioner-essentials.png"
                      alt="AWS Cloud Practitioner Essentials completion certificate"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
                <div className="p-4">
                  <p className="font-medium text-cBody text-sm">
                    AWS Cloud Practitioner Essentials
                  </p>
                  <p className="text-xs text-cMuted mt-1">
                    AWS Training &amp; Certification · foundational course ·
                    Sep 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
