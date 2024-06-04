import React from 'react';
import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export function CabinetCard({ position, bullet1, bullet2, bullet3, bullet4 }) {
    const [isOpened, setIsOpened] = useState(false);
    function handleClick() {
        setIsOpened(!isOpened);
    }
    const plusOrMinus = isOpened ? '/images/plus.png' : '/images/minus.png';
    return (
        <div className={styles.card}>
            <p>
                {position}
                <button>
                    <Image
                        src={plusOrMinus}
                        alt="plusminus"
                        width={40}
                        height={40}
                        onClick={handleClick}
                    />
                </button>
            </p>
            {isOpened && (
                <div>
                    <ul className={styles.bullets}>
                        <li>{bullet1}</li>
                        <li>{bullet2}</li>
                        <li>{bullet3}</li>
                        <li>{bullet4}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
