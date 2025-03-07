'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const timelineEvents = [
  {
    id: 1,
    title: 'Primeiro Encontro',
    description: 'Onde tudo começou, na calourada da faculdade.',
    date: 'Março 2023',
    image: '/images/calourada-facul.jpeg',
  },
  {
    id: 2,
    title: 'Momentos Felizes',
    description: 'Cada sorriso seu ilumina meu dia.',
    date: 'Abril 2023',
    image: '/images/feliz.png',
  },
  {
    id: 3,
    title: 'Cozinhando Juntos',
    description: 'Descobrindo novos sabores e criando memórias.',
    date: 'Maio 2023',
    image: '/images/cozinhando.JPG',
  },
  {
    id: 4,
    title: 'Sua Beleza',
    description: 'Você é linda por dentro e por fora.',
    date: 'Junho 2023',
    image: '/images/modelo.png',
  },
  {
    id: 5,
    title: 'Conquistas',
    description: 'Orgulhoso das suas realizações.',
    date: 'Julho 2023',
    image: '/images/medica.png',
  },
  {
    id: 6,
    title: 'Sua Força',
    description: 'Admirando sua determinação.',
    date: 'Agosto 2023',
    media: '/videos/forte.mp4',
    thumbnail: '/images/forte.JPG',
    type: 'video'
  },
  {
    id: 7,
    title: 'Caminhando Juntos',
    description: 'Cada passo ao seu lado é especial.',
    date: 'Setembro 2023',
    media: '/videos/teste.mp4',
    thumbnail: '/images/caminhando.JPG',
    type: 'video'
  },
  {
    id: 8,
    title: 'Motorista Linda',
    description: 'Você dirigindo é a coisa mais linda que existe.',
    date: 'Outubro 2023',
    media: '/videos/motoristalinda.mp4',
    thumbnail: '/images/motorista.JPG',
    type: 'video'
  },
  {
    id: 9,
    title: 'Momentos Engraçados',
    description: 'Porque rir junto é a melhor parte.',
    date: 'Novembro 2023',
    image: '/images/vitorsapo.JPG',
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