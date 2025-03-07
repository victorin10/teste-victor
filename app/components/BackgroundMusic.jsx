'use client';
import { useEffect } from 'react';
import { Howl } from 'howler';

export default function BackgroundMusic({ isPlaying }) {
  useEffect(() => {
    if (isPlaying) {
      const bgMusic = new Howl({
        src: ['/audio/background-music.mp3'],
        loop: true,
        volume: 0.5,
        html5: true,
      });

      bgMusic.play();

      return () => {
        bgMusic.unload();
      };
    }
  }, [isPlaying]);

  return null;
} 