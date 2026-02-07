import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // You should replace this with your actual video file placed in the public folder or src/assets
    // Example: import heroVideo from '../assets/heroVideo.mp4';
    // For now, using a placeholder color/text to simulate video

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0 bg-gray-900 opacity-60">
                {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                     <source src="/path/to/your/video.mp4" type="video/mp4" />
                 </video> */}
                <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold">
                    [ Video of Us Playing Here ]
                </div>
            </div>

            <div className="z-10 text-center text-white p-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                    className="text-xl md:text-2xl font-light"
                >
                    A journey of love, laughter, and us.
                </motion.p>
            </div>

            {/* Scroll Indication */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 4, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
            >
                <p className="text-sm uppercase tracking-widest mb-2">Scroll to Begin</p>
                <div className="text-2xl">↓</div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
