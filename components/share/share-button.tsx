'use client';

import { ReactNode, useEffect, useState } from 'react';

type ShareButtonProps = {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp';
  icon: ReactNode;
  label: string;
};

export default function ShareButton({
  platform,
  icon,
  label,
}: ShareButtonProps) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    const currentUrl = encodeURIComponent(window.location.href);
    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case 'twitter':
        const twitterMessage = `${document.title} - ${window.location.href}`;
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          twitterMessage,
        )}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle/?url=${currentUrl}`;
        break;
      case 'whatsapp':
        const whatsappMessage = `${document.title} - Discover more on ${window.location.href}`;
        url = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        break;
      default:
        break;
    }

    setShareUrl(url);
  }, [platform]);

  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
