import {
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';
import { LinkOptions } from '@/shared/types';

const navLinks: LinkOptions[] = [
  {
    to: '/feed',
    label: 'Feed',
    icon: <ChatBubbleBottomCenterTextIcon className="icon" />,
    highlight: false,
  },
  {
    to: '/post/new',
    label: 'New Post',
    highlight: true,
  },
];

export default navLinks;
