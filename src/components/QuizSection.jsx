import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LetterSection from './LetterSection';

// Import quiz memory photos
import memory1 from '../assets/quiz/memory-1.jpg';
import memory2 from '../assets/quiz/memory-2.jpeg';
import memory3 from '../assets/quiz/memory-3.jpg';
import memory4 from '../assets/quiz/memory-4.jpg';

const questions = [
    {
        question: "Where was our first trip (as a couple/to-be)? (One word)",
        answer: "pondicherry",
        hint: "It was raining cats and dogs. And we went there twice",
        correctFeedback: "Yes! Correct! 🏔️",
        memoryImg: memory1
    },
    {
        question: "Who said 'I Love You' first?",
        answer: "Suyashi",
        hint: "It happened on the day when anjali and vijay were too drunk",
        correctFeedback: "Good Job, Chihu! ❤️",
        memoryImg: memory3
    },
    {
        question: "What's our favorite dish?",
        answer: "Mushroom pasta",
        hint: "We used to make it every weekend.",
        correctFeedback: "Yum! 🍕",
        memoryImg: memory2
    },
    {
        question: "What's our favorite activity?",
        answer: "Cafe hopping",
        hint: "We go to work there outside of home",
        correctFeedback: "Perfect work dates. 🎬",
        memoryImg: memory4
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
                        className="w-full flex justify-center"
                    >
                        <LetterSection showContinue onContinue={onComplete} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuizSection;
