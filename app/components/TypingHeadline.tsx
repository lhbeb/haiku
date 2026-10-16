'use client';

import { useEffect, useState } from 'react';

const phrases = [
  'Developed in Haikou.',
  'Built on Israeli engineering roots.',
  'Taken from concept to production.',
];

export default function TypingHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => setReduceMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener('change', syncMotionPreference);
    return () => mediaQuery.removeEventListener('change', syncMotionPreference);
  }, []);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    if (reduceMotion) {
      setCharacterCount(phrase.length);
      setIsDeleting(false);
      return;
    }

    let delay = isDeleting ? 28 : 52;
    let nextStep = () => setCharacterCount((count) => count + (isDeleting ? -1 : 1));

    if (!isDeleting && characterCount === phrase.length) {
      delay = 1750;
      nextStep = () => setIsDeleting(true);
    } else if (isDeleting && characterCount === 0) {
      delay = 320;
      nextStep = () => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      };
    }

    const timer = window.setTimeout(nextStep, delay);
    return () => window.clearTimeout(timer);
  }, [characterCount, isDeleting, phraseIndex, reduceMotion]);

  const currentPhrase = phrases[phraseIndex];

  return (
    <>
      <span className="hero-typing" aria-hidden="true">
        {currentPhrase.slice(0, characterCount)}
        <span className="typing-cursor" />
      </span>
      <span className="sr-only">
        Developed in Haikou with Israeli engineering roots, from concept to production.
      </span>
    </>
  );
}
