import styles from '@/styles/components/landing/landing.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Landing({ data }) {
    return (
        <div className={styles.landing}>
            <div className={styles.image_container}>
                <Image
                    className={styles.landingImage}
                    src={data.hero}
                    alt="jass_group"
                    fill
                />
            </div>
            <div className={styles.landingInfo}>
                <div className={styles.landingHeader}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
                <Link href="/join-us">
                    <button className={styles.landingButton}>Join JASS</button>
                </Link>
            </div>
        </div>
    );
}
