import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';

export function EventsCard({ title, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.innerBox}></div>
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}
