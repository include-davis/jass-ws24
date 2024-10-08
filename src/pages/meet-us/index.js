import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';
import Image from 'next/image';
import Footer from '@/components/footer';

export async function getStaticProps() {
    const cabinet_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/cabinet-member?_published=true`
    );
    const cabinet_json = await cabinet_res.json();

    const meet_us_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/meet-us?_published=true`
    );
    const meet_us_json = await meet_us_res.json();

    const external_links_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/external-links?_published=true`
    );
    const external_links_data = await external_links_res.json();

    return {
        props: {
            cabinet: cabinet_json,
            meet_us: meet_us_json,
            external_links: external_links_data.body || [],
        },
    };
}

export default function MeetUs({ cabinet, meet_us, external_links }) {
    cabinet = cabinet?.body.map((member) => {
        return {
            ...member,
            display_order: Number(member.display_order),
        };
    });

    // put cabinent members in order from 1-12
    cabinet = cabinet.sort((a, b) => a.display_order - b.display_order);

    return (
        <>
            <div className={styles.board}>
                <div className={styles.header}>
                    <div className={styles.image_container}>
                        <Image
                            className={styles.heroImg}
                            src={meet_us?.body[0].meet_us_hero_image[0].src}
                            alt="Meet Us"
                            fill
                        />
                    </div>
                    <div className={styles.headerInfo}>
                        <h1>{meet_us?.body[0].meet_us_hero_title}</h1>
                        <p>{meet_us?.body[0].meet_us_hero_description}</p>
                    </div>
                </div>

                <div className={styles.memberCards}>
                    {cabinet.map((member) => (
                        <MeetUsCard
                            key={member._id}
                            name={member.cabinet_member_name}
                            photo={member.cabinet_member_image[0].src}
                        />
                    ))}
                </div>
            </div>
            <Footer links={external_links} />
        </>
    );
}
