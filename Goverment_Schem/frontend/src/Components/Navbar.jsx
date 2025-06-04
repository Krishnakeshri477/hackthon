import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import GoogleTranslate from './GoogleTranslate';

function Navbar({ scrollToHome, scrollToAbout, scrollToContact }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleNavClick = (scrollFunc) => {
        scrollFunc();
        setMenuOpen(false); // close menu on link click
    };

    return (
        <div className='relative w-full h-auto mb-4'>
            <div className='absolute inset-0 bg-[url(https://d-maps.com/m/asia/india/jharkhand/jharkhand69.gif)] bg-center bg-cover opacity-40'></div>
            <div className='relative z-10'>
                <div className='px-4 sm:px-6 md:px-10 lg:px-20 py-6'>
                    
                    <div className='flex justify-between items-center'>
                        
                        <div className='w-20 h-20 sm:w-28 sm:h-28'>
                            <img
                                src="/WhatsApp Image 2025-05-05 at 13.17.19_81815701.jpg"
                                alt="logo"
                                className='h-full w-full object-cover rounded'
                            />
                        </div>

                        <div className='text-3xl sm:text-5xl md:text-8xl text-green-900 uppercase font-semibold italic text-center flex-1'>
                            jannyojana
                        </div>

                        <div className='hidden md:block'>
                            <GoogleTranslate />
                        </div>

                        <div className='md:hidden text-3xl text-green-900 cursor-pointer' onClick={toggleMenu}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>

                    <div className='md:hidden mt-2 flex justify-end'>
                        <GoogleTranslate />
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className='hidden md:flex justify-end gap-9 mt-6 text-xl md:text-3xl font-medium uppercase underline cursor-pointer'>
                        <div onClick={scrollToHome}>Home</div>
                        <div onClick={scrollToAbout}>About</div>
                        <div onClick={scrollToContact}>Contact Us</div>
                    </div>

                    {/* Navigation Links (Mobile) */}
                    {menuOpen && (
                        <div className='md:hidden mt-4 flex flex-col items-center gap-4 text-lg font-medium uppercase underline cursor-pointer'>
                            <div onClick={() => handleNavClick(scrollToHome)}>Home</div>
                            <div onClick={() => handleNavClick(scrollToAbout)}>About</div>
                            <div onClick={() => handleNavClick(scrollToContact)}>Contact Us</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
