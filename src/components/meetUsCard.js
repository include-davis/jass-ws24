import React from 'react';
import styles from '@/styles/pages/meetus/meetus.module.scss';

export const MeetUsCard = () => {
    return (
        <div className={styles.child}>
            <div className={styles.childtop}>
                <img src="../../Images/placeholder.jpg" />
            </div>
            <div className={styles.childbottom}>
                <h2>First Last</h2>
                <p>Position | Major, Year</p>
            </div>
        </div>
    );
};
