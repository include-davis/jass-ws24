import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';
import Image from 'next/image';

export function EventsCard({ title, description, photo }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image width={250} height={250} src={photo} alt={title} />
            </div>
            <div className={styles.cardInfo}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <div
                    className={styles.cardDescription}
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </div>
        </div>
    );
}
