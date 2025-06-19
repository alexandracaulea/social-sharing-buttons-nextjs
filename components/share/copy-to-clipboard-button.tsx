'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import CopyIcon from '../icons/copy-icon';

export default function CopyToClipboardButton() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationKey, setNotificationKey] = useState(0);

  useEffect(() => {
    if (isNotificationVisible) {
      const timerId = setTimeout(() => {
        setIsNotificationVisible(false);
        setNotificationKey(Date.now());
      }, 4000);
      return () => clearTimeout(timerId);
    }
  }, [isNotificationVisible]);

  const handleClick = async () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setIsNotificationVisible(true);
    } catch (error) {
      console.error('Failed to copy the URL', error);
    }
  };

  return (
    <div className='relative'>
      <button className='cursor-pointer align-middle' onClick={handleClick}>
        <CopyIcon />
        <span className='sr-only'>Copy article to clipboard</span>
      </button>
      <p
        role='status'
        aria-live='polite'
        aria-atomic='true'
        key={notificationKey}>
        <AnimatePresence>
          {isNotificationVisible ? (
            <motion.span
              className='absolute w-50 -left-20 min-w-44 rounded-xl border-gray-200 border bg-white px-2.5 py-2 text-xs font-medium text-gray-700 break-all font-rubik'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: 50 }}>
              Copied: {window.location.href}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </p>
    </div>
  );
}
