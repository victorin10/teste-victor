'use client';
import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import FinalMessage from './components/FinalMessage';
import BackgroundMusic from './components/BackgroundMusic';
import Quiz from './components/Quiz';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleQuizComplete = () => {
    setShowMainContent(true);
    // Inicia a música imediatamente após completar o quiz
    setIsMusicPlaying(true);
  };

  return (
    <main className="relative">
      {!showMainContent ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <>
          <Welcome />
          <Timeline />
          <Letter />
          <FinalMessage />
          <BackgroundMusic isPlaying={isMusicPlaying} />
        </>
      )}
    </main>
  );
} 