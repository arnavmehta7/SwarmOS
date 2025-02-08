import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] text-white">
      <Header />
      <main className="relative pt-20 pb-20">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;