'use client';

import tagData from '@/content/tags.json';
import { motion } from 'framer-motion';

const CATEGORIES = [
  'Ships It Daily',
  'Wired Into Products',
  'Know My Way Around',
] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_LABELS: Record<Category, { label: string; note: string; color: string }> = {
  'Ships It Daily': {
    label: 'What I ship with — every single day',
    note: 'These I can work in cold, no docs.',
    color: 'cAccent',
  },
  'Wired Into Products': {
    label: 'Where I go deep',
    note: 'Used in projects you can open and click today.',
    color: 'cMauve',
  },
  'Know My Way Around': {
    label: 'Know my way around',
    note: 'Enough to build, your mileage on the sharp edges.',
    color: 'cMuted',
  },
};

const CATEGORY_TAG_COLORS: Record<Category, string> = {
  'Ships It Daily': 'border-cAccent/30 text-cAccent bg-cAccent/5',
  'Wired Into Products': 'border-cMauve/30 text-cMauve bg-cMauve/5',
  'Know My Way Around': 'border-cBorder/30 text-cMuted bg-cSurface/30',
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

        <p className="text-cMuted leading-relaxed mb-8 max-w-2xl">
          I don&apos;t do skill bars, and I don&apos;t do &quot;Advanced&quot; stickers on
          things I touched once. Here&apos;s what I can actually do in the
          real world, sorted into three honest buckets — and the distinction
          matters if you&apos;re going to interview me.
        </p>

        <div className="grid gap-6">
          {CATEGORIES.map((category) => {
            const tags = tagData.filter((t) => t.category === category);
            if (tags.length === 0) return null;
            const { label, note } = CATEGORY_LABELS[category];
            return (
              <div key={category} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-cH1 mb-1">{label}</h3>
                <p className="text-sm text-cMuted mb-4">{note}</p>
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

        <div className="mt-8 p-6 glass-card border-dashed border-cBorder/40">
          <p className="text-sm text-cMuted leading-relaxed">
            <span className="font-semibold text-cBody">Currently learning:</span>{' '}
            hardening real live traffic — I&apos;m shipping things people pay
            money for and watching what breaks. That&apos;s where the actual
            seniority comes from, not from the list above.
          </p>
        </div>
      </div>
    </section>
  );
}