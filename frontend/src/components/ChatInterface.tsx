import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';
import MessageBox from './MessageBox';
import MessageBoxLoading from './MessageBoxLoading';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const CodeBlock = ({
    className,
    children,
  }: {
    className?: string;
    children: string;
  }) => {
    const language = className ? className.replace('lang-', '') : 'text';
    if (language.includes('cairo')) {
      return (
        <SyntaxHighlighter language="rust" style={vscDarkPlus}>
          {children}
        </SyntaxHighlighter>
      );
    } else {
      const isInline = !className || className === 'language-text';
      const style = {
        backgroundColor:
          vscDarkPlus['code[class*="language-"]'].backgroundColor,
        color: vscDarkPlus['code[class*="language-"]'].color,
        padding: '0.2em 0.4em',
        borderRadius: '3px',
        fontSize: '85%',
        fontFamily: 'monospace',
        display: isInline ? 'inline' : 'block',
        whiteSpace: isInline ? 'normal' : 'pre-wrap',
      };

      return (
        <code className={className} style={style}>
          {children}
        </code>
      );
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      console.log('Backend URL:', backendUrl);

      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      const assistantMessage = {
        role: 'assistant' as const,
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching conversation:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant' as const,
          content:
            'Error processing your request. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (messages.length === 0) {
    return (
      <>
        <div className="starry-background" />
        <div className="flex-1 flex flex-col items-center justify-center px-4 h-[calc(100vh-8rem)] relative z-10">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome to SwarmOS Chat
              </h2>
              <p className="text-gray-400">
                Your AI-powered assistant
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg py-4 pl-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all group-hover:border-gray-600"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-gray-400"
                  disabled={!input.trim() || loading}
                >
                  <SendHorizontal className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="starry-background" />
      <div className="flex-1 max-w-4xl mx-auto w-full h-[calc(100vh-8rem)] flex flex-col px-4 relative z-10">
        <div className="flex-1 overflow-y-auto space-y-6 p-4">
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.role === 'assistant' ? (
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row items-center space-x-2">
                    <div
                      className={cn(
                        'text-white',
                        index === messages.length - 1 && loading
                          ? 'animate-spin'
                          : 'animate-none'
                      )}
                    >
                      <SendHorizontal className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-medium text-xl">
                      Answer
                    </h3>
                  </div>
                  <Markdown
                    options={{
                      overrides: {
                        code: {
                          component: CodeBlock,
                        },
                      },
                    }}
                    className={cn(
                      'prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0',
                      'max-w-none break-words text-white text-sm md:text-base font-medium'
                    )}
                  >
                    {message.content}
                  </Markdown>
                </div>
              ) : (
                <MessageBox
                  message={message}
                  isLast={index === messages.length - 1}
                  loading={loading && index === messages.length - 1}
                />
              )}
              {index < messages.length - 1 && message.role === 'assistant' && (
                <div className="h-px w-full bg-gray-800/50" />
              )}
            </React.Fragment>
          ))}
          {loading && messages.length === 0 && (
            <div className="p-4">
              <MessageBoxLoading />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-gray-800/50 backdrop-blur-sm"
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message..."
              className="w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg py-3 pl-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-gray-400"
              disabled={!input.trim() || loading}
            >
              <SendHorizontal className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
