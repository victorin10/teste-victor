'use client';
import { motion } from 'framer-motion';

export default function FinalMessage() {
  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      {/* Background com gradiente e overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-50" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Espaço para a foto */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/final.jpg"
                alt="Nossa foto especial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8">
            
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100 mb-12"
          >
            <blockquote className="text-2xl md:text-3xl italic text-rose-800 mb-4">
              "Uma mulher é a história completa da vida. Nela começa e termina o mundo, 
              nela começa e termina o amor."
            </blockquote>
            <p className="text-lg md:text-xl text-rose-600">
              — Cecília Meireles
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-rose-700 leading-relaxed mb-12"
          >
            Que este dia seja tão especial quanto você é para mim. Cada momento ao seu lado é um presente, e eu sou muito grato por ter você em minha vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Você é a razão do meu sorriso todos os dias, a força que me motiva a ser melhor e o amor que preenche meu coração. Neste dia especial, quero celebrar não apenas a mulher incrível que você é, mas também todo o amor que compartilhamos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 