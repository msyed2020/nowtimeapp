'use client';

import { useState, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      )}
    </button>
  );
} 