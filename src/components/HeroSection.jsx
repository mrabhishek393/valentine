import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/our-story.mp4';

const HeroSection = () => {
    // You should replace this with your actual video file placed in the public folder or src/assets
    // Example: import heroVideo from '../assets/heroVideo.mp4';
    // For now, using a placeholder color/text to simulate video

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background Placeholder */}
            {/* Background Blue Layer (Fills Screen) */}
            <div className="absolute inset-0 z-0 bg-black">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover blur-md opacity-50 scale-110">
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            {/* Foreground Video (Full Visibility) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <video autoPlay loop muted playsInline className="w-full h-full object-contain max-w-[800px] shadow-2xl">
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            <div className="z-10 text-center text-white p-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter text-white mb-2 mix-blend-overlay opacity-90">
                        OUR STORY
                    </h1>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent my-6 opacity-80"></div>
                    <p className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase font-sans text-white/90">
                        <span className="text-rose-200 drop-shadow-sm">Chihu</span> <span className="mx-2 opacity-50 text-white font-thin">&</span> <span className="text-indigo-200 drop-shadow-sm">Sheku</span>
                    </p>
                    <p className="text-xs md:text-sm font-serif italic tracking-widest text-amber-100/80 mt-2">
                        est. forever
                    </p>
                </motion.div>
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
