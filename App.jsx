// GenesisMirror Lore Landing Page // Framework: React (for Framer export compatibility) // Style: Cinematic, dark, glitchy, fantasy-tech

import { useEffect, useState } from 'react'; import { motion } from 'framer-motion';

export default function GenesisMirrorLanding() { const [showInput, setShowInput] = useState(false);

useEffect(() => { const timer = setTimeout(() => setShowInput(true), 14000); // 14s delay for wallet input return () => clearTimeout(timer); }, []);

return ( <div className="min-h-screen bg-black text-white overflow-hidden relative font-mono"> {/* Background Video or Image Loop */} <video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover z-0 opacity-80"
> <source src="/mirror_loop.mp4" type="video/mp4" /> </video>

{/* Page 1: Opening Line */}
  <motion.div
    className="absolute top-1/3 w-full text-center z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3, delay: 1 }}
  >
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
      A journey... to say the least.
    </h1>
  </motion.div>

  {/* Wallet Input Appears after 14s */}
  {showInput && (
    <motion.div
      className="absolute bottom-1/3 w-full flex justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <input
        type="text"
        placeholder="ENTER YOUR WALLET..."
        className="w-2/3 md:w-1/2 lg:w-1/3 p-4 text-center text-xl border-2 border-cyan-400 bg-black bg-opacity-60 text-white rounded-xl shadow-xl placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </motion.div>
  )}

  {/* Footer / Loop Link */}
  <div className="absolute bottom-8 w-full text-center z-10 text-sm opacity-60">
    <p>GenesisMirror | A reflection of what you hide.</p>
    <button className="mt-2 underline hover:text-cyan-400">↺ Rewatch the Beginning</button>
  </div>
</div>

); }

