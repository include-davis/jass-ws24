import styles from '@/styles/components/whoweare/whoweare.module.scss';
import { useState, useRef } from 'react';
import { Dots as CardDots } from './dots';

const button = {
    message: 'Download our Constitution',
};

export function InfoCard({ text }) {
    return (
        <div className={styles.card}>
            <p className={styles.cardText}>{text}</p>
        </div>
    );
}

export function ConstitutionButton({ link }) {
    return (
        <a
            className={`${styles.constitutionButton} `}
            href={link}
            target="_blank"
        >
            <button>{button.message}</button>
        </a>
    );
}

export function WhoWeAre({ data }) {
    const [curCard, setCurCard] = useState(0);
    const cardRef = useRef(null);

    const handleScroll = () => {
        if (cardRef.current) {
            const { scrollLeft, offsetWidth } = cardRef.current;
            const cardIndex = Math.round(scrollLeft / offsetWidth);
            setCurCard(cardIndex);
        }
    };

    return (
        <div className={styles.intro}>
            <h1 className={styles.infoHeader}>Who We Are</h1>
            <div className={styles.infoContainer}>
                <div
                    className={styles.infoCards}
                    ref={cardRef}
                    onScroll={handleScroll}
                >
                    <InfoCard text={data.english} />
                    <InfoCard text={data.japanese} />
                </div>
                <CardDots numDots={2} curCard={curCard} />
            </div>
            <div className={styles.button}>
                <ConstitutionButton link={data.constitution_link} />
            </div>
            <div className={`${styles.button} ${styles.mobile}`}>
                <ConstitutionButton link={data.constitution_link} />
            </div>
        </div>
    );
}
