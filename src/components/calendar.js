import styles from '@/styles/pages/calendar/calendar.module.scss';

const content = {
    heading1: 'View our calandar to see upcoming events!',
};
export function CalendarComp() {
    return (
        <div className={styles.gaegu_regular}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
            </style>
            <div className={styles.calendar_body}>
                <h1>Calendar</h1>
                <br />
                <p>{content.heading1}</p>
                <div className={styles.calendar}>
                    {/* insert calandar here */}
                </div>
            </div>
        </div>
    );
}
