import React, { useState } from 'react';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  const [activeTab, setActiveTab] = useState('bio');

  const renderContent = () => {
    switch (activeTab) {
      case 'bio': return <Bio />;
      case 'projects': return <Projects />;
      case 'certifications': return <Certifications />;
      default: return <Bio />;
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1>IT Portfolio & Trophy Case</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={() => setActiveTab('bio')} style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}>Bio</button>
          <button onClick={() => setActiveTab('projects')} style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}>Projects</button>
          <button onClick={() => setActiveTab('certifications')} style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}>Certifications</button>
        </nav>
      </header>
      
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;