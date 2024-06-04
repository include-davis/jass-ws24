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
const position = {
    socialtitle: 'Social Chairs (2)',
    socialbullet1: 'Organize large socials like Ski & Beach Trip',
    socialbullet2: 'Involved in long-term event planning',
    socialbullet3: 'Work with Treasurer to decide budgets',
    socialbullet4:
        'Ideal for those who enjoy proactive planning and creating memorable events',
    servicetitle: 'Service Chairs (2)',
    servicebullet1:
        'Plan volunteer events and collaborate with Japanese American Citizen’s League',
    servicebullet2:
        'Lead events such as Relay for Life, Remembrance Day, and Picnic Day',
    servicebullet3: 'Ideal for those interested in community service',
    familytitle: 'Family Coordinators (2)',
    familybullet1: 'Manage the Family & Big/Little Program',
    familybullet2:
        'Organize family events and competitions (e.g., Reveal Night, Family Picnics)',
    familybullet3:
        'Ideal for those with a welcoming nature and who enjoy fostering new friendships',
    sportstitle: 'Sports Coordinator',
    sportsbullet1:
        'Plan active events and manage IM sports teams through the Davis IM system',
    sportsbullet2:
        'Responsible for sports equipment and maintaining sports-related social media',
    sportsbullet3: 'Best for those interested in sports and athletics',
    historiantitle: 'Historian',
    historianbullet1:
        'Capture memories through photography and videography at events',
    historianbullet2: 'Organize the end-of-year Banquet event',
    historianbullet3:
        'Suited for those interested in photography and documenting memorable moments',
    publicitytitle: 'Publicity',
    publicitybullet1: 'Publicize JASS on campus and at events',
    publicitybullet2: 'Manage advertising materials and tabling',
    publicitybullet3: 'First point of contact for prospective members',
    publicitybullet4:
        'Ideal for those passionate about marketing and promoting JASS',
    treasurertitle: 'Treasurer',
    treasurerbullet1: 'Manage all financial aspects of JASS',
    treasurerbullet2: 'Advise on budgeting for events',
    treasurerbullet3: 'Handle reimbursements and payments',
    treasurerbullet4:
        'Suitable for those interested in economics or financial management',
    secretarytitle: 'Secretary',
    secretarybullet1: 'Key communicator for cabinet and members',
    secretarybullet2: 'Write weekly newsletters and manage website',
    secretarybullet3: 'Take meeting minutes ',
    secretarybullet4:
        'Ideal for those who are detail-oriented and interested in administrative roles',
};
export function JoinCabinet() {
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
                    <CabinetCard
                        position={position.socialtitle}
                        bullet1={position.socialbullet1}
                        bullet2={position.socialbullet2}
                        bullet3={position.socialbullet3}
                        bullet4={position.socialbullet4}
                    />
                    <CabinetCard
                        position={position.servicetitle}
                        bullet1={position.servicebullet1}
                        bullet2={position.servicebullet2}
                        bullet3={position.servicebullet3}
                    />
                    <CabinetCard
                        position={position.familytitle}
                        bullet1={position.familybullet1}
                        bullet2={position.familybullet2}
                        bullet3={position.familybullet3}
                    />
                    <CabinetCard
                        position={position.sportstitle}
                        bullet1={position.sportsbullet1}
                        bullet2={position.sportsbullet2}
                        bullet3={position.sportsbullet3}
                    />
                    <CabinetCard
                        position={position.historiantitle}
                        bullet1={position.historianbullet1}
                        bullet2={position.historianbullet2}
                        bullet3={position.historianbullet3}
                    />
                    <CabinetCard
                        position={position.publicitytitle}
                        bullet1={position.publicitybullet1}
                        bullet2={position.publicitybullet2}
                        bullet3={position.publicitybullet3}
                        bullet4={position.publicitybullet4}
                    />
                    <CabinetCard
                        position={position.treasurertitle}
                        bullet1={position.treasurerbullet1}
                        bullet2={position.treasurerbullet2}
                        bullet3={position.treasurerbullet3}
                        bullet4={position.treasurerbullet4}
                    />
                    <CabinetCard
                        position={position.secretarytitle}
                        bullet1={position.secretarybullet1}
                        bullet2={position.secretarybullet2}
                        bullet3={position.secretarybullet3}
                        bullet4={position.secretarybullet4}
                    />
                </div>
            </div>
        </div>
    );
}
