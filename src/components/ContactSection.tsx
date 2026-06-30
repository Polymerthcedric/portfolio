'use client';

import { Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Polymerthcedric',
    icon: GithubIcon,
    description: '@Polymerthcedric',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fidel-odoyo',
    icon: LinkedinIcon,
    description: 'linkedin.com/in/fidel-odoyo',
  },
  {
    label: 'Email',
    href: 'mailto:fidelcedricodoyo@gmail.com',
    icon: () => <Mail size={24} />,
    description: 'fidelcedricodoyo@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+254100363487',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={24} height={24}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    description: '+254 100363487',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-cAccent font-mono text-base font-normal mr-3">
            05.
          </span>
          Contact
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 text-center"
        >
          <p className="text-lg text-cMuted mb-8 max-w-lg mx-auto leading-relaxed">
            I&apos;m currently looking for DevOps, cloud, or software development
            roles. If you have an opening that fits, let&apos;s talk.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex flex-col items-center gap-3 p-5 rounded-xl bg-cSurface/30 border border-cBorder/30 hover:border-cAccent/30 transition-all duration-200 group"
                >
                  <span className="text-cAccent group-hover:scale-110 transition-transform">
                    <Icon />
                  </span>
                  <span className="font-medium text-cBody text-sm">
                    {link.label}
                  </span>
                  <span className="text-xs text-cMuted truncate max-w-full">
                    {link.description}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:fidelcedricodoyo@gmail.com"
              className="btn-primary"
            >
              <Mail size={16} />
              Send Email
            </a>
            <a
              href="mailto:fidelcedricodoyo@gmail.com?subject=Job Opportunity&body=Hi Fidel, I came across your portfolio and would like to discuss a role."
              className="btn-primary"
            >
              <Mail size={16} />
              Send Email
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-secondary"
            >
              <FileText size={16} />
              Back to Top
            </button>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-16">
        <p className="text-cMuted text-sm">
          Built with Next.js · Tailwind CSS · Framer Motion · Deployed on
          GitHub Pages
        </p>
        <p className="text-cMuted/60 text-xs mt-1">
          &copy; {new Date().getFullYear()} Fidel Cedric Odoyo
        </p>
      </div>
    </section>
  );
}
