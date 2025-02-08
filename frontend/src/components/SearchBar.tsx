import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 pl-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-1.5 rounded-md hover:bg-blue-700 transition-colors">
          <Search className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="absolute top-full mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg hidden">
        <div className="p-2 hover:bg-gray-800 cursor-pointer">
          <span className="text-gray-400 text-sm">All Models</span>
        </div>
      </div>
    </div>
  );
}