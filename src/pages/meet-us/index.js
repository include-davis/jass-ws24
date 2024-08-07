import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
// import Image from 'next/image';

export async function getStaticProps() {
    const meet_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/meet-us?populate=*`
    );
    const meetus_json = await meet_res.json();
    // console.log(meetus_json);

    const meetcab_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/cabinets?populate[0]=roles&populate[1]=roles.bio_pic`
    );
    const meetcab_json = await meetcab_res.json();
    // console.log(meetcab_json);

    return {
        props: {
            meet_us: meetus_json.data,
            meet_cab: meetcab_json.data,
        },
    };
}

// TODO: add the cab member profile picture

export default function MeetUs({ meet_us, meet_cab }) {
    const meetus = meet_us.attributes;
    const meetcab = meet_cab[0].attributes.roles;
    console.log(meetcab);
    return (
        <div>
            <Header />

            <div className={styles.board}>
                <div className={styles.header}>
                    <img
                        className="hero_image"
                        src={
                            meetus.hero_image.data.attributes.formats.large.url
                        }
                    />
                    <h1> Meet Us </h1>
                    <p>{meetus.description}</p>
                </div>

                <div className={styles.parent}>
                    {meetcab.map((member) => (
                        <MeetUsCard
                            key={member.id}
                            name={member.officer_name}
                            pronouns={member.pronouns}
                            position={member.role_title}
                            major={member.major}
                            year={member.year}
                            photo={
                                member.bio_pic.data.attributes.formats.large.url
                            }
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
