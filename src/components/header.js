import React, { useState } from 'react';
import styles from '@/styles/components/navbar/navbar.module.scss';

const container = {
    logo: '/images/JASS Logo Circle.jpg',
    message: 'Join JASS',
};

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`${styles.header} ${styles.globalstyles}`}>
            <img src={container.logo} alt="JASS logo" className={styles.logo} />
            <nav className={styles.nav}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonhover}`}
                    onClick={() => window.location.href = '/joinourcabinet'}
                >
                    {container.message}
                </button>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ul className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}>
                    <li><a href="/" className={styles.font}>Home</a></li>
                    <li><a href="/calendar" className={styles.font}>Calendar</a></li>
                    <li><a href="/meet-us" className={styles.font}>Meet Us</a></li>
                    <li><a href="/join-us" className={styles.font}>Join Our Cabinet</a></li>
                    <li><a href="/contact" className={styles.font}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
