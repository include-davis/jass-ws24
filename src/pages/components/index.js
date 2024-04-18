import styles from '@/styles/components/components.module.scss';
import Video from './Video.png';

export default function Components() {
    return (
        <div className={styles.gaegu_regular}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
            </style>
            <div className={styles.landing_body}>
                <img src={Video} alt="group_photo" />
                <div className={styles.landing_center}>
                    <h1>JASS @ UC Davis</h1>
                    <br />
                    <p>
                        Meet friendly and open people through events, games, and
                        more!
                    </p>
                    <br />
                    <button>Join JASS</button>
                </div>
            </div>
        </div>
    );
}
