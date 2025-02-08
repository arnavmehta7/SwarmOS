import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import { Braces, Cloud, Brain, Terminal, Video, Network } from 'lucide-react';

const models = [
  { 
    icon: Braces,
    name: 'Spheron Network Assistant',
    description: 'Decentralized P2P GPU Marketplace',
    gradient: 'rgba(147, 51, 234, 0.5)'
  },
  { 
    icon: Network,
    name: 'Akash Network Assistant',
    description: 'World\'s Premier Decentralized Compute Marketplace',
    gradient: 'rgba(16, 185, 129, 0.5)'
  },
  { 
    icon: Brain,
    name: 'HuggingGPT',
    description: 'Specialized in ML models and transformers',
    gradient: 'rgba(239, 68, 68, 0.5)'
  },
  { 
    icon: Terminal,
    name: 'DevGPT',
    description: 'Code generation and analysis expert',
    gradient: 'rgba(59, 130, 246, 0.5)'
  },
  { 
    icon: Video,
    name: 'FFmpeg Wizard',
    description: 'Media processing specialist',
    gradient: 'rgba(249, 115, 22, 0.5)'
  }
];

function App() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] text-white">
      <Header onBack={selectedModel ? () => setSelectedModel(null) : undefined} />
      <main className="relative pt-20 pb-20">
        {selectedModel ? (
          <ChatInterface selectedModel={selectedModel} />
        ) : (
          <Dashboard models={models} onSelectModel={setSelectedModel} />
        )}
      </main>
    </div>
  );
}

export default App;