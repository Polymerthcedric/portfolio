'use client';

import tagData from '@/content/tags.json';
import { motion } from 'framer-motion';

const CATEGORIES = ['Cloud & DevOps', 'Languages', 'Mobile', 'Design', 'Tools'] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_LABELS: Record<Category, { label: string; color: string }> = {
  'Cloud & DevOps': { label: 'Cloud & DevOps', color: 'cAccent' },
  Languages: { label: 'Languages', color: 'cMauve' },
  Mobile: { label: 'Mobile', color: 'cPeach' },
  Design: { label: 'Design', color: 'cRed' },
  Tools: { label: 'Tools & Platforms', color: 'cMuted' },
};

const CATEGORY_TAG_COLORS: Record<Category, string> = {
  'Cloud & DevOps': 'border-cAccent/30 text-cAccent bg-cAccent/5',
  Languages: 'border-cMauve/30 text-cMauve bg-cMauve/5',
  Mobile: 'border-cPeach/30 text-cPeach bg-cPeach/5',
  Design: 'border-cRed/30 text-cRed bg-cRed/5',
  Tools: 'border-cBorder/30 text-cMuted bg-cSurface/30',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-cAccent font-mono text-base font-normal mr-3">
            02.
          </span>
          Skills
        </h2>

        <div className="grid gap-6">
          {CATEGORIES.map((category) => {
            const tags = tagData.filter((t) => t.category === category);
            if (tags.length === 0) return null;
            const { label } = CATEGORY_LABELS[category];
            return (
              <div key={category} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-cH1 mb-4">
                  {label}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                  className="flex flex-wrap gap-2"
                >
                  {tags.map((tag) => (
                    <motion.span
                      key={tag.text}
                      variants={item}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${CATEGORY_TAG_COLORS[category]} transition-colors duration-200`}
                    >
                      {tag.text}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
