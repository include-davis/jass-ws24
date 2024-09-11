import React from 'react';
import styles from '@/styles/pages/meetus/meetus.module.scss';

// TODO: add props for cab member pics
export const MeetUsCard = ({ name, photo }) => {
    return (
        <div className={styles.card}>
            <div>
                <img
                    className={styles.cardImg}
                    src={photo}
                    alt="meetus image"
                />
            </div>
            <div className={styles.cardInfo}>
                <h2>{name}</h2>
            </div>
        </div>
    );
};
