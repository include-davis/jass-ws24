import styles from '@/styles/pages/joinus/joincab.module.scss';
import Image from 'next/image';
import { CabinetCard } from './cabinetCard';

const images = {
    jass_gp: `/images/JASS_cabinet.jpg`,
};
const content = {
    header: 'Join Our Cabinet',
    paragraph1:
        'Interested in running for cabinet next year and want to know about specific positions? ',
    paragraph2:
        'Here you can learn about general responsibilities for each position! ',
};
const card_content = {
    social: {
        title: 'Social Chairs (2)',
        description: [
            'Organize large socials like Ski & Beach Trip',
            'Involved in long-term event planning',
            'Work with Treasurer to decide budgets',
            'Ideal for those who enjoy proactive planning and creating memorable events',
        ],
    },
    service: {
        title: 'Service Chairs (2)',
        description: [
            'Plan volunteer events and collaborate with Japanese American Citizen’s League',
            'Lead events such as Relay for Life, Remembrance Day, and Picnic Day',
            'Ideal for those interested in community service',
        ],
    },
    family: {
        title: 'Family Coordinators (2)',
        description: [
            'Manage the Family & Big/Little Program',
            'Organize family events and competitions (e.g., Reveal Night, Family Picnics)',
            'Ideal for those with a welcoming nature and who enjoy fostering new friendships',
        ],
    },
    sports: {
        title: 'Sports Coordinator',
        description: [
            'Plan active events and manage IM sports teams through the Davis IM system',
            'Responsible for sports equipment and maintaining sports-related social media',
            'Best for those interested in sports and athletics',
        ],
    },
    historian: {
        title: 'Historian',
        description: [
            'Capture memories through photography and videography at events',
            'Organize the end-of-year Banquet event',
            'Suited for those interested in photography and documenting memorable moments',
        ],
    },
    publicity: {
        title: 'Publicity',
        description: [
            'Publicize JASS on campus and at events',
            'Manage advertising materials and tabling',
            'First point of contact for prospective members',
            'Ideal for those passionate about marketing and promoting JASS',
        ],
    },
    treasurer: {
        title: 'Treasurer',
        description: [
            'Manage all financial aspects of JASS',
            'Advise on budgeting for events',
            'Handle reimbursements and payments',
            'Suitable for those interested in economics or financial management',
        ],
    },
    secretary: {
        title: 'Secretary',
        description: [
            'Key communicator for cabinet and members',
            'Write weekly newsletters and manage website',
            'Take meeting minutes ',
            'Ideal for those who are detail-oriented and interested in administrative roles',
        ],
    },
};
export function JoinCabinet() {
    const positions = Object.values(card_content);
    // console.log(positions);

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
