import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Dashboard({ models, onSelectModel }) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          DevAI Hub
        </h1>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Access specialized AI models fine-tuned for development tools and frameworks
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {models.map((model) => (
            <button
              key={model.name}
              onClick={() => onSelectModel(model)}
              className="card-gradient group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-gray-700/70 transition-all duration-300 text-left"
              style={{ '--gradient-start': model.gradient } as any}
            >
              <div className="relative flex items-start space-x-6">
                <div className="p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <model.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-white transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {model.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors self-center" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}