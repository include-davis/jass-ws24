import React from 'react';
import styles from '@/styles/components/navbar/navbar.module.scss';
import { useRouter } from 'next/router';

const container = {
    logo: '/images/JASS_LOGO.jpeg',
    message: 'Join JASS',
};

export function Header() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/join-us');
    };

    return (
        <div
            className={`${styles.header} ${styles.globalstyles} ${styles.font} ${styles.nav}`}
        >
            <img src={container.logo} alt="JASS logo" className={styles.logo} />
            <nav className="font">
                <a href="/">Home</a>
                <a href="/calendar">Calendar</a>
                <a href="/meet-us">Meet Us</a>
                <a href="/join-us">Join Our Cabinet</a>
                <a href="/contact">Contact</a>
                <button
                    type="button"
                    className={`${styles.buttonhover} ${styles.button}`}
                    onClick={handleClick}
                >
                    {container.message}
                </button>
            </nav>
        </div>
    );
}
