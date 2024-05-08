import React from 'react';
import styles from '@/styles/components/navbar/navbar.module.scss';

const image = {
    logo: '/images/JASS_LOGO.jpeg'
}

const button = {
    message: 'Join JASS'
}

export default function Header() {
    return (
        <div className={`${styles.header} ${styles.globalstyles} ${styles.font} ${styles.nav}`}> 
            <img 
                src={image.logo} 
                alt="JASS logo" 
                className = {styles.logo}
            />
            <nav className = "font">
                <a href="/">Home</a>
                <a href="/calendar">Calendar</a>
                <a href="/meetus">Meet Us</a>
                <a href="/joinourcabinet">Join Our Cabinet</a>
                <a href="/contact">Contact</a>
                <button 
                    type="button" 
                    className={`${styles.buttonhover} ${styles.button}`} 
                    href="/joinourcabinet">{button.message}
                </button>
            </nav>
        </div>
    )
}