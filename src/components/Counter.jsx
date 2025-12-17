import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 w-full max-w-xs mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-slate-200">Interactive Counter</h3>
      
      <div className="relative h-24 flex items-center justify-center overflow-hidden w-full mb-6">
        <AnimatePresence mode='popLayout'>
          <motion.p
            key={count}
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 absolute"
          >
            {count}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCount(count + 1)}
        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow w-full"
      >
        Increment
      </motion.button>
    </div>
  );
}

export default Counter;
