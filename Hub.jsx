import { motion } from 'framer-motion';

const Hub = ({ onNavigate, onBack }) => {
  // Card data
  const cards = [
    { id: 1, title: 'You', emoji: '🌙', color: 'from-blue-500 to-purple-500' },
    { id: 2, title: 'Us', emoji: '❤️', color: 'from-pink-500 to-rose-500' },
    { id: 3, title: 'Moments', emoji: '✨', color: 'from-yellow-400 to-orange-500' },
    { id: 4, title: 'Surprise', emoji: '🎁', color: 'from-green-400 to-cyan-500' },
    { id: 5, title: 'Final Message', emoji: '💌', color: 'from-purple-500 to-pink-500' },
  ];

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

  // Container stagger animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      scale: 0.95,
    },
  };

  const handleCardClick = (cardTitle) => {
    const pageMap = {
      'You': 'you',
      'Us': 'us',
      'Moments': 'moments',
      'Surprise': 'surprise',
      'Final Message': 'finalMessage',
    };
    if (onNavigate) {
      onNavigate(pageMap[cardTitle]);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center py-12 px-4">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-black" />

      {/* Floating Blob 1 - Pink/Magenta */}
      <motion.div
        variants={floatingVariants(8, 0)}
        animate="animate"
        className="absolute w-80 h-80 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl opacity-20 -top-20 -left-20"
      />

      {/* Floating Blob 2 - Orange/Yellow */}
      <motion.div
        variants={floatingVariants(10, 2)}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-15 -bottom-32 -right-32"
      />

      {/* Floating Blob 3 - Purple/Blue */}
      <motion.div
        variants={floatingVariants(9, 1)}
        animate="animate"
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-18 top-1/3 right-1/4"
      />

      {/* Floating Blob 4 - Cyan/Magenta */}
      <motion.div
        variants={floatingVariants(11, 3)}
        animate="animate"
        className="absolute w-64 h-64 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full blur-3xl opacity-12 bottom-1/4 left-1/3"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Title */}
          <motion.h1
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-4 drop-shadow-2xl"
          >
            Choose Your Journey ✨
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light tracking-wide"
          >
            Every little world has something for you
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleCardClick(card.title)}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div
                className={`relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br ${card.color} p-6 transition-all duration-300`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), linear-gradient(to bottom right, ${getGradientColors(card.color).start}, ${getGradientColors(card.color).end})`,
                  boxShadow: `0 0 30px rgba(${getGradientRGB(card.color)}, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${getGradientColors(card.color).start}, ${getGradientColors(card.color).end})`,
                  }}
                />

                {/* Card Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center">
                  {/* Emoji */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-7xl mb-4"
                  >
                    {card.emoji}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {card.title}
                  </h3>

                  {/* Subtle hover text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 text-sm text-white/70 font-light"
                  >
                    Click to explore
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-20" />
    </div>
  );
};

// Helper function to get gradient colors
const getGradientColors = (gradient) => {
  const colorMap = {
    'from-blue-500 to-purple-500': { start: 'rgb(59, 130, 246)', end: 'rgb(147, 51, 234)' },
    'from-pink-500 to-rose-500': { start: 'rgb(236, 72, 153)', end: 'rgb(244, 63, 94)' },
    'from-yellow-400 to-orange-500': { start: 'rgb(250, 204, 21)', end: 'rgb(249, 115, 22)' },
    'from-green-400 to-cyan-500': { start: 'rgb(74, 222, 128)', end: 'rgb(6, 182, 212)' },
    'from-purple-500 to-pink-500': { start: 'rgb(168, 85, 247)', end: 'rgb(236, 72, 153)' },
  };
  return colorMap[gradient] || { start: 'rgb(168, 85, 247)', end: 'rgb(236, 72, 153)' };
};

// Helper function to get gradient RGB for glow
const getGradientRGB = (gradient) => {
  const rgbMap = {
    'from-blue-500 to-purple-500': '147, 51, 234',
    'from-pink-500 to-rose-500': '236, 72, 153',
    'from-yellow-400 to-orange-500': '249, 115, 22',
    'from-green-400 to-cyan-500': '6, 182, 212',
    'from-purple-500 to-pink-500': '168, 85, 247',
  };
  return rgbMap[gradient] || '168, 85, 247';
};

export default Hub;
