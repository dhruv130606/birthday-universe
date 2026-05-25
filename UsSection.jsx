import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const UsSection = ({ onBack }) => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  // Memory data
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470147123dd-8bed76532bf3?w=500&h=600&fit=crop",
      title: "Memory 1",
      date: "Add later",
      note: "Still one of my favorite days",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop",
      title: "Memory 2",
      date: "Add later",
      note: "A moment I want to keep forever",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1543269865-cbdf26effbd7?w=500&h=600&fit=crop",
      title: "Memory 3",
      date: "Add later",
      note: "Laughs and love, all in one frame",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1474511640723-9a56873867b5?w=500&h=600&fit=crop",
      title: "Memory 4",
      date: "Add later",
      note: "You make every moment special",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=600&fit=crop",
      title: "Memory 5",
      date: "Add later",
      note: "Forever grateful for us",
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
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  // Polaroid card animation variants
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: 0 },
    animate: (rotation) => ({
      opacity: 1,
      scale: 1,
      rotate: rotation,
      transition: { duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.08,
      rotate: 0,
      zIndex: 50,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Generate random rotation for scrapbook feel
  const getRandomRotation = (id) => {
    const rotations = [-5, -3, -1, 1, 3, 5];
    return rotations[id % rotations.length];
  };

  // Modal backdrop animation
  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Modal content animation
  const modalVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
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

      {/* Floating Blob 1 - Pink/Red */}
      <motion.div
        variants={floatingVariants(8, 0)}
        animate="animate"
        className="absolute w-80 h-80 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full blur-3xl opacity-20 -top-40 -left-40"
      />

      {/* Floating Blob 2 - Orange/Yellow */}
      <motion.div
        variants={floatingVariants(10, 2)}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-15 -bottom-40 -right-40"
      />

      {/* Floating Blob 3 - Purple/Pink */}
      <motion.div
        variants={floatingVariants(9, 1)}
        animate="animate"
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl opacity-12 top-1/2 right-1/4"
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-red-400 mb-4 drop-shadow-2xl"
          >
            Us ❤️
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInDown}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light tracking-wide"
          >
            Some of my favorite moments
          </motion.p>
        </div>

        {/* Memory Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 auto-rows-max"
        >
          {memories.map((memory) => {
            const rotation = getRandomRotation(memory.id);
            return (
              <motion.div
                key={memory.id}
                custom={rotation}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedMemory(memory)}
                className="cursor-pointer md:h-fit"
              >
                {/* Polaroid Card */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden"
                  style={{
                    boxShadow: `0 10px 40px rgba(236, 72, 153, 0.2)`,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Polaroid Bottom Section */}
                  <div className="bg-white p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {memory.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-light">
                      {memory.date}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                      {memory.note}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-4 text-xs text-pink-500 font-semibold"
                    >
                      Click to see more ✨
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setSelectedMemory(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header with Close Button */}
              <div className="relative">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-md"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 mb-3">
                  {selectedMemory.title}
                </h2>
                <p className="text-gray-500 text-lg mb-6 font-light">
                  {selectedMemory.date}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedMemory.note}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-full mt-8"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radial glow effect */}
      <div className="absolute inset-0 radial-gradient pointer-events-none opacity-10" />
    </div>
  );
};

export default UsSection;
