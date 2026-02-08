import React from 'react';
import { motion } from 'framer-motion';
import whiteCatHearts from '../assets/white-cute-cat-hearts.gif';
import kittenHearts from '../assets/kitten-hearts.gif';
import iLoveYou from '../assets/i-love-you.gif';
import duduKisses from '../assets/dudu-kisses.gif';

const LandingPage = ({ onOpen }) => {
    return (
        <motion.div
            className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400 flex items-center justify-center absolute inset-0 z-50"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
        >
            {/* Floating GIFs scattered around */}
            <motion.img
                src={whiteCatHearts}
                alt="Cute cat with hearts"
                className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 object-contain opacity-70"
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src={kittenHearts}
                alt="Kitten hearts"
                className="absolute top-20 left-10 w-20 h-20 md:w-28 md:h-28 object-contain opacity-70"
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            <motion.img
                src={iLoveYou}
                alt="I love you"
                className="absolute bottom-20 right-16 w-24 h-24 md:w-32 md:h-32 object-contain opacity-70"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.img
                src={duduKisses}
                alt="Dudu kisses"
                className="absolute bottom-24 left-12 w-20 h-20 md:w-28 md:h-28 object-contain opacity-70"
                animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Duplicate some GIFs for more coverage */}
            <motion.img
                src={whiteCatHearts}
                alt="Cute cat"
                className="absolute top-1/3 left-1/4 w-16 h-16 md:w-20 md:h-20 object-contain opacity-50"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.img
                src={kittenHearts}
                alt="Hearts"
                className="absolute bottom-1/3 right-1/4 w-16 h-16 md:w-20 md:h-20 object-contain opacity-50"
                animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />

            {/* 3D Gift Box Container */}
            <motion.div
                className="z-10 relative"
                style={{ perspective: "1000px" }}
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
            >
                <motion.div
                    className="relative cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        rotateY: [0, 5, -5, 0],
                        rotateX: [0, -2, 2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onClick={onOpen}
                >
                    {/* 3D Ribbon Bow on Top */}
                    <div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 z-30"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "translateZ(60px)"
                        }}
                    >
                        {/* Bow loops */}
                        <div className="relative w-24 h-16">
                            <div className="absolute left-0 w-12 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg transform -rotate-12"></div>
                            <div className="absolute right-0 w-12 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg transform rotate-12"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-xl z-10"></div>
                        </div>
                        {/* Ribbon tails */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-2">
                            <div className="w-4 h-12 bg-gradient-to-b from-pink-500 to-pink-600 shadow-md transform rotate-12 rounded-b-lg"></div>
                            <div className="w-4 h-12 bg-gradient-to-b from-purple-500 to-purple-600 shadow-md transform -rotate-12 rounded-b-lg"></div>
                        </div>
                    </div>

                    {/* Main 3D Box */}
                    <div
                        className="relative w-80 h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 rounded-lg shadow-2xl"
                        style={{
                            transformStyle: "preserve-3d",
                            boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.5), 0 0 0 1px rgba(147, 51, 234, 0.1)"
                        }}
                    >
                        {/* Front face */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg border-2 border-purple-300 flex items-center justify-center overflow-hidden">
                            {/* Vertical ribbon */}
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 shadow-inner"></div>

                            {/* Horizontal ribbon */}
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 shadow-inner"></div>

                            {/* Content */}
                            <div className="relative z-10 text-center px-8">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 font-serif drop-shadow-sm">
                                        For My Love
                                    </h1>
                                    <div className="text-5xl mb-2">💖</div>
                                    <p className="text-lg text-purple-700 font-semibold">Click to Open</p>
                                </motion.div>
                            </div>

                            {/* Sparkles */}
                            <motion.div
                                className="absolute top-6 right-6 text-3xl"
                                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                ✨
                            </motion.div>
                            <motion.div
                                className="absolute bottom-6 left-6 text-3xl"
                                animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            >
                                ✨
                            </motion.div>
                        </div>

                        {/* Right side (3D depth) */}
                        <div
                            className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-purple-300 to-purple-400 rounded-r-lg"
                            style={{
                                transform: "rotateY(90deg) translateZ(152px)",
                                transformOrigin: "right"
                            }}
                        ></div>

                        {/* Top side (3D depth) */}
                        <div
                            className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-lg"
                            style={{
                                transform: "rotateX(90deg) translateZ(-4px)",
                                transformOrigin: "top"
                            }}
                        ></div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage;
