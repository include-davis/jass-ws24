import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/navbar/navbar.module.scss';
import Link from 'next/link';

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
                    className={`${styles.buttonmobile}`}
                    onClick={() => (window.location.href = '/join-us')}
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
                <ul
                    className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}
                >
                    <li>
                        <Link
                            href="/"
                            className={styles.font}
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/calendar"
                            className={styles.font}
                            onClick={handleLinkClick}
                        >
                            Calendar
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/meet-us"
                            className={styles.font}
                            onClick={handleLinkClick}
                        >
                            Meet Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/join-us"
                            className={styles.font}
                            onClick={handleLinkClick}
                        >
                            Join Our Cabinet
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={styles.font}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <button
                    type="button"
                    className={`${styles.button}`}
                    onClick={() => (window.location.href = '/join-us')}
                >
                    {container.message}
                </button>
            </nav>
        </header>
    );
}
