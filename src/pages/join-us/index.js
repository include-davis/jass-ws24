import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from '@/components/cabinetCard';
import { Fragment } from 'react';

export async function getStaticProps() {
    const join_us_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/join-us?_published=true`
    );
    const join_us_json = await join_us_res.json();

    const cabinet_positions_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/cabinet-position?_published=true`
    );
    const cabinet_positions_json = await cabinet_positions_res.json();

    return {
        props: {
            join_us: join_us_json.body?.[0] || null,
            cabinet_positions: cabinet_positions_json.body || [],
        },
    };
}

export default function JoinUs({ join_us, cabinet_positions }) {
    cabinet_positions = cabinet_positions.map((position) => {
        return {
            ...position,
            display_order: Number(position.display_order),
        };
    });

    // put cabinent positions in order from 1-8
    cabinet_positions = cabinet_positions.sort(
        (a, b) => +a.display_order - +b.display_order
    );

    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.cabinet_body}>
                <div className={styles.image_container}>
                    <Image
                        className={styles.cabinet_image}
                        src={join_us?.join_us_hero_image?.[0]?.src}
                        alt="jass_group"
                        fill
                    />
                </div>
                <div className={styles.cabinet_center}>
                    <h1>{join_us?.join_us_hero_title}</h1>
                    <br />
                    <p>{join_us?.join_us_hero_description}</p>
                </div>
                <div className={styles.cabinetRow}>
                    {cabinet_positions.map((position, index) => (
                        <Fragment key={position.id}>
                            <CabinetCard
                                position={position.position_title}
                                description={position.position_description}
                            />
                            {index % 2 === 0 && (
                                <div className={styles.filler}></div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
