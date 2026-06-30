'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cBg/80 backdrop-blur-xl border-b border-cBorder/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo('hero')}
              className="text-lg font-bold gradient-text tracking-tight"
            >
              Fidel<span className="text-cBody">.dev</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === item.id
                      ? 'text-cAccent bg-cAccent/10'
                      : 'text-cMuted hover:text-cBody hover:bg-cSurface/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:fidelcedricodoyo@gmail.com"
                className="ml-4 btn-primary text-sm !py-2 !px-4"
              >
                Hire Me
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-cMuted hover:text-cBody"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-cBg/95 backdrop-blur-xl border-b border-cBorder/50 animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-cMuted hover:text-cBody hover:bg-cSurface/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:fidelcedricodoyo@gmail.com"
                className="block text-center btn-primary mt-4"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {scrolled && (
        <button
          onClick={() => scrollTo('hero')}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-cAccent text-white shadow-lg shadow-cAccent/20 hover:bg-cAccentHover transition-all duration-200 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
