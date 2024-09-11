import { JoinCabinet } from '@/components/joinCabinet';

export async function getStaticProps() {
    // const join_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/join-us?populate=*`
    // );
    // const joinus_json = await join_res.json();
    // // console.log('header', joinus_json);

    // const joincab_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/join-cabinets?populate=*`
    // );
    // const joincab_json = await joincab_res.json();
    // // console.log('positions', joincab_json);

    const joinus_json = {
        data: {
            attributes: {
                header: 'Join Us',
                description:
                    'We are always looking for talented and passionate individuals to join our team. If you are interested in working with us, please check out the available positions below and apply today!',
                hero_image: {
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
        },
    };

    const joincab_json = {
        data: [
            {
                attributes: {
                    roles: [
                        {
                            position_title: 'President',
                            description:
                                "The President is the chief executive officer of the organization. The President is responsible for the overall management of the organization, including the development and implementation of the organization's strategic plan, the organization's financial management, and the organization's programmatic work. The President is also responsible for the organization's external relations, including the organization's relationships with funders, partners, and other stakeholders. The President is responsible for the organization's compliance with all applicable laws and regulations, and for the organization's adherence to best practices in nonprofit management.",
                            id: 0,
                        },
                        {
                            position_title: 'Vice President',
                            description:
                                "The Vice President is the second-in-command of the organization. The Vice President is responsible for supporting the President in the overall management of the organization, including the development and implementation of the organization's strategic plan, the organization's financial management, and the organization's programmatic work. The Vice President is also responsible for supporting the President in the organization's external relations, including the organization's relationships with funders, partners, and other stakeholders. The Vice President is responsible for supporting the President in the organization's compliance with all applicable laws and regulations, and for supporting the President in the organization's adherence to best practices in nonprofit management.",
                            id: 1,
                        },
                        {
                            position_title: 'Secretary',
                            description:
                                "The Secretary is responsible for maintaining the organization's records, including the organization's meeting minutes, the organization's financial records, and the organization's legal documents. The Secretary is responsible for ensuring that the organization's records are accurate and up-to-date, and for ensuring that the organization's records are accessible to the organization's members and other stakeholders. The Secretary is also responsible for ensuring that the organization's meetings are conducted in accordance with the organization's bylaws and other governing documents.",
                            id: 2,
                        },
                        {
                            position_title: 'Treasurer',
                            description:
                                "The Treasurer is responsible for managing the organization's finances, including the organization's budget, the organization's financial statements, and the organization's financial transactions. The Treasurer is responsible for ensuring that the organization's finances are accurate and up-to-date, and for ensuring that the organization's finances are in compliance with all applicable laws and regulations. The Treasurer is also responsible for ensuring that the organization's financial management practices are in accordance with best practices in nonprofit management.",
                            id: 3,
                        },
                        {
                            position_title: 'Family Coordinator (2)',
                            description:
                                "The Director of Communications is responsible for managing the organization's communications, including the organization's website, social media, and other communications channels. The Director of Communications is responsible for developing and implementing the organization's communications strategy, and for ensuring that the organization's communications are accurate, timely, and effective. The Director of Communications is also responsible for managing the organization's relationships with the media, and for ensuring that the organization's communications are in compliance with all applicable laws and regulations.",
                            id: 4,
                        },
                        {
                            position_title: 'Director of Development',
                            description:
                                "The Director of Development is responsible for managing the organization's fundraising efforts, including the organization's grant writing, donor cultivation, and special events. The Director of Development is responsible for developing and implementing the organization's fundraising strategy, and for ensuring that the organization's fundraising efforts are effective and sustainable. The Director of Development is also responsible for managing the organization's relationships with funders, donors, and other stakeholders, and for ensuring that the organization's fundraising efforts are in compliance with all applicable laws and regulations.",
                            id: 5,
                        },
                        {
                            position_title: 'Director of Programs',
                            description:
                                "The Director of Programs is responsible for managing the organization's programmatic work, including the organization's research, advocacy, and capacity-building activities. The Director of Programs is responsible for developing and implementing the organization's programmatic strategy, and for ensuring that the organization's programmatic work is effective and sustainable. The Director of Programs is also responsible for managing the organization's relationships with partners, stakeholders, and other organizations, and for ensuring that the organization's programmatic work is in compliance with all applicable laws and regulations.",
                            id: 6,
                        },
                        {
                            position_title: 'Director of Operations',
                            description:
                                "The Director of Operations is responsible for managing the organization's day-to-day operations, including the organization's human resources, finance, and administration. The Director of Operations is responsible for developing and implementing the organization's operational strategy, and for ensuring that the organization's operations are efficient and effective. The Director of Operations is also responsible for managing the organization's relationships with vendors, contractors, and other service providers, and for ensuring that the organization's operations are in compliance with all applicable laws and regulations.",
                            id: 7,
                        },
                    ],
                },
            },
        ],
    };

    return {
        props: {
            header: joinus_json.data,
            positions: joincab_json.data,
        },
    };
}

export default function JoinUs({ header, positions }) {
    return (
        <>
            <JoinCabinet header={header} positions={positions} />
        </>
    );
}
