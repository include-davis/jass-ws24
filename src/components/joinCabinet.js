import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from './cabinetCard';

const images = {
    jass_gp: `/images/JASS_cabinet.jpg`,
};
const content = {
    header: 'Join Our Cabinet',
    paragraph1:
        'Interested in running for cabinet next year and want to know about specific positions? ',
    paragraph2:
        'Here you can learn about general responsibilities for each position! ',
};
export function JoinCabinet() {
    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.cabinet_body}>
                <Image
                    src={images.jass_gp}
                    alt="jass_group"
                    width="1220"
                    height="400"
                />
                <div className={styles.cabinet_center}>
                    <h1>{content.header}</h1>
                    <br />
                    <p>{content.paragraph1}</p>
                    <p>{content.paragraph2}</p>
                </div>
                <div className={styles.cabinetRow}>
                    <CabinetCard position={'Social Chairs (2)'} />
                    <CabinetCard position={'Service Chairs (2)'} />
                </div>
                <div className={styles.cabinetRow}>
                    <CabinetCard position={'Family Coordinators (2)'} />
                    <CabinetCard position={'Sports Coordinator'} />
                </div>
                <div className={styles.cabinetRow}>
                    <CabinetCard position={'Historian'} />
                    <CabinetCard position={'Publicity'} />
                </div>
                <div className={styles.cabinetRow}>
                    <CabinetCard position={'Treasurer'} />
                    <CabinetCard position={'Secretary'} />
                </div>
            </div>
        </div>
    );
}
