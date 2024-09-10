import styles from '@/styles/components/landing/landing.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Landing({ data }) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/join-us');
    };

    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.landing_body}>
                <Image
                    src={data.hero}
                    alt="jass_group"
                    width="1220"
                    height="400"
                />
                <div className={styles.landing_center}>
                    <h1>{data.header}</h1>
                    <br />
                    <p>{data.description}</p>
                    <br />
                    <button onClick={handleClick} style={{ marginTop: '20px' }}>
                        Join JASS
                    </button>
                </div>
            </div>
        </div>
    );
}
