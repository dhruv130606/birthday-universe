import { motion } from 'framer-motion';

const YouSection = ({ onBack }) => {
  // Photo card data
  const photoCards = [
    {
      id: 1,
      title: "Version 1.0",
      caption: "Cute kid energy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Version 2.0",
      caption: "Professional handsome person",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Version 3.0",
      caption: "Still my favorite",
      image: "https://images.unsplash.com/photo-1516307365038-511fefaf402f?w=500&h=600&fit=crop",
    },
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Image zoom on hover
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
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

      {/* Floating Blob 1 - Blue/Purple */}
      <motion.div
        variants={floatingVariants(8, 0)}
        animate="animate"
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 -top-40 -left-40"
      />

      {/* Floating Blob 2 - Pink/Magenta */}
      <motion.div
        variants={floatingVariants(10, 2)}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-3xl opacity-15 -bottom-40 -right-40"
      />

      {/* Floating Blob 3 - Purple/Cyan */}
      <motion.div
        variants={floatingVariants(9, 1)}
        animate="animate"
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-3xl opacity-12 top-1/2 right-1/4"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
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
        <div className="text-center mb-16">
          {/* Title */}
          <motion.h1
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 mb-4 drop-shadow-2xl"
          >
            You 🌙
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light tracking-wide"
          >
            My favorite human
          </motion.p>
        </div>

        {/* Photo Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {photoCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 shadow-2xl transition-all duration-300"
                style={{
                  boxShadow: `0 0 40px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.2) 100%)`,
                  }}
                />

                {/* Image Container */}
                <div className="relative h-96 sm:h-[450px] overflow-hidden bg-gradient-to-b from-purple-900/20 to-black/40">
                  <motion.img
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {card.title}
                  </h3>

                  {/* Caption */}
                  <p className="text-base sm:text-lg text-purple-200 font-light">
                    {card.caption}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full mt-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-10" />
    </div>
  );
};

export default YouSection;
