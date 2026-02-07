import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing at the top
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import QuizSection from './components/QuizSection';
import LetterSection from './components/LetterSection';
import QuestionPage from './components/QuestionPage';
import CelebrationPage from './components/CelebrationPage';

import musicFile from './assets/music.mp3'; // Ensure you have a file named 'music.mp3' in src/assets

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);

  // Music State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt auto-play (browsers often block this, so we handle the catch silently)
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume to 40%
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Auto-play was prevented. User interaction required.
        setIsPlaying(false);
      });
    }
  }, []);

  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [quizCompleted]);

  return (
    <div className="App font-sans text-gray-800 antialiased overflow-x-hidden">
      {/* Sections */}
      <HeroSection />

      <TimelineSection />

      <QuizSection onComplete={() => setQuizCompleted(true)} />

      {/* Revealed Sections */}


      {quizCompleted && (
        <motion.div
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* 
                    Logic:
                    If not accepted yet -> Show Question Page
                    If accepted -> Show Celebration Page
                */}
          {!proposalAccepted ? (
            <QuestionPage onYes={() => setProposalAccepted(true)} />
          ) : (
            <CelebrationPage />
          )}
        </motion.div>
      )}

      {/* Floating Music Player */}
      <div
        className={`fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-2xl border-2 border-pink-300 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform ${isPlaying ? 'animate-pulse' : ''}`}
        onClick={toggleMusic}
      >
        <span className="text-2xl">{isPlaying ? '🔊' : '🔇'}</span>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-pink-600">{isPlaying ? 'Now Playing' : 'Click to Play'}</span>
          <span className="text-xs text-gray-600">Our Favorite Song</span>
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default App;
