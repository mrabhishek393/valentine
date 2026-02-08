import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import timeline photos
import jul2024 from '../assets/timeline/july-2024.jpg';
import aug2024 from '../assets/timeline/aug-2024.jpg';
import sep2024 from '../assets/timeline/sept-2024.jpg';
import oct2024 from '../assets/timeline/oct-2024.jpg';
import nov2024 from '../assets/timeline/nov-2024.jpg';
import dec2024 from '../assets/timeline/dec-2024.jpg';
import jan2025 from '../assets/timeline/jan-2025.jpg';
import feb2025 from '../assets/timeline/feb-2025.jpg';
import mar2025 from '../assets/timeline/march-2025.jpg';
import apr2025 from '../assets/timeline/april-2025.jpg';
import may2025 from '../assets/timeline/may-2025.jpg';
import jun2025 from '../assets/timeline/jun-2025.jpg';
import jul2025 from '../assets/timeline/july-2025.jpg';
import aug2025 from '../assets/timeline/aug-2025.jpg';
import sep2025 from '../assets/timeline/sept-2025.jpg';
import oct2025 from '../assets/timeline/oct-2025.jpg';
import nov2025 from '../assets/timeline/nov-2025.jpg';
import dec2025 from '../assets/timeline/dec-2025.jpg';
import jan2026 from '../assets/timeline/jan-2026.jpg';
import feb2026 from '../assets/timeline/feb-2026.jpg';

// Import cute GIF
import catGif from '../assets/cat-blush.gif';

const timelineData = [
    { date: "July 2024", title: "Where it all began", note: "The day my life changed forever. Remember you started falling for me? I was already in love with you.", img: jul2024 },
    { date: "Aug 2024", title: "Our first love-dovey trip", note: "Too much chaos on the trip but I fell more in love with you.", img: aug2024 },
    { date: "Sept 2024", title: "Getting fit together🏋️‍♀️", note: "We started going gym together, and you thought I was torchering you. Ab bolo?", img: sep2024 },
    { date: "Oct 2024", title: "first goa trip", note: "Me and you and my 2 friends.I was a pendulum but its all about finding love in choas right? (joking)", img: oct2024 },
    { date: "Nov 2024", title: "Concertt yayy", note: "dancing our hearts out on arijit singh songs", img: nov2024 },
    { date: "Dec 2024", title: "North east coldd🥶", note: "It was freezing cold, but we were so happy. Loved keeping you warm, hihihi.", img: dec2024 },
    { date: "Jan 2025", title: "New Year, Same Us", note: "Starting the year with my favorite person.", img: jan2025 },
    { date: "Feb 2025", title: "Our first valentine's day❤️", note: "My forever valentine. Still giving me butterflies.", img: feb2025 },
    { date: "Mar 2025", title: "Kodaiii", note: "This red dress on you, I was speechless. You were more gorgeous than the views", img: mar2025 },
    { date: "Apr 2025", title: "Life continues", note: "Visting mandir and finding peace", img: apr2025 },
    { date: "May 2025", title: "Cafe work dates", note: "You and being goofy comes together. Love youuu", img: may2025 },
    { date: "Jun 2025", title: "Sobha fun", note: "Cooking together and being happy, cooking for you I am even more happy. ", img: jun2025 },
    { date: "Jul 2025", title: "Hyderabad. US Visa timeeee", note: "Same bus  8 times, hyderbad 2 times. Boating under the bridge and visa tension. and Charminar pe muslimo ki fauj", img: jul2025 },
    { date: "Aug 2025", title: "Still in Hyderabad🤣", note: "Stargazing and making reels while our scooty petrol is running low and we dont have cash", img: aug2025 },
    { date: "Sep 2025", title: "Gokarnaa", note: "First trip with another couple jo ki thode fattu the. Raat mei sunsaan rasta yaad hai bina light ke 😱", img: sep2025 },
    { date: "Oct 2025", title: "Leaving for home", note: "Dekho how sad you are because I am going home for diwali. Hihi", img: oct2025 },
    { date: "Nov 2025", title: "Eating japanese food", note: "abhi tak chopsticks pakadna sikh nhi paye hai", img: nov2025 },
    { date: "Dec 2025", title: "First international trip. Yayyyy", note: "Boating beside lamps and shopping first copies. Every day was memorable ( and apka rona bhi, hihihi). Kitni ladai ki hai hamne. Lekin I think we are closer to each other than ever", img: dec2025 },
    { date: "Jan 2026", title: "Back to gym", note: "Me photobombing your gym selfies.", img: jan2026 },
    { date: "Feb 2026", title: "Pizza hopping", note: "Finding new places to eat is a art and I am an artist. hui hui. Lekin pizza was so goood. This is just our 2nd valentine, 100 are more to come. Love you my chihu, sushi poo , CP.", img: feb2026 },
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
                className="w-full h-full relative preserve-3d shadow-2xl rounded-xl border-4 border-white bg-white"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden flex flex-col overflow-hidden">
                    <img
                        src={item.img}
                        alt={item.title}
                        className={`w-full h-48 object-cover ${item.date === "Dec 2024" || item.date === "Jan 2026" ? "object-top" : "object-center"}`}
                    />
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
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-2xl border-2 border-pink-300 w-48"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <img
                                src={catGif}
                                alt="Cute bear"
                                className="w-16 h-16 rounded-full object-cover border-2 border-pink-400"
                            />
                            <p className="text-pink-600 text-xs font-medium text-center animate-pulse">
                                Click card to reveal a cute note 💌
                            </p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                    // Scroll to timeline section to prevent jumping
                                    setTimeout(() => {
                                        window.scrollTo({ top: window.scrollY, behavior: 'instant' });
                                    }, 100);
                                }}
                                className="px-4 py-1.5 bg-pink-600 text-white font-bold rounded-full shadow-md hover:bg-pink-700 transition text-xs"
                            >
                                Stack 'em back 🔄
                            </button>
                        </div>
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
