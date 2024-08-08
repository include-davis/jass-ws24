import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/navbar/navbar.module.scss';

const container = {
    logo: '/images/JASS Logo Circle.jpg',
    message: 'Join JASS',
};

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className={`${styles.header} ${styles.globalstyles}`}>
            <img src={container.logo} alt="JASS logo" className={styles.logo} />
            <nav ref={navRef} className={styles.nav}>
                <button
                    type="button"
                    className={`${styles.buttonmobile} ${styles.button}`}
                    onClick={() => window.location.href = '/joinourcabinet'}
                >
                    {container.message}
                </button>
                <div
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ul className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}>
                    <li><a href="/" className={styles.font} onClick={handleLinkClick}>Home</a></li>
                    <li><a href="/calendar" className={styles.font} onClick={handleLinkClick}>Calendar</a></li>
                    <li><a href="/meet-us" className={styles.font} onClick={handleLinkClick}>Meet Us</a></li>
                    <li><a href="/join-us" className={styles.font} onClick={handleLinkClick}>Join Our Cabinet</a></li>
                    <li><a href="/contact" className={styles.font} onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
