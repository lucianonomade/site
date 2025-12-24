
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection />
      <VideoSection />
      <Footer />
      
      {/* Floating Action Button for AI Assistant */}
      <div className="fixed bottom-10 left-8 z-50">
        <button 
          onClick={() => setIsAiOpen(!isAiOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {isAiOpen ? (
            <i className="fas fa-times text-xl"></i>
          ) : (
            <i className="fas fa-robot text-xl"></i>
          )}
        </button>
      </div>

      {isAiOpen && (
        <div className="fixed bottom-28 left-8 z-50 w-80 sm:w-96 h-[500px] shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-bottom-5">
          <GeminiAssistant onClose={() => setIsAiOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
