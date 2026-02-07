import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CelebrationPage = () => {
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Updated delay to 3 seconds as requested
        const timer = setTimeout(() => {
            setShowDetails(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 to-red-200 flex flex-col items-center justify-center overflow-hidden relative py-12">
            <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-8 text-center animate-bounce drop-shadow-md px-4">
                YAY!! 🎉 She said YES! ❤️
            </h1>

            {/* Dancing Stickers */}
            <div className="flex gap-4 md:gap-8 mb-8 flex-wrap justify-center">
                <motion.div animate={{ rotate: [0, 20, -20, 0], y: [0, -30, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-6xl md:text-8xl">💃</motion.div>
                <motion.div animate={{ rotate: [0, -20, 20, 0], y: [0, -30, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }} className="text-6xl md:text-8xl">🕺</motion.div>
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-6xl md:text-8xl">🥂</motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 0.7, repeat: Infinity }} className="text-6xl md:text-8xl">💒</motion.div>
            </div>

            {showDetails && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 text-center border-4 border-pink-300 relative z-10"
                >
                    <div className="absolute -top-6 -right-6 text-6xl rotate-12">💌</div>

                    <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-serif">Date Night Details 📅</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4">
                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">When</p>
                                <p className="text-xl text-gray-800 font-semibold">February 14th, 2026</p>
                                <p className="text-lg text-gray-600">7:00 PM</p>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">Where</p>
                                <p className="text-xl text-gray-800 font-semibold">La Pizzeria, Downtown</p>
                                <p className="text-sm text-gray-500">123 Romance Lane, Love City</p>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">Dress Code</p>
                                <p className="text-xl text-gray-800 font-semibold">Elegant & Classy ✨</p>
                                <p className="text-sm text-gray-500">Wear that dress I love!</p>
                            </div>
                        </div>

                        <div className="w-full h-full min-h-[200px] bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353153167!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f81!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614131846549!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-6 italic">"I can't wait to celebrate with you."</p>
                </motion.div>
            )}
        </div>
    );
};

export default CelebrationPage;
