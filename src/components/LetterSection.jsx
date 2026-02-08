import React from 'react';
import { motion } from 'framer-motion';

const LetterSection = () => {
    return (
        <div className="min-h-screen w-full bg-[#fdfbf7] flex items-center justify-center p-8 font-serif relative overflow-hidden">
            {/* Decorative Background Elements */}
            {/* Add textures or vintage images here in CSS if desired */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="max-w-2xl w-full bg-[#fffcf5] border border-gray-200 p-10 md:p-16 shadow-2xl relative"
                style={{
                    boxShadow: '10px 10px 30px rgba(0,0,0,0.1)',
                    backgroundImage: 'linear-gradient(#e6e6e6 1px, transparent 1px)',
                    backgroundSize: '100% 2em'
                }}
            >
                <div className="absolute top-0 right-0 p-4 opacity-50">
                    {/* Stamp or Date */}
                    <span className="text-gray-500 italic">February 14, 2026</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif italic text-center text-red-800">My Dearest Love,</h2>

                <article className="prose prose-lg text-gray-700 leading-loose" style={{ lineHeight: '2em' }}>
                    <p>
                        These past two years have been the most magical chapter of my life. From the moment I sway you to this very moment,
                        every second with you has been a treasure. You are my best friend, and my everything.
                    </p>
                    <p>
                        You are the most beautiful, intellectual, adorable, cute and pretty ( and so much more) girl to ever exist on this earth.
                        Words, these words cant describe you. Theres no word that can decribe your personality, theres no sentence that can describe your beauty
                        and theres no paragraph that can describe you, still I am trying.
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
                    <p>
                        Here's to us, to our memories, and to all the beautiful moments yet to come.
                    </p>
                </article>

                <div className="mt-12 text-right">
                    <p className="text-xl italic">Forever Yours,</p>
                    <p className="text-2xl font-bold font-cursive text-red-800 mt-2">Abhishek</p>
                </div>
            </motion.div>
        </div>
    );
};

export default LetterSection;
