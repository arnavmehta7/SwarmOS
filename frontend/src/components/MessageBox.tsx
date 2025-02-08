import React from 'react';
import MessageBoxLoading from './MessageBoxLoading';

interface MessageBoxProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
  isLast: boolean;
  loading?: boolean;
}

export default function MessageBox({ message, isLast, loading }: MessageBoxProps) {
  return (
    <div 
      className={`
        message-appear flex 
        ${message.role === 'assistant' 
          ? 'bg-gray-900/30 backdrop-blur-sm border border-gray-800/50' 
          : ''
        } 
        p-4 rounded-lg
      `}
    >
      <div className="flex-1 max-w-4xl">
        <div className="font-medium mb-2 text-sm text-gray-400">
          {message.role === 'assistant' ? 'AI Assistant' : 'You'}
        </div>
        <div className="prose prose-invert">
          {message.content}
          {isLast && loading && (
            <div className="mt-4">
              <MessageBoxLoading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}