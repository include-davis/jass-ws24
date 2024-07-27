import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from './cabinetCard';

export async function getStaticProps() {
    console.log(`${process.env.NEXT_PUBLIC_CMS_URL}/api/homepage?populate=*`);
    const ucd_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/homepage?populate=*`
    );
    const ucd_json = await ucd_res.json();

    return {
        props: {
            ucd_json: ucd_json.data,
        },
    };
}

const images = {
    jass_gp: `/images/JASS_cabinet.jpg`,
};

const positions = [];

export function JoinCabinet() {
    // const positions = Object.values(card_content);
    // console.log(positions);
    const content = '';

    positions.map((obj) => console.log(obj));

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
                    {positions.map((obj, index) => (
                        <CabinetCard
                            position={obj.title}
                            description={obj.description}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
