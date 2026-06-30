'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import projects from '@/content/projects.json';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function ProjectsSection() {
  const projectList = Object.values(projects);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-cAccent font-mono text-base font-normal mr-3">
            03.
          </span>
          Projects
        </h2>

        <div className="space-y-8">
          {projectList.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
            >
              <div className="glass-card-hover p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cH1">
                      {project.title}
                    </h3>
                    <p className="text-cMuted text-sm mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0 ml-4">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-cSurface/50 border border-cBorder/30 text-cMuted hover:text-cBody hover:border-cAccent/30 transition-all duration-200"
                        aria-label="Source code"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-cSurface/50 border border-cBorder/30 text-cMuted hover:text-cBody hover:border-cAccent/30 transition-all duration-200"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-cBody/80 text-sm leading-relaxed">
                  <div>
                    <span className="text-cAccent font-semibold text-xs uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-cAccent font-semibold text-xs uppercase tracking-wider">
                      Approach
                    </span>
                    <p className="mt-1">{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-cAccent font-semibold text-xs uppercase tracking-wider">
                      Result
                    </span>
                    <p className="mt-1">{project.result}</p>
                  </div>
                </div>

                {project.metrics && (
                  <div className="mt-5 pt-5 border-t border-cBorder/30">
                    <p className="text-xs text-cMuted uppercase tracking-wider mb-3 font-medium">
                      Key features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.split('·').map((m: string) => (
                        <span
                          key={m.trim()}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-cAccent/10 text-cAccent/90 border border-cAccent/20"
                        >
                          {m.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-cSurface/50 text-cMuted border border-cBorder/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
