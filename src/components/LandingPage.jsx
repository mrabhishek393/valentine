import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ onOpen }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-pink-50 flex items-center justify-center">
            {/* Background with faded photos (placeholders) */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20 pointer-events-none gap-2 p-2">
                {/* Using generic placeholders. User should replace these URLs. */}
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(https://placehold.co/400x400/pink/white?text=Our+Memory+${i + 1})` }}></div>
                ))}
            </div>

            {/* Interactive Box */}
            <motion.div
                className="z-10 bg-white/80 backdrop-blur-md border-4 border-pink-400 p-10 rounded-2xl shadow-2xl cursor-pointer text-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, -5, 5, 0] }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={onOpen}
            >
                <h1 className="text-4xl font-bold text-pink-600 mb-4">For My Love 💖</h1>
                <p className="text-lg text-gray-700">Click to Open</p>
            </motion.div>
        </div>
    );
};

export default LandingPage;
