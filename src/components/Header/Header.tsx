'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import NavLinks from './NavLinks';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isContactActive = pathname === '/contact';

  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-surface-base/85 backdrop-blur-xl border-b border-white/[0.06] transition-all'>
      <div className='max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between'>
        {/* Brand Logo */}
        <div className='flex items-center gap-3'>
          <Link
            href='/'
            onClick={closeMenu}
            className='flex items-baseline tracking-tight group'
          >
            <span className='text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors'>
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span
              className='w-1.5 h-1.5 rounded-full bg-primary-container inline-block ml-[3px]'
              aria-hidden='true'
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          <NavLinks closeMenu={closeMenu} />
        </nav>

        {/* Right Action: Contact Button */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            href='/contact'
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-raised border text-xs font-mono tracking-wider uppercase transition-all ${
              isContactActive
                ? 'border-primary-container text-primary font-semibold'
                : 'border-white/10 hover:border-primary-container/50 text-white'
            }`}
          >
            <span className='w-1.5 h-1.5 rounded-full bg-success-emerald animate-pulse' />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle navigation menu'
            className='p-2 text-text-secondary hover:text-white transition-colors'
          >
            {isMenuOpen ? <ImCross size='1.1em' /> : <FaBars size='1.25em' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className='md:hidden border-b border-white/[0.08] bg-surface-base/95 backdrop-blur-2xl px-5'>
          <NavLinks closeMenu={closeMenu} mobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;
