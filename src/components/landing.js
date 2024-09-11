import styles from '@/styles/components/landing/landing.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Landing({ data }) {
    return (
        <div className={styles.landing}>
            <Image
                className={styles.landingImage}
                src={data.hero}
                alt="jass_group"
                width="1220"
                height="400"
            />
            <div className={styles.landingInfo}>
                <div className={styles.landingHeader}>
                    <h1>{data.header}</h1>
                    <p>{data.description}</p>
                </div>
                <Link href="/join-us">
                    <button className={styles.landingButton}>Join JASS</button>
                </Link>
            </div>
        </div>
    );
}
