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
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/cabinets?populate=*`
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

export default function MeetUs({ meet_us, meet_cab }) {
    const meetus = meet_us.attributes;
    const meetcab = meet_cab[0].attributes.roles;
    // console.log(meetcab);
    return (
        <div>
            <Header />

            <div className={styles.board}>
                <div className={styles.intro}>
                    <img
                        src={
                            meetus.hero_image.data.attributes.formats.large.url
                        }
                    />
                </div>

                <h1> Meet Us </h1>
                <p>{meetus.description}</p>

                <div className={styles.parent}>
                    {meetcab.map((member) => (
                        <MeetUsCard
                            key={member.id}
                            name={member.officer_name}
                            pronouns={member.pronouns}
                            position={member.role_title}
                            major={member.major}
                            year={member.year}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
