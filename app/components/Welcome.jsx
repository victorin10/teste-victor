'use client';
import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background com gradiente e overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-50 to-violet-50" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      
      {/* Conteúdo */}
      <div className="relative z-10 px-4 flex flex-col items-center justify-center w-full">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-rose-800 mb-8 text-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Para a mulher mais incrível, minha vidoca ❤️
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-rose-600 mb-12 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hoje celebramos você: sua força, sua determinação, sua beleza interior e todas as qualidades que fazem de você uma mulher extraordinária.
        </motion.p>

        <motion.div
          className="w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full text-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm border border-rose-400/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Clique aqui
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
} 