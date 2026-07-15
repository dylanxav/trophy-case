import { useState, useEffect } from 'react';
import portraitPic from './assets/portrait.jpeg';

/* ------------------------------------------------------------------ *
 *  EDIT ME — single source of truth for everything personal.
 *  Replace the placeholder URLs/email below with your real links.
 *  To enable the resume button, drop a `resume.pdf` into /public.
 * ------------------------------------------------------------------ */
const CONFIG = {
  name: 'Dylan Cardona',
  role: 'Systems & Infrastructure',
  email: 'dylanxc15c@gmail.com',
  github: 'https://github.com/dylanxav',
  linkedin: 'https://www.linkedin.com/in/dylan-cardona-61aa03335',
  resume: 'resume.pdf',                                  // put resume.pdf in /public (leave '' to hide)
};

// Resolve public-asset paths so they work under any GitHub Pages base path.
const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const firstName = CONFIG.name.split(' ')[0];

const skillGroups = [
  { title: 'Cloud', items: ['AWS EC2', 'S3', 'VPC', 'IAM', 'CloudFront', 'Route 53'] },
  { title: 'Networking', items: ['TCP/IP', 'DNS', 'Subnetting', 'Routing & Switching', 'VPN'] },
  { title: 'Security', items: ['Threat Modeling', 'System Hardening', 'Access Control', 'Zero Trust'] },
  { title: 'Programming', items: ['Python', 'JavaScript', 'Bash', 'SQL'] },
  { title: 'Tooling', items: ['Git', 'Linux', 'Docker', 'CI/CD'] },
];

const Home = () => (
  <div className="flex flex-col md:flex-row items-center gap-10 py-12 animate-fade-in">
    <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 shrink-0">
      <img
        src={portraitPic}
        alt={`Portrait of ${CONFIG.name}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(CONFIG.name)}&background=f3f4f6&color=111827&size=256`;
        }}
      />
    </div>

    <div className="flex flex-col space-y-4 max-w-xl">
      <h2 className="text-4xl font-light tracking-tight text-gray-900 dark:text-gray-100">
        Hi, I'm {firstName}.
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
        I am a Computer Science student passionate about building, securing, and connecting modern digital environments.
        My foundation spans across cloud infrastructure, cybersecurity, and network architecture, allowing me to approach
        complex technical problems from multiple angles.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <span className="inline-block px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-md tracking-wide">
          Available for Opportunities
        </span>
        {CONFIG.resume && (
          <a
            href={asset(CONFIG.resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-md hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
          >
            <DownloadIcon /> Resume
          </a>
        )}
      </div>
    </div>
  </div>
);

const Bio = () => (
  <div className="py-8 animate-fade-in max-w-3xl">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-6">Professional Background</h2>
    <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg">
      <p>
        I bridge the gap between core computer science principles and real-world IT infrastructure. My academic background
        has equipped me with a strong foundation in algorithmic problem-solving, while my hands-on projects focus on
        understanding how networks operate, how cloud environments scale, and how systems are secured against modern threats.
      </p>
      <p>
        Currently, I am exploring the intersection of AWS architectures, enterprise networking, and foundational security practices.
        I treat every new concept not just as theory, but as an opportunity to build, break, and document a tangible system.
      </p>
    </div>
  </div>
);

const Skills = () => (
  <div className="py-8 animate-fade-in">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-8">Skills &amp; Toolkit</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-md font-light"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="py-8 animate-fade-in">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-8">Technical Projects</h2>

    <div className="bg-white dark:bg-gray-800/60 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Project 01: My "Trophy Case" (This website!)</h3>
        <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">Active</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 font-light mb-6">
        A minimalist, high-performance portfolio engineered using React, Vite, and Tailwind CSS.
        Compiled to static assets and deployed via a GitHub Actions CI/CD pipeline to GitHub Pages.
      </p>

      <div className="flex flex-wrap gap-2">
        {['React', 'Vite', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md font-light">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <div className="py-8 animate-fade-in">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-8">Certifications</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Earned</h3>
        </div>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">AWS Certified Cloud Practitioner</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">Amazon Web Services</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500 animate-pulse"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">In Progress</h3>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 border-dashed">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">CompTIA Network+ (N10-009)</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">Targeting Fall 2026</p>
        </div>
      </div>
    </div>
  </div>
);

/* --- Small inline icon components (no external deps) --- */
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
  </svg>
);

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, setDark];
}

export default function App() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [dark, setDark] = useDarkMode();

  const navItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'bio', label: 'Bio' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-gray-200 dark:selection:bg-gray-700 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">

        <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              {CONFIG.name} | <span className="text-gray-400 dark:text-gray-500 font-light">{CONFIG.role}</span>
            </h1>
            <button
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="shrink-0 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <nav className="flex flex-wrap gap-2 md:gap-6 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm md:text-base font-light transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'text-gray-900 dark:text-gray-100 border-b border-gray-900 dark:border-gray-100 pb-1'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="min-h-[400px]">
          {activeTab === 'welcome' && <Home />}
          {activeTab === 'bio' && <Bio />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'certifications' && <Certifications />}
        </main>

        <footer className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-400 dark:text-gray-500 font-light flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p>© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <GitHubIcon />
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${CONFIG.email}`} aria-label="Email" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <MailIcon />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
