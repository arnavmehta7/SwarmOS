import React, { useEffect } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  useEffect(() => {
    document.title = 'SwarmOS';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] text-white">
      <Header />
      <main className="relative pt-20 pb-20 flex justify-center items-center">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
