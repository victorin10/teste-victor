'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoCard({ videoUrl, thumbnailUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!isPlaying ? (
        <div 
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <motion.div
              className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-8 h-8 text-rose-600 ml-1" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <video
            className="w-full h-auto rounded-2xl"
            controls
            autoPlay
            src={videoUrl}
          />
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </motion.div>
  );
} 