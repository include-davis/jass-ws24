import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';

const content = {
    description:
        'Get to know our 2023-2024 Cabinet Members!',
};

const boardMembers = [
    { name: 'First Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Second Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Third Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Fourth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Fifth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Sixth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    {
        name: 'Seventh Last',
        pronouns: 'pronouns/pronouns',
        position: 'Position',
        major: 'x major',
        year: 'x year',
    },
    { name: 'Eighth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Nineth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Tenth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Eleventh Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    { name: 'Twelveth Last', pronouns: 'pronouns/pronouns', position: 'Position', major: 'X major', year: 'X year' },
    // Add more board members as needed
];

export default function MeetUs() {
    return (
        <div>

            <div className={styles.board}>

                <div className={styles.intro}>
                    <div>
                        <p> insert image here</p>
                        <img/>
                    </div>
                </div>

                <h1> Meet Us </h1>
                <p>{content.description}</p>

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
