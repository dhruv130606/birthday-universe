import { motion } from 'framer-motion';

const Landing = ({ name = "You", onEnter }) => {
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // Button hover animation
  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
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
        className="absolute w-80 h-80 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl opacity-30 -top-20 -left-20"
      />

      {/* Floating Blob 2 - Orange/Yellow */}
      <motion.div
        variants={floatingVariants(10, 2)}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-25 -bottom-32 -right-32"
      />

      {/* Floating Blob 3 - Purple/Blue */}
      <motion.div
        variants={floatingVariants(9, 1)}
        animate="animate"
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-20 top-1/3 right-1/4"
      />

      {/* Floating Blob 4 - Cyan/Magenta (subtle) */}
      <motion.div
        variants={floatingVariants(11, 3)}
        animate="animate"
        className="absolute w-64 h-64 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full blur-3xl opacity-15 bottom-1/4 left-1/3"
      />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 mb-6 drop-shadow-2xl"
        >
          Happy Birthday,
          <br />
          {name} ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light mb-12 tracking-wide"
        >
          I made a little universe for you
        </motion.p>

        {/* Enter Button */}
        <motion.button
          variants={buttonHoverVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={onEnter}
          className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl"
          style={{
            boxShadow:
              "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(249, 115, 22, 0.2)",
          }}
        >
          Enter ✨
        </motion.button>
      </div>

      {/* Radial glow effect behind content */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-30" />
    </div>
  );
};

export default Landing;
