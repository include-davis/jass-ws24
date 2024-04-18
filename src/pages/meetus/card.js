import React from 'react';
import styles from '@/styles/pages/meetus/meetus.module.scss';

export const Card = () => {
    return (
        <div className={styles.parent}>

            <div className={styles.child}>

              <div className={styles.childtop}>
                [img]
              </div>
              <div className={styles.childbottom}>
                Position | Major, Year
              </div>

            </div>

            <div className={styles.child}>child 2</div>

            <div className={styles.child}>child 3</div>
        </div>
    )
}