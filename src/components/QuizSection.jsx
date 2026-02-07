import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        question: "Where was our first trip? (One word)",
        answer: "mountains",
        hint: "We saw snow!",
        correctFeedback: "Yes! Correct! 🏔️",
        memoryImg: "https://placehold.co/300x300/pink/white?text=Memory+1"
    },
    {
        question: "Who said 'I Love You' first?",
        answer: "you",
        hint: "It rhymes with 'shoe'...",
        correctFeedback: "Good Job, Love! ❤️",
        memoryImg: "https://placehold.co/300x300/purple/white?text=Memory+2"
    },
    {
        question: "What's our favorite dish?",
        answer: "pizza",
        hint: "It has cheese and crust...",
        correctFeedback: "Yum! 🍕",
        memoryImg: "https://placehold.co/300x300/red/white?text=Memory+3"
    },
    {
        question: "What's our favorite activity?",
        answer: "movies",
        hint: "We need popcorn for this...",
        correctFeedback: "Perfect date night. 🎬",
        memoryImg: "https://placehold.co/300x300/orange/white?text=Memory+4"
    }
];

const QuizSection = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [unlockedPhotos, setUnlockedPhotos] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    // Coordinate mapping for corners (using percentages for responsiveness)
    const getTargetPosition = (index) => {
        // 0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right
        switch (index % 4) {
            case 0: return { top: '5%', left: '5%' };
            case 1: return { top: '5%', right: '5%' };
            case 2: return { bottom: '5%', left: '5%' };
            case 3: return { bottom: '5%', right: '5%' };
            default: return { top: '50%', left: '50%' };
        }
    };

    const getEntranceOrigin = (index) => {
        switch (index % 4) {
            case 0: return { x: -200, y: -200 };
            case 1: return { x: 200, y: -200 };
            case 2: return { x: -200, y: 200 };
            case 3: return { x: 200, y: 200 };
            default: return { x: 0, y: 0 };
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userAnswer = inputValue.trim().toLowerCase();
        const correctAnswer = questions[currentQuestion].answer.toLowerCase();

        if (userAnswer.includes(correctAnswer)) {
            setFeedback({ type: 'success', text: questions[currentQuestion].correctFeedback });

            if (!unlockedPhotos.find(p => p.id === currentQuestion)) {
                const newPhoto = {
                    id: currentQuestion,
                    src: questions[currentQuestion].memoryImg,
                    rotation: Math.random() * 20 - 10,
                };
                setUnlockedPhotos(prev => [...prev, newPhoto]);
            }

            setTimeout(() => {
                setFeedback(null);
                setInputValue("");
                setWrongAttempts(0);

                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setIsFinished(true); // Trigger Victory View
                }
            }, 1000);

        } else {
            setWrongAttempts(prev => prev + 1);
            setFeedback({ type: 'error', text: "Not quite! Try again! 😜" });
            setTimeout(() => setFeedback(null), 1000);
        }
    };

    return (
        <div className="min-h-screen w-full bg-violet-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Unlocked Photos - Always Visible in Corners */}
            <AnimatePresence>
                {unlockedPhotos.map((photo, index) => {
                    const pos = getTargetPosition(photo.id);
                    const origin = getEntranceOrigin(photo.id);

                    return (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, x: origin.x, y: origin.y, scale: 0.5, rotate: 0 }}
                            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: photo.rotation }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            style={{ position: 'absolute', ...pos, zIndex: 0 }}
                            className="border-4 border-white shadow-2xl bg-white p-2 rounded-lg pointer-events-none w-40 md:w-48 lg:w-56"
                        >
                            <img src={photo.src} alt="Memory" className="w-full h-auto" />
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                {!isFinished && (
                    <motion.div
                        key="quiz-form"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 relative z-20 border border-white/50"
                    >
                        <h2 className="text-2xl font-bold text-violet-600 mb-6 text-center">
                            Question {currentQuestion + 1}/{questions.length}
                        </h2>

                        <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                            {questions[currentQuestion].question}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your answer..."
                                className="w-full p-4 rounded-xl border-2 border-violet-200 focus:border-violet-500 focus:outline-none text-lg text-center"
                                autoFocus
                            />

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full py-3 bg-violet-500 text-white font-bold rounded-xl shadow-lg hover:bg-violet-600 transition"
                            >
                                Submit Answer 💌
                            </motion.button>
                        </form>

                        <AnimatePresence>
                            {wrongAttempts >= 3 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 text-center text-orange-500 font-medium bg-orange-50 p-2 rounded-lg border border-orange-200"
                                >
                                    💡 Hint: {questions[currentQuestion].hint}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Feedback Overlay */}
                        <AnimatePresence>
                            {feedback && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`absolute inset-0 flex flex-col items-center justify-center z-30 p-4 text-center rounded-2xl backdrop-blur-sm ${feedback.type === 'success' ? 'bg-green-100/90 text-green-700' : 'bg-red-100/90 text-red-700'}`}
                                >
                                    <div className="text-6xl mb-4">{feedback.type === 'success' ? '🥰' : '🤔'}</div>
                                    <p className="text-2xl font-bold">{feedback.text}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}

                {isFinished && !showLetter && (
                    <motion.div
                        key="victory-screen"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                        transition={{ duration: 0.8 }}
                        className="z-50 text-center relative flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-violet-600 bg-white/90 backdrop-blur px-8 py-4 rounded-full mb-8 shadow-2xl">
                            You remember everything! 💖
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowLetter(true)}
                            className="px-12 py-5 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(236,72,153,0.6)] text-2xl animate-bounce"
                        >
                            Open My Letter 📜
                        </motion.button>
                    </motion.div>
                )}

                {showLetter && (
                    <motion.div
                        key="letter-scroll"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
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
                                These past two years have been the most magical chapter of my life. From our first date in July 2024 to this very moment,
                                every second with you has been a treasure. You are my best friend, my confidant, and my greatest adventure.
                            </p>
                            <p>
                                I love the way you smile when you see a dog, how you sing in the car (even the wrong lyrics), and how you make everything
                                feel okay just by being there. You've taught me what true partnership means.
                            </p>
                            <p>
                                I promise to always be your biggest fan, to listen to stories, and to love you more with each passing day.
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

                        <div className="mt-12 flex flex-col items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onComplete}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuizSection;
