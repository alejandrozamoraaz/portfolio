'use client'

import { useState, useEffect } from 'react'

export default function Typewriter({
  words
}: {
  words: string[];
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWordLength = currentWord.length;

      if (isTyping) {
        if (currentWordLength < words[currentWordIndex].length) {
          setCurrentWord((prev) => prev + words[currentWordIndex][currentWordLength]);
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentWordLength > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentWord, currentWordIndex, isTyping, words]);

  return (
    <h2>
      <span>{currentWord}</span>
      <span className="blink">|</span>
    </h2>
  );
};
