import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=600&fit=crop',
    hint: 'A really fun day',
    message: 'One of my favorite memories with you',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=600&fit=crop',
    hint: 'A day I kept smiling',
    message: 'I still think about this one',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=600&fit=crop',
    hint: 'Somewhere new together',
    message: 'We made this place special',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=500&h=600&fit=crop',
    hint: 'A cozy moment',
    message: 'I felt so close to you',
  },
];

const Moments = ({ onBack }) => {
  const [revealed, setRevealed] = useState(Array(memories.length).fill(false));

  const handleReveal = (idx) => {
    if (!revealed[idx]) {
      setRevealed((prev) => {
        const next = [...prev];
        next[idx] = true;
        return next;
      });
    }
  };

  // Floating blob animation
  const floatingVariants = (duration = 6, delay = 0) => ({
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  // Fade-in animation for text
  const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // Card flip animation
  const cardVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden py-16 px-4">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-black" />

      {/* Floating Blobs */}
      <motion.div
        variants={floatingVariants(8, 0)}
        animate="animate"
        className="absolute w-80 h-80 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl opacity-20 -top-40 -left-40"
      />
      <motion.div
        variants={floatingVariants(10, 2)}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-15 -bottom-40 -right-40"
      />
      <motion.div
        variants={floatingVariants(9, 1)}
        animate="animate"
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-3xl opacity-12 top-1/2 right-1/4"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="mb-8 px-6 py-2 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          ← Back
        </motion.button>

        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.h1
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-4 drop-shadow-2xl"
          >
            Moments ✨
          </motion.h1>
          <motion.p
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light tracking-wide"
          >
            Can you guess these memories?
          </motion.p>
        </div>

        {/* Progress */}
        <div className="text-center mb-8 text-purple-300 text-lg font-medium">
          Memories discovered: {revealed.filter(Boolean).length} / {memories.length}
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, idx) => (
            <motion.div
              key={memory.id}
              className="perspective-1000"
            >
              <motion.div
                className="relative w-full h-80 cursor-pointer group"
                style={{ perspective: 1000 }}
                variants={cardVariants}
                animate={revealed[idx] ? 'flipped' : 'initial'}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => handleReveal(idx)}
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px 8px rgba(236,72,153,0.15)' }}
              >
                {/* Card Front (Blurred) */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center transition-all duration-300 ${revealed[idx] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{ backfaceVisibility: 'hidden', zIndex: 2 }}
                >
                  <img
                    src={memory.image}
                    alt="memory hint"
                    className="w-full h-full object-cover blur-md scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-0 w-full text-center px-4">
                    <span className="text-xl sm:text-2xl font-semibold text-white drop-shadow-lg">
                      {memory.hint}
                    </span>
                  </div>
                </motion.div>
                {/* Card Back (Revealed) */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center transition-all duration-300 ${revealed[idx] ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    zIndex: 3,
                  }}
                >
                  <img
                    src={memory.image}
                    alt="memory revealed"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-0 w-full text-center px-4">
                    <span className="text-xl sm:text-2xl font-bold text-pink-200 drop-shadow-lg block mb-2">
                      {memory.message}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-10" />
    </div>
  );
};

export default Moments;
