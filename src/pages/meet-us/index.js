import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';

const content = {
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const boardMembers = [
    { name: 'First Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Second Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Third Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Fourth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Fifth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Sixth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    {
        name: 'Seventh Last',
        pronouns: 'pronouns/pronouns',
        position: 'Position',
        major: 'Major',
        year: 'Year',
    },
    { name: 'Eighth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    { name: 'Nineth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'Major', year: 'Year' },
    // Add more board members as needed
];

export default function MeetUs() {
    return (
        <div>
            <div className={styles.intro}>
                <h1>Meet Us!</h1>
                <p>{content.description}</p>
            </div>

            <div className={styles.board}>
                <h1> Meet our Board Members </h1>

                <div className={styles.parent}>
                    {boardMembers.map((member, index) => (
                        <MeetUsCard
                            key={index}
                            name={member.name}
                            pronouns={member.pronouns}
                            position={member.position}
                            major={member.major}
                            year={member.year}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
