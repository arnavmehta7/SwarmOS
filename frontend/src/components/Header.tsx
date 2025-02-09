import React from 'react';
import { Bell, User, ArrowLeft } from 'lucide-react';
import { WalletConnector } from './WalletConnector';
import { FundButton } from '@coinbase/onchainkit/fund';

interface HeaderProps {
  onBack?: () => void;
}

export default function Header({ onBack }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-gray-800/50 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onBack ? (
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Models</span>
            </button>
          ) : (
            <span className="font-semibold text-lg">SwarmOS</span>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <WalletConnector />
          <FundButton />
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
