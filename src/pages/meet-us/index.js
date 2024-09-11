import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';
import Image from 'next/image';

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
                        {
                            id: 6,
                            officer_name: 'John Doe',
                            pronouns: 'he/him',
                            role_title: 'Vice President',
                            major: 'Mechanical Engineering',
                            year: '4th Year',
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
                            id: 7,
                            officer_name: 'Jane Smith',
                            pronouns: 'she/her',
                            role_title: 'Secretary',
                            major: 'Biology',
                            year: '2nd Year',
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
                            id: 8,
                            officer_name: 'Alice Johnson',
                            pronouns: 'they/them',
                            role_title: 'Treasurer',
                            major: 'Economics',
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
                            id: 9,
                            officer_name: 'Bob Brown',
                            pronouns: 'he/him',
                            role_title: 'Event Coordinator',
                            major: 'Political Science',
                            year: '4th Year',
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
                            id: 10,
                            officer_name: 'Charlie Davis',
                            pronouns: 'she/her',
                            role_title: 'Public Relations',
                            major: 'Communications',
                            year: '2nd Year',
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
                            id: 11,
                            officer_name: 'Dana Lee',
                            pronouns: 'they/them',
                            role_title: 'Historian',
                            major: 'History',
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
                            id: 12,
                            officer_name: 'Evan Green',
                            pronouns: 'he/him',
                            role_title: 'Webmaster',
                            major: 'Computer Science',
                            year: '4th Year',
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

// {meetcab.map((member) => (
//     <MeetUsCard
//         key={member.id}
//         name={member.officer_name}
//         pronouns={member.pronouns}
//         position={member.role_title}
//         major={member.major}
//         year={member.year}
//         photo={
//             member.bio_pic.data.attributes.formats.large.url
//         }
//     />
// ))}

function groupMembers(memberGroups) {
    const memberCards = [];

    for (let i = 0; i < memberGroups.length; i = i + 2) {
        const memberCard = (
            <div className={styles.memberCardRow}>
                <div
                    className={`${styles.memberCardGroup} ${styles.leftGroup}`}
                >
                    {memberGroups[i].map((member) => (
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
                <div
                    className={`${styles.memberCardGroup} ${styles.rightGroup}`}
                >
                    {memberGroups[i + 1].map((member) => (
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
        );
        memberCards.push(memberCard);
    }
    return memberCards;
}

export default function MeetUs({ meet_us, meet_cab }) {
    const meetus = meet_us.attributes;
    const meetcab = meet_cab[0].attributes.roles;

    // 6 groups of 2 members each
    const memberGroups = [
        meetcab.slice(0, 2),
        meetcab.slice(2, 4),
        meetcab.slice(4, 6),
        meetcab.slice(6, 8),
        meetcab.slice(8, 10),
        meetcab.slice(10, 12),
    ];

    const memberCards = groupMembers(memberGroups);

    return (
        <>
            <div className={styles.board}>
                <div className={styles.header}>
                    <Image
                        className={styles.heroImg}
                        width={500}
                        height={500}
                        src={
                            meetus.hero_image.data.attributes.formats.large.url
                        }
                        alt="Meet Us"
                    />
                    <div className={styles.headerInfo}>
                        <h1> Meet Us </h1>
                        <p>{meetus.description}</p>
                    </div>
                </div>

                <div className={styles.memberCards}>{memberCards}</div>
            </div>
        </>
    );
}
