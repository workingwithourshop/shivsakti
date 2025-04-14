'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    onResponse: (response) => {
      // Check if response might contain image data
      if (response.headers.get('content-type')?.includes('application/json')) {
        // Handle potential image response
        handlePotentialImageResponse(response);
        return;
      }
    }
  });
  
  const [images, setImages] = useState<{id: string, data: string, type: string}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle potential image responses
  async function handlePotentialImageResponse(response: Response) {
    try {
      const clone = response.clone();
      const text = await clone.text();
      
      try {
        const data = JSON.parse(text);
        if (data.type === 'image' && data.imageData) {
          setImages(prev => [...prev, {
            id: `img-${Date.now()}`,
            data: data.imageData,
            type: data.mimeType
          }]);
        }
      // eslint-disable-next-line no-empty
      } catch {
        // Not JSON or not an image response
      }
    } catch (error) {
      console.error('Error processing response:', error);
    }
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto h-[70vh] sm:h-[80vh]">
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 my-6 sm:my-8">
            <p>Hello! I can help you with:</p>
            <ul className="text-left max-w-xs mx-auto mt-2">
              <li>• General questions (just ask!)</li>
              <li>• Web searches (&quot;search for...&quot;)</li>
              <li>• Image generation (&quot;generate image of...&quot;)</li>
              <li>• Code assistance (&quot;help me code...&quot;)</li>
            </ul>
          </div>
        )}
        
        {messages.map((message, i) => (
          <div 
            key={i}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`rounded-lg px-3 sm:px-4 py-2 max-w-[85%] sm:max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
              
              {/* Display any images that might be associated with this message */}
              {message.role === 'assistant' && images.length > 0 && i === messages.length - 1 && (
                <div className="mt-2">
                  {images.map((img) => (
                    <div key={img.id} className="mt-2">
                      <Image
                        src={`data:${img.type};base64,${img.data}`}
                        alt="Generated image"
                        width={300}
                        height={300}
                        className="rounded-md w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-3 sm:p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-1 border rounded-md px-2 sm:px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-blue-500 text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base disabled:bg-blue-300"
          >
            {isLoading ? '...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
} 