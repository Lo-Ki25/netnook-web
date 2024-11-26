import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black z-10" />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Transform Your Digital Future
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-blue-100"
        >
          Innovative solutions for the connected world
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-blue-500 hover:border-blue-400 rounded-full text-lg font-semibold transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}