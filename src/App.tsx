import React, { useState } from 'react';
import {
  Bot,
  Wallet,
  Command,
  Sparkles,
  Send,
  ChevronRight,
} from 'lucide-react';

function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-transparent text-gray-100 flex flex-col items-center justify-center p-8">
      <div className="glass p-12 rounded-2xl max-w-2xl w-full text-center">
        <Command className="w-20 h-20 text-purple-500 mx-auto mb-8" />
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          AI Tools Hub
        </h1>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Your all-in-one platform for AI-powered Web3 interactions. Seamlessly integrate with blockchain tools, swap tokens, manage DeFi positions, and more.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 mx-auto glow transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-6 h-6" />
          Get Started
        </button>
      </div>
    </div>
  );
}

type Message = {
  type: "user" | "bot";
  content: string;
};

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: "Hello! I'm your AI assistant. How can I help you with Web3 today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: "user", content: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: "bot", 
        content: "I understand you want to interact with Web3. I can help you with that. What specific operation would you like to perform?" 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-100 flex flex-col">
      {/* Header */}
      <div className="glass border-b border-gray-700/50">
        <div className="max-w-[1920px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Command className="w-8 h-8 text-purple-500" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              AI Tools Hub
            </h1>
          </div>
          <button className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors duration-300">
            <Wallet className="w-5 h-5 text-purple-400" />
            <span className="text-gray-200">Connect Wallet</span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-6 p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-3xl rounded-2xl px-6 py-4 ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 glow"
                    : "message-glass"
                }`}
              >
                {message.type === "bot" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">AI Assistant</span>
                  </div>
                )}
                <p className="text-gray-100 leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="glass p-6 border-t border-gray-700/50">
          <div className="max-w-[1920px] mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about Web3..."
              className="w-full bg-gray-900/50 rounded-xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-400 text-gray-100"
            />
            <button 
              onClick={handleSend}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <LandingPage onGetStarted={() => setStarted(true)} />;
  }

  return <ChatInterface />;
}

export default App;