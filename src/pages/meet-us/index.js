import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';

export async function getStaticProps() {
    // const meet_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/meet-us?populate=*`
    // );
    // const meetus_json = await meet_res.json();
    // // console.log(meetus_json);

    // const meetcab_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/cabinets?populate[0]=roles&populate[1]=roles.bio_pic`
    // );
    // const meetcab_json = await meetcab_res.json();
    // // console.log(meetcab_json);

    const meetus_json = {
        data: {
            attributes: {
                hero_image: {
                    data: {
                        attributes: {
                            formats: {
                                large: {
                                    url: '/images/JASS_GROUP.jpeg',
                                },
                            },
                        },
                    },
                },
                description:
                    'Meet the team that makes JASS at UC Davis possible!',
            },
        },
    };

    const meetcab_json = {
        data: [
            {
                attributes: {
                    roles: [
                        {
                            id: 1,
                            officer_name: 'Thing',
                            pronouns: 'she/her',
                            role_title: 'President',
                            major: 'Computer Science',
                            year: '3rd Year',
                            bio_pic: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_cabinet.jpg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            id: 2,
                            officer_name: 'Thing',
                            pronouns: 'she/her',
                            role_title: 'President',
                            major: 'Computer Science',
                            year: '3rd Year',
                            bio_pic: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_cabinet.jpg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            id: 3,
                            officer_name: 'Thing',
                            pronouns: 'she/her',
                            role_title: 'President',
                            major: 'Computer Science',
                            year: '3rd Year',
                            bio_pic: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_cabinet.jpg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            id: 4,
                            officer_name: 'Thing',
                            pronouns: 'she/her',
                            role_title: 'President',
                            major: 'Computer Science',
                            year: '3rd Year',
                            bio_pic: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_cabinet.jpg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            id: 5,
                            officer_name: 'Thing',
                            pronouns: 'she/her',
                            role_title: 'President',
                            major: 'Computer Science',
                            year: '3rd Year',
                            bio_pic: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_cabinet.jpg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    };

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
    return (
        <>
            <div className={styles.board}>
                <div className={styles.header}>
                    <img
                        className="hero_image"
                        src={
                            meetus.hero_image.data.attributes.formats.large.url
                        }
                        alt="Meet Us"
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
        </>
    );
}
