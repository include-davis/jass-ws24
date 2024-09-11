import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from './cabinetCard';

export function JoinCabinet({ header, positions }) {
    const PContent = positions[0].attributes.roles;
    // console.log(PContent);

    const HContent = header.attributes;
    // console.log(HContent);

    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.cabinet_body}>
                <Image
                    className={styles.cabinet_image}
                    src={HContent.hero_image.data.attributes.formats.large.url}
                    alt="jass_group"
                    width="1220"
                    height="400"
                />
                <div className={styles.cabinet_center}>
                    <h1>{HContent.header}</h1>
                    <br />
                    <p>{HContent.description}</p>
                </div>
                <div className={styles.cabinetRow}>
                    {PContent.map((obj) => (
                        <CabinetCard
                            position={obj.position_title}
                            description={obj.description}
                            key={obj.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
