import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import celebration GIFs
import duduKisses from '../assets/dudu-kisses.gif';
import duduDance from '../assets/dudu-twisting-dance.gif';
import iLoveYou from '../assets/i-love-you.gif';
import kittenHearts from '../assets/kitten-hearts.gif';

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
                YAYYY!! 🎉 I'm glad your mine and only mine. Love you foreverrr.❤️
            </h1>

            {/* Dancing GIFs */}
            <div className="flex gap-4 md:gap-8 mb-8 flex-wrap justify-center items-center">
                <motion.img src={duduKisses} alt="Dudu Kisses" animate={{ rotate: [0, 10, -10, 0], y: [0, -20, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                <motion.img src={duduDance} alt="Dudu Dance" animate={{ rotate: [0, -10, 10, 0], y: [0, -20, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                <motion.img src={iLoveYou} alt="I Love You" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.7, repeat: Infinity }} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                <motion.img src={kittenHearts} alt="Kitten Hearts" animate={{ y: [0, -15, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            </div>

            {showDetails && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 text-center border-4 border-pink-300 relative z-10"
                >
                    <div className="absolute -top-6 -right-6 text-6xl rotate-12">💌</div>

                    <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-serif">Date Night Details </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4">
                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">When</p>
                                <p className="text-xl text-gray-800 font-semibold">February 14th, 2026</p>
                                <p className="text-lg text-gray-600">9:00 PM</p>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">Where</p>
                                <p className="text-xl text-gray-800 font-semibold">Oia</p>
                                <p className="text-sm text-gray-500">Bangalore</p>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-xl">
                                <p className="font-bold text-pink-800 uppercase text-xs tracking-wider">Dress Code</p>
                                <p className="text-xl text-gray-800 font-semibold">Elegant & Classy ✨</p>
                                <p className="text-sm text-gray-500">Wear that dress I love!</p>
                            </div>
                        </div>

                        <div className="w-full h-full min-h-[200px] bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6438843826!2d77.59436207507654!3d12.993945987334894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e1b0e5c4d%3A0x6c3e8e8e8e8e8e8e!2sOia%20Bangalore!5e0!3m2!1sen!2sin!4v1707408600000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map - Oia Bangalore"
                                className="absolute inset-0"
                            ></iframe>
                            <div className="absolute top-0 left-0 w-40 h-10 bg-gray-200/95 z-10 pointer-events-none"></div>
                            <a
                                href="https://maps.app.goo.gl/HS9BqgEY42QNA9kf7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg hover:bg-pink-600 transition z-20"
                            >
                                Open in Maps 📍
                            </a>
                        </div>
                    </div>

                    <p className="text-lg text-pink-600 mt-6 font-bold">💕 Don't worry, I'll pick you up! 💕</p>
                </motion.div>
            )}
        </div>
    );
};

export default CelebrationPage;
