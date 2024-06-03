import React from 'react';
import styles from '@/styles/pages/joinus/joincab.module.scss';

export function CabinetCard({ position }) {
    return (
        <div className={styles.card}>
            <p>{position}</p>
        </div>
    );
}
