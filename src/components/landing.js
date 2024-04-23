import styles from '@/styles/components/landing/landing.module.scss';
import Image from 'next/image';

const images = {
    jass_gp: `/images/JASS_GROUP.jpeg`,
};
export default function Landing() {
    function handleClick() {
        // TODO: add router redirect
        console.log('Redirect to join us');
    }
    return (
        <div className={styles.gaegu_regular}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
            </style>
            <div className={styles.landing_body}>
                <Image
                    src={images.jass_gp}
                    alt="jass_group"
                    width="1216"
                    height="400"
                />
                <div className={styles.landing_center}>
                    <h1>JASS @ UC Davis</h1>
                    <br />
                    <p>
                        Meet friendly and open people through events, games, and
                        more!
                    </p>
                    <br />
                    <button onClick={handleClick}>Join JASS</button>
                </div>
            </div>
        </div>
    );
}
