'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const timelineEvents = [
  {
    date: 'Fevereiro, 2022',
    title: 'Início na Faculdade',
    description: 'Sua primeira calourada, você começou sua jornada na faculdade. Ver sua dedicação aos estudos me enche de orgulho!',
    image: '/images/calourada-facul.jpeg',
    type: 'image'
  },
  {
    date: 'Conquistas Diárias',
    title: 'Sua Força e Determinação',
    description: 'Sua capacidade de equilibrar estudos e vida pessoal com tanta felicidade é inspirador. Você é exemplo de foco e determinação.',
    image: '/images/feliz.png',
    type: 'image'
  },
  {
    date: 'Sempre Presente',
    title: 'Seu Coração Generoso',
    description: 'Sua forma de cuidar de mim, mesmo nas coisas mais simples, me deixa muito feliz. Você é mais do que sonhei!',
    image: '/images/cozinhando.png',
    type: 'image'
  },
  {
    date: 'Para todo o sempre',
    title: 'A modelo mais linda',
    description: 'Sua beleza exterior é absurda, mas sua beleza interior é ainda maior.',
    image: '/images/modelo.png',
    type: 'image'
  },
  {
    date: 'Futuramente',
    title: 'A médica mais inteligente e perfeita do mundo',
    description: 'Que orgulho de você, minha querida!',
    image: '/images/medica.png',
    type: 'image'
  },
  {
    date: 'Sempre será',
    title: 'A bodybuilder mais forte do mundo',
    description: 'E tome elevação de ombro 💪',
    media: '/videos/forte.mp4',
    thumbnail: '/images/forte.png',
    type: 'video'
  },
  {
    date: 'Cada Momento',
    title: 'Sua Luz Única',
    description: 'Quero sempre andar ao seu lado, te amo muito.',
    media: '/videos/teste.mp4',
    thumbnail: '/images/caminhando.png',
    type: 'video'
  },
  {
    date: 'A todo momento',
    title: 'Motorista invejável',
    description: 'Adoro minhas caronas com você, apesar dos estresses com o trânsito...',
    media: '/videos/motoristalinda.mp4',
    thumbnail: '/images/motorista.png',
    type: 'video'
  },
  {
    date: 'Para sempre',
    title: 'Fã do Vitor Sapo',
    description: 'Uebeti 🐸',
    image: '/images/vitorsapo.png',
    type: 'image'
  },
  
];

export default function Timeline() {
  const containerRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      {/* Background com gradiente e overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-rose-50 to-violet-50" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Conteúdo */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-800 text-center mb-4">
          Mulher Extraordinária
        </h2>
        <p className="text-center text-rose-600 mb-12 max-w-2xl mx-auto">
          Cada momento da sua jornada mostra sua força, determinação e o quanto você é especial.
          Estas são apenas algumas das muitas razões que fazem de você uma mulher incrível.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-rose-50 transition-all hover:scale-110 duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-12 pb-8 px-4 timeline-container hide-scrollbar snap-x snap-mandatory"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0 w-96 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-rose-100"
              >
                <div 
                  className="h-64 relative cursor-pointer overflow-hidden group flex items-center justify-center"
                  onClick={() => setSelectedMedia(event)}
                >
                  {event.type === 'image' ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="group-hover:scale-110 transition-transform duration-500 object-contain"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={event.thumbnail}
                          alt={event.title}
                          fill
                          className="group-hover:scale-110 transition-transform duration-500 object-contain"
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg 
                            className="w-10 h-10 text-rose-600 ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </motion.div>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="text-base text-rose-500 mb-3">{event.date}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-rose-800">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-rose-50 transition-all hover:scale-110 duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedMedia(null);
              setIsPlaying(false);
            }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-full max-w-4xl h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <Image
                  src={selectedMedia.image}
                  alt="Imagem ampliada"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              ) : (
                <video
                  className="w-full h-full rounded-lg"
                  controls
                  autoPlay
                  src={selectedMedia.media}
                />
              )}
              <button
                onClick={() => {
                  setSelectedMedia(null);
                  setIsPlaying(false);
                }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-rose-50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 