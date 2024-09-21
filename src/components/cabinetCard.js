import React from 'react';
import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export function CabinetCard({ position, description, key }) {
    const [isOpened, setIsOpened] = useState(false);
    function handleClick() {
        setIsOpened(!isOpened);
    }
    const plusOrMinus = isOpened ? '/images/minus.png' : '/images/plus.png';
    const heightStyle = { height: isOpened ? 'fit-content' : '55px' };

    return (
        <div
            className={styles.card}
            onClick={handleClick}
            style={heightStyle}
            key={key}
        >
            <div className={styles.compactedCard}>
                <p>{position}</p>
                <Image
                    className={styles.cardButton}
                    src={plusOrMinus}
                    alt="plusminus"
                    width={50}
                    height={50}
                />
            </div>

            {isOpened && (
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            )}
        </div>
    );
}
