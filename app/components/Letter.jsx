'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const letterContent = `Querida,

Cada dia ao seu lado é uma nova descoberta de quanto amor pode existir em meu coração. Você me inspira a ser uma pessoa melhor, me faz sorrir nos momentos mais simples e me dá força quando mais preciso.

Neste Dia das Mulheres, quero celebrar não apenas a mulher incrível que você é, mas também tudo o que construímos juntos. Sua força, determinação e carinho são qualidades que admiro profundamente.

Com todo meu amor,
Victor`;

  useEffect(() => {
    if (isOpen) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= letterContent.length) {
          setDisplayText(letterContent.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      {/* Background com gradiente e overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-rose-50 to-rose-100" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Conteúdo */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-800 text-center mb-12">
          Uma Carta Para Você
        </h2>

        {!isOpen ? (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full text-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
            >
              Ler Carta
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-2xl w-full mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-rose-100"
            >
              <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-gray-800">
                {displayText}
              </pre>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
} 