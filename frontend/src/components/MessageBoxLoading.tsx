import React from 'react';

export default function MessageBoxLoading() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-500/50 loading-dot"
          />
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-2 rounded-full w-full bg-gray-700/30 animate-pulse" />
        <div className="h-2 rounded-full w-9/12 bg-gray-700/30 animate-pulse" />
        <div className="h-2 rounded-full w-10/12 bg-gray-700/30 animate-pulse" />
      </div>
    </div>
  );
}