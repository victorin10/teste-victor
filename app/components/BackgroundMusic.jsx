'use client';
import { useEffect, useState } from 'react';
import { Howl } from 'howler';

export default function BackgroundMusic({ isPlaying }) {
  const [sound, setSound] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Criar instância do Howl apenas uma vez
    const bgMusic = new Howl({
      src: ['/sounds/get-you.mp3'],
      loop: true,
      volume: 0.5,
      html5: true, // Melhor compatibilidade com dispositivos móveis
      preload: true, // Pré-carregar o áudio
      format: ['mp3']
    });

    setSound(bgMusic);

    // Cleanup
    return () => {
      if (bgMusic) {
        bgMusic.unload();
      }
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      // Remover os event listeners após a primeira interação
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    // Adicionar event listeners para detectar interação do usuário
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (sound && isPlaying && hasInteracted) {
      sound.play();
    } else if (sound) {
      sound.pause();
    }
  }, [sound, isPlaying, hasInteracted]);

  return null;
} 