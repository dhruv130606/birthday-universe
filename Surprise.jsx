import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const placeholderImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
];

const Surprise = ({ isUnlocked = false, onBack }) => {
  const [giftOpened, setGiftOpened] = useState(false);

  // Floating lock animation
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Confetti animation (simple floating dots)
  const confettiColors = [
    'bg-pink-400', 'bg-purple-400', 'bg-orange-300', 'bg-yellow-300', 'bg-cyan-300', 'bg-white'
  ];
  const confetti = Array.from({ length: 30 }, (_, i) => ({
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
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
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
          className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-8 drop-shadow-2xl text-center"
        >
          Surprise 🎁
        </motion.h1>
        {/* Locked State */}
        <AnimatePresence>
          {!isUnlocked && (
            <motion.div
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center mt-12"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-2xl mb-8"
              >
                {/* Lock Icon */}
                <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a2 2 0 002-2v-2a2 2 0 10-4 0v2a2 2 0 002 2zm6-6V9a6 6 0 10-12 0v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                </svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl text-purple-200 font-light text-center"
              >
                Explore everything first to unlock this surprise
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Unlocked State */}
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-full flex flex-col items-center justify-center"
            >
              {/* Confetti */}
              <div className="pointer-events-none absolute inset-0 z-20">
                {confetti.map((c) => (
                  <motion.div
                    key={c.id}
                    className={`rounded-full ${c.color}`}
                    style={{
                      width: 16 + Math.random() * 12,
                      height: 16 + Math.random() * 12,
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
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-8 drop-shadow-2xl"
              >
                Happy Birthday ❤️
              </motion.h2>
              {/* Photo Collage */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {placeholderImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt="collage"
                    className="w-28 h-28 object-cover rounded-2xl shadow-lg border-2 border-white/20 bg-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  />
                ))}
              </div>
              {/* Personal Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl text-purple-200 font-light text-center mb-8 max-w-xl"
              >
                I hope this little universe made you smile. You are loved, celebrated, and so special to me.
              </motion.p>
              {/* Open Gift Button */}
              <motion.button
                whileHover={{ scale: 1.07, boxShadow: '0 0 32px 8px rgba(236,72,153,0.25)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setGiftOpened(true)}
                className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full shadow-xl transition-all duration-300 mb-8"
                style={{
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(249, 115, 22, 0.2)',
                }}
              >
                Open Gift
              </motion.button>
              {/* Hidden Message Card */}
              <AnimatePresence>
                {giftOpened && (
                  <motion.div
                    key="gift"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-500/80 to-purple-500/80 rounded-3xl p-8 shadow-2xl text-center mt-2"
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg block mb-2">
                      You make my world better just by being in it
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-10" />
    </div>
  );
};

export default Surprise;
