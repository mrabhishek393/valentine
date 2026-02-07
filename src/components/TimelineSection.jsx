import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
    { date: "July 2024", title: "Where it all began", note: "The day my life changed forever. Remember that coffee shop?", img: "https://placehold.co/600x400/pink/white?text=July+2024" },
    { date: "Aug 2024", title: "Getting to know you", note: "Late night calls and endless texts.", img: "https://placehold.co/600x400/pink/white?text=Aug+2024" },
    { date: "Sept 2024", title: "Falling for you", note: "I realized I couldn't go a day without talking to you.", img: "https://placehold.co/600x400/pink/white?text=Sept+2024" },
    { date: "Oct 2024", title: "First Trip Together", note: "The mountains were beautiful, but not as beautiful as you.", img: "https://placehold.co/600x400/pink/white?text=Oct+2024" },
    { date: "Nov 2024", title: "Cozy Vibes", note: "Sweater weather and holding hands.", img: "https://placehold.co/600x400/pink/white?text=Nov+2024" },
    { date: "Dec 2024", title: "Our First Christmas", note: "Best gift I ever received was you.", img: "https://placehold.co/600x400/pink/white?text=Dec+2024" },
    { date: "Jan 2025", title: "New Year, Same Us", note: "Starting the year with my favorite person.", img: "https://placehold.co/600x400/pink/white?text=Jan+2025" },
    { date: "Feb 2025", title: "Valentine's Day", note: "Be ready for a surprise!", img: "https://placehold.co/600x400/pink/white?text=Feb+2025" },
];

const TimelineCard = ({ item, index, isExpanded }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Random rotation for the stack effect
    const randomRotate = React.useMemo(() => Math.random() * 10 - 5, []);

    return (
        <motion.div
            layout
            className={`cursor-pointer perspective-1000 ${isExpanded ? 'relative w-64 h-80' : 'absolute w-64 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
            style={{
                zIndex: isExpanded ? 1 : timelineData.length - index,
            }}
            initial={{ rotate: randomRotate }}
            animate={{
                rotate: isExpanded ? 0 : randomRotate,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                layout: { duration: 0.6, type: "spring", bounce: 0.2 } // Smooth positional transition
            }}
            onClick={() => {
                if (isExpanded) setIsFlipped(!isFlipped);
            }}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500 shadow-2xl rounded-xl border-4 border-white bg-white"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden flex flex-col overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-4 flex-1 flex flex-col justify-center items-center bg-pink-50">
                        <h3 className="font-bold text-pink-600">{item.date}</h3>
                        <p className="text-xs text-gray-500 text-center">{item.title}</p>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-400 to-purple-500 p-6 flex items-center justify-center text-white text-center transform rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <p className="italic text-sm">"{item.note}"</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const TimelineSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-pink-100 py-20 px-4 flex flex-col items-center relative overflow-hidden">

            <AnimatePresence>
                {!isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-32 z-50 text-center pointer-events-none"
                    >
                        <h2 className="text-4xl font-bold text-pink-600 drop-shadow-white mb-2">Our Memory Deck</h2>
                        <p className="text-gray-600 animate-bounce">Click the stack to reveal!</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                layoutRoot
                className={`flex flex-wrap justify-center items-center transition-all duration-700 ${isExpanded ? 'gap-8 w-full max-w-6xl mt-24' : 'h-[600px] relative w-full'}`}
                onClick={() => !isExpanded && setIsExpanded(true)}
            >
                {timelineData.map((item, index) => (
                    <TimelineCard key={index} item={item} index={index} isExpanded={isExpanded} />
                ))}
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center mt-12 z-50 relative pointer-events-auto"
                    >
                        <p className="text-pink-400 text-sm mb-4 animate-pulse">Click any card to read the note behind it! 💌</p>

                        <button
                            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                            className="px-6 py-2 bg-white text-pink-600 font-bold rounded-full shadow-md hover:bg-pink-50 transition text-sm mb-8"
                        >
                            Stack 'em back up 🔄
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 text-pink-500 font-bold flex flex-col items-center pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-xs uppercase tracking-widest mb-1 shadow-white drop-shadow-md">Scroll Down</span>
                    <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TimelineSection;
