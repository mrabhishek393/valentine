import React, { useState } from 'react';
import { motion } from 'framer-motion';
// GIFs are now local assets
import proposePanda from '../assets/propose-panda.gif';
import catBlush from '../assets/cat-blush.gif';

const QuestionPage = ({ onYes }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0, position: 'relative' });
    const [noText, setNoText] = useState("No");
    const [currentGif, setCurrentGif] = useState(proposePanda);

    const noTexts = [
        "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
        "Surely not?", "You might regret this!", "Give it another thought!",
        "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
        "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
        "Is that your final answer?", "You're breaking my heart ;(",
        "I'm gonna cry...", "Please? 🥺"
    ];

    const moveNoButton = () => {
        const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
        const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);

        setNoButtonPos({ x, y, position: 'absolute' });
        setNoText(noTexts[Math.floor(Math.random() * noTexts.length)]);
        setCurrentGif(catBlush);
    };

    const handleYes = () => {
        onYes();
    };

    return (
        <div className="min-h-screen w-full bg-pink-100 flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-pink-200">

            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ff0000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 z-10"
            >
                <img
                    src={currentGif}
                    alt="Cute Bear"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#d32f2f] mb-12 text-center drop-shadow-sm z-10 font-serif leading-tight">
                Will you be my Valentine? 🌹
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center z-10 w-full max-w-lg relative h-24">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-4 px-12 rounded-full text-2xl shadow-xl transition-all border-b-[6px] border-[#1b5e20] active:border-b-0 active:translate-y-2"
                    onClick={handleYes}
                >
                    Yes 💖
                </motion.button>

                <motion.button
                    animate={{
                        x: noButtonPos.position === 'absolute' ? noButtonPos.x : 0,
                        y: noButtonPos.position === 'absolute' ? noButtonPos.y : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    className="bg-[#c62828] hover:bg-[#b71c1c] text-white font-bold py-4 px-12 rounded-full text-2xl shadow-xl transition-colors border-b-[6px] border-[#b71c1c] whitespace-nowrap z-50"
                    style={{ position: noButtonPos.position }}
                >
                    {noText}
                </motion.button>
            </div>
        </div>
    );
};

export default QuestionPage;
