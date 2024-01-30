import { useState } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${isOpen ? "w-full h-screen" : ""}`}>
      <div
        className={`hamburger-icon cursor-pointer ${isOpen ? 'open right-[6.5%] top-[35%] absolute z-30' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col justify-center bg-sky-800 pl-12 menu z-20 top-[-10%] left-[-5%] h-[110vh] w-[110%]">
          {/* Place your menu items here */}
          <Link href="/" className="block px-4 py-2 text-gray-200 text-3xl">Home</Link>
          <Link href="/" className="block px-4 py-2 text-gray-200 text-3xl">Kontakt oss</Link>
          <Link href="/" className="block px-4 py-2 text-gray-200 text-3xl">Join</Link>
        </div>
      )}
      <style jsx>{`
        .hamburger-icon {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 2.5rem;
          height: 1.75rem;
        }

        .bar {
          width: 30px;
          height: 8px;
          background-color: #f1f1f1;
          border-radius: 20px;
        }

        .bar:nth-child(2) {
          margin-top: 8px;
        }

        .bar:nth-child(3) {
          margin-top: 8px;
        }

        .open .bar:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .open .bar:nth-child(2) {
          opacity: 0;
        }

        .open .bar:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .menu {
          // Add Tailwind CSS classes for styling the menu
        }
      `}</style>
    </div>
  );
};

export default HamburgerMenu;
