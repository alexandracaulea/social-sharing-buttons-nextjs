import ShareButton from './share-button';
import CopyToClipboardButton from './copy-to-clipboard-button';
import FacebookIcon from '../icons/facebook-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import TwitterIcon from '../icons/twitter-icon';
import WhatsappIcon from '../icons/whatsapp-icon';

export default function ShareSection() {
  return (
    <aside
      aria-label='Share this article'
      className='flex gap-4 justify-center print:hidden items-center px-6 mb-10 mt-6 h-dvh'>
      <span className='italic text-gray-600 dark:text-gray-50 text-base medium font-rubik'>
        Share:
      </span>
      <ul className='flex items-center gap-3'>
        <li>
          <CopyToClipboardButton />
        </li>
        <li>
          <ShareButton
            platform='whatsapp'
            icon={<WhatsappIcon />}
            label='Share on WhatsApp'
          />
        </li>
        <li>
          <ShareButton
            platform='twitter'
            icon={<TwitterIcon />}
            label='Share on X'
          />
        </li>
        <li>
          <ShareButton
            platform='facebook'
            icon={<FacebookIcon />}
            label='Share on Facebook'
          />
        </li>
        <li>
          <ShareButton
            platform='linkedin'
            icon={<LinkedinIcon />}
            label='Share on LinkedIn'
          />
        </li>
      </ul>
    </aside>
  );
}
