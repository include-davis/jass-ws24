import styles from '@/styles/pages/meetus/meetus.module.scss';
import { MeetUsCard } from '@/components/meetUsCard';

const content = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

export default function MeetUs() {
    return (
        <div>
            <div className={styles.intro}>
                <h1>Meet Us!</h1>
                <p>
                    {content.description}
                </p>
            </div>

            <div className={styles.board}>
                <h1> Meet our Board Members </h1>

                <div className={styles.parent}>
                    <MeetUsCard />
                    <MeetUsCard />
                    <MeetUsCard />

                    <MeetUsCard />
                    <MeetUsCard />
                    <MeetUsCard />

                    <MeetUsCard />
                    <MeetUsCard />
                    <MeetUsCard />
                </div>
            </div>
        </div>
    );
}
