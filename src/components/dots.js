import styles from '@/styles/components/dots/dots.module.scss';

export function Dots({ numDots, curCard }) {
    return (
        <div className={styles.dots}>
            {[...Array(numDots)].map((_, i) => (
                <div
                    key={`dot ${i}`}
                    className={`${styles.dot} ${i === curCard ? styles.active : ''}`}
                ></div>
            ))}
        </div>
    );
}
