import React from 'react';
import styles from '@/styles/pages/meetus/meetus.module.scss';

export const MeetUsCard = ({ name, position, major, year }) => {
    return (
        <div className={styles.child}>
            <div className={styles.childtop}>
                <img src="../../Images/placeholder.jpg" />
            </div>
            <div className={styles.childbottom}>
                <h2>{name}</h2>
                <p>{position} | {major}, {year}</p>
            </div>
        </div>
    );
};
