import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from '@/components/cabinetCard';

export async function getStaticProps() {
    const join_us_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/join-us`
    );
    const join_us_json = await join_us_res.json();

    const cabinet_positions_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/cabinet-position`
    );
    const cabinet_positions_json = await cabinet_positions_res.json();

    console.log(cabinet_positions_json);
    console.log(join_us_json);

    return {
        props: {
            join_us: join_us_json,
            cabinet_positions: cabinet_positions_json,
        },
    };
}

export default function JoinUs({ join_us, cabinet_positions }) {
    cabinet_positions = cabinet_positions?.body.map((position) => {
        return {
            ...position,
            display_order: Number(position.display_order),
        };
    });

    // put cabinent members in order from 1-12
    cabinet_positions = cabinet_positions.sort(
        (a, b) => a.display_order - b.display_order
    );

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
                    {cabinet_positions.map((position) => (
                        <CabinetCard
                            position={position.position_title}
                            description={position.description}
                            key={position.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
