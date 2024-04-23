import styles from '@/styles/components/components.module.scss';
// import jass_gp from './JASS_GROUP.jpeg';
// import { Link } from 'react-router-dom';
import Image from 'next/image';

export default function Components() {
    return (
        <div className={styles.gaegu_regular}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
            </style>
            <div className={styles.landing_body}>
                <Image src={jass_gp} alt="group_photo" />
                <div className={styles.landing_center}>
                    <h1>JASS @ UC Davis</h1>
                    <br />
                    <p>
                        Meet friendly and open people through events, games, and
                        more!
                    </p>
                    <br />
                    {/* <Link to="/joinus"> */}
                    <button>Join JASS</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
