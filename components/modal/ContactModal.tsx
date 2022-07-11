import { MouseEventHandler } from 'react';

export const ContactModal = ({ isOpen, handleModalOpen }: {isOpen: boolean, handleModalOpen: MouseEventHandler<HTMLDivElement>}) => (
  <div onClick={handleModalOpen} className={isOpen ? 'absolute top-0 w-full h-full bg-secondary opacity-50 overflow-auto z-30 ' : 'hidden'}>Ahoj</div>
);
