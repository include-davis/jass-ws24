import styles from '@/styles/components/landing/landing.module.scss';
import Image from 'next/image';

const images = {
    jass_gp: `/images/JASS_GROUP.jpeg`,
};
const content = {
    join_button: 'Join JASS',
    header: 'JASS @ UC Davis',
    paragraph: 'Meet friendly and open people through events, games, and more!',
};
export function Landing() {
    function handleClick() {
        // TODO: add router redirect
        console.log('Redirect to join us');
    }
    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.landing_body}>
                <Image
                    src={images.jass_gp}
                    alt="jass_group"
                    width="1216"
                    height="400"
                />
                <div className={styles.landing_center}>
                    <h1>{content.header}</h1>
                    <br />
                    <p>{content.paragraph}</p>
                    <br />
                    <button onClick={handleClick} style={{ marginTop: '20px' }}>
                        {content.join_button}
                    </button>
                </div>
            </div>
        </div>
    );
}
