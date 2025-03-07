'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Howl } from 'howler';

const questions = [
  {
    id: 1,
    question: "Quem é o amor da sua vida?",
    options: ["Victor", "Victor", "Victor", "Victor"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "O que o seu amor mais odeia no mundo?",
    options: ["Chocolate", "Queijo", "Pizza", "Sorvete"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é a data de nascimento do seu amor?",
    options: ["07/05/2010", "05/07/2002", "02/05/2007", "07/05/2002"],
    correctAnswer: 3
  }
];

export default function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [sound, setSound] = useState(null);

  const handleAnswer = (selectedIndex) => {
    if (questions[currentQuestion].correctAnswer === selectedIndex) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowMessage(true);
      }
    }
  };

  const handleContinue = () => {
    const bgMusic = new Howl({
      src: ['/sounds/get-you.mp3'],
      loop: true,
      volume: 0.5
    });
    setSound(bgMusic);
    bgMusic.play();
    setShowMessage(false);
    onComplete();
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unload();
      }
    };
  }, [sound]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente e overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-50 to-violet-50" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative z-10 w-full max-w-2xl px-4">
        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rose-800 text-center mb-8">
                Você é mesmo a Liriel?
              </h2>

              <motion.h3 
                className="text-2xl font-semibold text-rose-700 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {questions[currentQuestion].question}
              </motion.h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 bg-white/80 hover:bg-rose-50 rounded-xl text-lg font-medium text-rose-800 shadow-md hover:shadow-lg transition-all duration-300 border border-rose-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-6">
                Você realmente é a Liriel Mayra! ❤️
              </h2>
              <p className="text-xl text-rose-600 mb-8">
                Agora você pode descobrir uma surpresa especial...
              </p>
              <motion.button
                onClick={handleContinue}
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full text-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continuar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 