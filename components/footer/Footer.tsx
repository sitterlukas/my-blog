import { RoughNotation } from 'react-rough-notation';

export const Footer = () => (
  <footer className='flex justify-around text-left text-secondary font-light mb-8'>
    <a className='text-xl mb-4' href='#about'>
      <RoughNotation show color='#580044' animationDelay={1200} strokeWidth={2} type='underline'>Home</RoughNotation>
    </a>
    <div className='flex flex-col'>
      <div className='text-xl mb-4'>
        <RoughNotation show color='#004662' animationDelay={1200} strokeWidth={2} type='underline'>Contact</RoughNotation>
      </div>
      <div className='flex flex-col gap-3'>
        <a>Github</a>
        <a>LinkedIn</a>
        <a>Email</a>
      </div>
    </div>
    <div className='flex flex-col'>
      <div className='text-xl mb-4'>
        <RoughNotation show color='#004c45' animationDelay={1200} strokeWidth={2} type='underline'>Projects</RoughNotation>
      </div>
      <div className='flex flex-col gap-3'>
        <a>Chat app</a>
        <a>Calculator app</a>
      </div>
    </div>
    <div className='flex flex-col'>
      <div className='text-xl mb-4'>
        <RoughNotation show color='#8b6f00' animationDelay={1200} strokeWidth={2} type='underline'>:)</RoughNotation>
      </div>
    </div>
  </footer>
);
