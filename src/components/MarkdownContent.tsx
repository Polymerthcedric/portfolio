import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-cH1 mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-cH1 mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium text-cH1 mt-6 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-medium text-cBody mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-cBody/80 leading-relaxed mb-4">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-cAccent hover:text-cAccentHover transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="border-cBorder/50 my-8" />,
          ul: ({ children }) => (
            <ul className="space-y-2 mb-4">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-cBody/80 leading-relaxed flex items-start gap-2">
              <span className="text-cAccent mt-1.5 shrink-0">•</span>
              <span>{children}</span>
            </li>
          ),
          strong: ({ children }) => (
            <strong className="text-cBody font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-cMuted">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
