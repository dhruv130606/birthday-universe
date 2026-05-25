import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterText = `Dear [Name],\n\nThank you for all the laughs, memories, and moments we've shared. You make ordinary days feel special, and I’m really grateful that you’re part of my life.\n\nHappy Birthday ❤️`;

const typewriter = (text, length) => text.slice(0, length);

const FinalMessage = ({ onBack }) => {
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState(0);
  const [showEnding, setShowEnding] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (opened && typed < letterText.length) {
      const timeout = setTimeout(() => setTyped(typed + 1), 22);
      return () => clearTimeout(timeout);
    } else if (opened && typed === letterText.length) {
      setTimeout(() => setShowEnding(true), 800);
    }
  }, [opened, typed]);

  // Envelope animation variants
  const envelopeVariants = {
    closed: { scale: 1, rotateX: 0 },
    open: { scale: 1.05, rotateX: -60, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  // Floating hearts/stars
  const floaters = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    type: Math.random() > 0.5 ? 'heart' : 'star',
  }));

  // Confetti
  const confettiColors = [
    'bg-pink-400', 'bg-purple-400', 'bg-orange-300', 'bg-yellow-300', 'bg-cyan-300', 'bg-white'
  ];
  const confetti = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
  }));

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden py-16 px-4 flex flex-col items-center justify-center">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`,
        }}
      />
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-black" />
      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-80 h-80 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl opacity-20 -top-40 -left-40"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-15 -bottom-40 -right-40"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-3xl opacity-12 top-1/2 right-1/4"
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center">
        {/* Back Button */}
        {onBack && (
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
        )}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-4 drop-shadow-2xl text-center"
        >
          Final Message 💌
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light tracking-wide mb-10 text-center"
        >
          One last thing...
        </motion.p>
        {/* Letter Card */}
        <div className="flex flex-col items-center justify-center min-h-[340px]">
          <AnimatePresence>
            {!opened && (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Envelope Animation */}
                <motion.div
                  variants={envelopeVariants}
                  animate={opened ? 'open' : 'closed'}
                  className="w-44 h-32 sm:w-56 sm:h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-b-3xl rounded-t-lg shadow-2xl relative mb-8 overflow-hidden"
                  style={{ perspective: 800 }}
                >
                  {/* Envelope Flap */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-t-lg z-10"
                    style={{ transformOrigin: 'bottom center' }}
                    animate={opened ? { rotateX: -120 } : { rotateX: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />
                  {/* Envelope Body */}
                  <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-br from-pink-200 to-purple-200 rounded-b-3xl" />
                  {/* Heart Seal */}
                  <motion.div
                    className="absolute left-1/2 bottom-6 -translate-x-1/2 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/40"
                    animate={{ scale: [1, 1.15, 1], y: [0, -6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-white text-2xl">❤️</span>
                  </motion.div>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.07, boxShadow: '0 0 32px 8px rgba(236,72,153,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpened(true)}
                  className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full shadow-xl transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(249, 115, 22, 0.2)',
                  }}
                >
                  Open Letter
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Letter Reveal */}
          <AnimatePresence>
            {opened && (
              <motion.div
                key="letter"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg mx-auto bg-gradient-to-br from-white/30 to-white/10 rounded-3xl p-8 shadow-2xl text-center backdrop-blur-xl border border-white/10 min-h-[260px] flex flex-col items-center justify-center"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 whitespace-pre-line text-left block mx-auto max-w-md min-h-[160px]">
                  {typewriter(letterText, typed)}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Ending Section */}
        <AnimatePresence>
          {showEnding && (
            <motion.div
              key="ending"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
              className="mt-12 flex flex-col items-center justify-center relative"
            >
              {/* Floating Hearts/Stars */}
              <div className="pointer-events-none absolute inset-0 z-20">
                {floaters.map((f) => (
                  <motion.div
                    key={f.id}
                    className={`absolute text-2xl ${f.type === 'heart' ? 'text-pink-400' : 'text-yellow-300'}`}
                    style={{
                      left: `${f.x}%`,
                      top: '-40px',
                    }}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: '110vh', opacity: [1, 1, 0] }}
                    transition={{
                      duration: 3 + Math.random() * 1.5,
                      delay: f.delay,
                      repeat: Infinity,
                    }}
                  >
                    {f.type === 'heart' ? '❤️' : '✨'}
                  </motion.div>
                ))}
              </div>
              {/* Confetti */}
              <div className="pointer-events-none absolute inset-0 z-10">
                {confetti.map((c) => (
                  <motion.div
                    key={c.id}
                    className={`rounded-full ${c.color}`}
                    style={{
                      width: 14 + Math.random() * 10,
                      height: 14 + Math.random() * 10,
                      position: 'absolute',
                      left: `${c.x}%`,
                      top: '-40px',
                    }}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: '110vh', opacity: [1, 1, 0] }}
                    transition={{
                      duration: 2.5 + Math.random() * 1.5,
                      delay: c.delay,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl text-purple-200 font-bold text-center drop-shadow-lg mt-8"
              >
                Thank you for being in my universe ✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-10" />
    </div>
  );
};

export default FinalMessage;
