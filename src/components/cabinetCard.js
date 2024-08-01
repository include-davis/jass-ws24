import React from 'react';
import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export function CabinetCard({ position, description, key }) {
    const [isOpened, setIsOpened] = useState(false);
    function handleClick() {
        setIsOpened(!isOpened);
    }
    const plusOrMinus = isOpened ? '/images/plus.png' : '/images/minus.png';
    const heightStyle = { height: isOpened ? 'fit-content' : '55px' };

    let descriptionArr = description.split('\n');

    return (
        <div
            className={styles.card}
            onClick={handleClick}
            style={heightStyle}
            key={key}
        >
            <div className={styles.compactedCard}>
                <p>{position}</p>
                <button>
                    <Image
                        src={plusOrMinus}
                        alt="plusminus"
                        width={50}
                        height={50}
                    />
                </button>
            </div>

            {isOpened && (
                <div>
                    <ul className={styles.bullets}>
                        {descriptionArr.map((bullet, index) => (
                            <li key={index}> {bullet} </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
