import React, { useState } from 'react';

// 1. We import the image file and assign it to the variable 'portraitPic'
import portraitPic from './assets/portrait.jpeg';

const Home = () => (
  <div className="flex flex-col md:flex-row items-center gap-10 py-12 animate-fade-in">
    <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-200 shrink-0">
      <img 
        // 2. We use that variable here inside curly braces
        src={portraitPic} 
        alt="Dylan" 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://ui-avatars.com/api/?name=Dylan&background=f3f4f6&color=111827&size=256";
        }}
      />
    </div>
    
    <div className="flex flex-col space-y-4 max-w-xl">
      <h2 className="text-4xl font-light tracking-tight text-gray-900">
        Hi, I'm Dylan.
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed font-light">
        I am a Computer Science student passionate about building, securing, and connecting modern digital environments. 
        My foundation spans across cloud infrastructure, cybersecurity, and network architecture, allowing me to approach 
        complex technical problems from multiple angles.
      </p>
      <div className="pt-4">
        <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md tracking-wide">
          Available for Opportunities
        </span>
      </div>
    </div>
  </div>
);

const Bio = () => (
  <div className="py-8 animate-fade-in max-w-3xl">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">Professional Background</h2>
    <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
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

const Projects = () => (
  <div className="py-8 animate-fade-in">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">Technical Projects</h2>
    
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900">Project 01: My "Trophy Case" (This website!)</h3>
        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Active</span>
      </div>
      <p className="text-gray-600 font-light mb-6">
        A minimalist, high-performance portfolio engineered using React, Vite, and Tailwind CSS. 
        Designed to be compiled statically and deployed via enterprise-grade cloud infrastructure (AWS S3 & CloudFront).
      </p>
      
      <div className="flex flex-wrap gap-2">
        {['React', 'Vite', 'Tailwind CSS', 'AWS S3', 'CloudFront'].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-md font-light">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <div className="py-8 animate-fade-in">
    <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">Certifications</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <h3 className="text-lg font-medium text-gray-900">Earned</h3>
        </div>
        <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h4 className="font-medium text-gray-900">AWS Certified Cloud Practitioner</h4>
          <p className="text-sm text-gray-500 mt-1 font-light">Amazon Web Services</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
          <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
          <h4 className="font-medium text-gray-900">CompTIA Network+ (N10-009)</h4>
          <p className="text-sm text-gray-500 mt-1 font-light">Targeting Mid-July</p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('welcome');

  const navItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'bio', label: 'Bio' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Dylan | <span className="text-gray-400 font-light">Systems & Infrastructure</span>
          </h1>
          
          <nav className="flex flex-wrap gap-2 md:gap-6 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm md:text-base font-light transition-colors duration-200 ${
                  activeTab === item.id 
                    ? 'text-gray-900 border-b border-gray-900 pb-1' 
                    : 'text-gray-400 hover:text-gray-900'
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
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'certifications' && <Certifications />}
        </main>
        
        <footer className="mt-20 pt-8 border-t border-gray-100 text-sm text-gray-400 font-light flex justify-between">
          <p>© {new Date().getFullYear()} Dylan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </footer>

      </div>
    </div>
  );
}