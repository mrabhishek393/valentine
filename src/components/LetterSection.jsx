import React from 'react';
import { motion } from 'framer-motion';

const LetterSection = ({ showContinue = false, onContinue }) => {
    return (
        <div
            className="relative z-50 w-full max-w-2xl bg-[#f4e4bc] border-[12px] border-double border-yellow-900 shadow-2xl p-8 md:p-12 font-serif overflow-hidden origin-top"
            style={{
                backgroundImage: "radial-gradient(#d4c5a0 2px, transparent 2px)",
                backgroundSize: "20px 20px"
            }}
        >
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/20 to-transparent"></div>

            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-red-900 italic tracking-wider">My Dearest Love</h2>
                <div className="w-32 h-1 bg-red-900 mx-auto mt-4 rounded-full opacity-50"></div>
            </div>

            <article className="prose prose-lg text-yellow-950 leading-loose mx-auto">
                <p>
                    These past two years have been the most magical chapter of my life. From the moment I saw you to this very moment,
                    every second with you has been a treasure. You are my best friend, and my everything.
                </p>
                <p>
                    You are the most beautiful, intellectual, adorable, cute and pretty girl to ever exist on the earth.
                    Words, these words cant describe you. There's no word that can decribe your personality, there's no sentence that can describe your beauty
                    and there's no paragraph that can describe you, still I am trying.
                    I love your smile, your cute harkatein, your cheering personality and how you make everything
                    feel okay just by being there. You've taught me what true partnership means.
                </p>
                <p>
                    I want you to be always be happy and healthy, and that you achieve everything that you ever wanted.
                    Can you stop being so damn pretty all the time? I will always take care of you, I love doing things for you, treating you like my queen.
                    So please dont stop being so cute and the best human being.
                    I promise to always be your biggest fan, to listen to your stories, and to love you more with each passing day.
                    Life is beautiful, but it's breathtaking with you.
                </p>
                <p className="font-bold">
                    Here's to us, to our memories, and to all the beautiful moments yet to come.
                </p>
            </article>

            <div className="mt-12 text-right">
                <p className="text-xl italic text-red-900">Forever Yours,</p>
                <p className="text-3xl font-bold font-cursive text-red-800 mt-2">Abhishek</p>
            </div>

            {showContinue && (
                <div className="mt-12 flex flex-col items-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onContinue}
                        className="px-8 py-3 bg-red-800 text-[#f4e4bc] font-bold rounded-lg shadow-lg hover:bg-red-900 transition border-2 border-[#f4e4bc] outline outline-2 outline-red-900 z-50"
                    >
                        Continue... 🌹
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ delay: 1, duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-red-900/60 font-bold"
                    >
                        <span className="text-sm uppercase tracking-widest mb-1">Scroll for the Final Surprise</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default LetterSection;
