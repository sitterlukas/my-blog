import { RoughNotation } from 'react-rough-notation';
import { FunctionComponent } from 'react';

import { footerData } from './footerData';

type Data = {
    title: string;
    color: string;
    links: {
        title: string,
        href: string
    }[];
}

export const Footer: FunctionComponent = () => (
  <footer className='flex justify-around mb-8 text-center text-secondary font-light'>
    <a className='mb-4 text-xl' href='#about'>
      <RoughNotation show color='#580044' animationDelay={1200} strokeWidth={2} type='underline'>Home</RoughNotation>
    </a>
    {footerData.map((link: Data, index) => (
      <div key={index} className='flex flex-col'>
        <div className='mb-4 text-xl'>
          <RoughNotation show color={link.color} animationDelay={1200} strokeWidth={2} type='underline'>{link.title}</RoughNotation>
        </div>
        <div className='flex flex-col gap-3 text-sm'>
          {link.links.map((item, itemIndex) => <a key={itemIndex} href={item.href}>{item.title}</a>)}
        </div>
      </div>
    ))}
  </footer>
);
