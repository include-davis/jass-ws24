import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';
import Image from 'next/image';

export function EventsCard({ title, description, photo }) {
    console.log(title, description, photo);
    return (
        <div className={styles.card}>
            <div className={styles.innerBox}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}
