import React from 'react';

export default function ModelSelector({ models, selectedModel, onSelectModel }) {
  return (
    <div className="w-64 border-r border-gray-800 pr-4 hidden lg:block">
      <div className="space-y-2">
        {models.map((model) => (
          <button
            key={model.name}
            onClick={() => onSelectModel(model)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              selectedModel.name === model.name
                ? 'bg-blue-500/10 text-blue-500'
                : 'hover:bg-gray-900/50 text-gray-400 hover:text-white'
            }`}
          >
            <model.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{model.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}