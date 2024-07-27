import React from 'react';
import styles from '@/styles/pages/meetus/meetus.module.scss';
import Image from 'next/image';

export const MeetUsCard = ({ name }) => {
    return (
        <div className={styles.child}>
            <div className={styles.childtop}>
                <img src="../../Images/placeholder.jpg" />
            </div>
            <div className={styles.childbottom}>
                <h2>{name}</h2>
            </div>
        </div>
    );
};
