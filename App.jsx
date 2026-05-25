import { useState } from 'react';
import Landing from './Landing';
import Hub from './Hub';
import YouSection from './YouSection';
import UsSection from './UsSection';
import Moments from './Moments';
import Surprise from './Surprise';
import FinalMessage from './FinalMessage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [visited, setVisited] = useState({ you: false, us: false, moments: false });

  // Mark section as visited
  const handleSectionVisit = (section) => {
    setVisited((prev) => ({ ...prev, [section]: true }));
  };

  const isSurpriseUnlocked = visited.you && visited.us && visited.moments;

  return (
    <>
      {currentPage === 'landing' ? (
        <Landing onEnter={() => setCurrentPage('hub')} name="You" />
      ) : currentPage === 'hub' ? (
        <Hub onNavigate={(page) => setCurrentPage(page)} onBack={() => setCurrentPage('landing')} />
      ) : currentPage === 'you' ? (
        <YouSection onBack={() => { handleSectionVisit('you'); setCurrentPage('hub'); }} />
      ) : currentPage === 'us' ? (
        <UsSection onBack={() => { handleSectionVisit('us'); setCurrentPage('hub'); }} />
      ) : currentPage === 'moments' ? (
        <Moments onBack={() => { handleSectionVisit('moments'); setCurrentPage('hub'); }} />
      ) : currentPage === 'surprise' ? (
        <Surprise isUnlocked={isSurpriseUnlocked} onBack={() => setCurrentPage('hub')} />
      ) : currentPage === 'finalMessage' ? (
        <FinalMessage onBack={() => setCurrentPage('hub')} />
      ) : (
        <Hub onNavigate={(page) => setCurrentPage(page)} onBack={() => setCurrentPage('landing')} />
      )}
    </>
  );
}

export default App;
