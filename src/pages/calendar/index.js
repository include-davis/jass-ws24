import styles from '@/styles/pages/calendar/calendar.module.scss';

export async function getStaticProps() {
    const calendar_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/calendar`
    );
    const calendar_json = await calendar_res.json();

    return {
        props: {
            calendar: calendar_json,
        },
    };
}

export default function Calendar({ calendar }) {
    return (
        <div className={styles.calendarPage}>
            <div className={styles.calendarText}>
                <h1>Calendar</h1>
                <p>View our calendar to see the upcoming events!</p>
            </div>
            <div className={styles.calendarContainer}>
                <iframe
                    className={styles.calendar}
                    src={calendar?.body[0]?.calendar_link}
                />
            </div>
        </div>
    );
}
