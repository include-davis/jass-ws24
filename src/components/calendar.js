import styles from '@/styles/pages/calendar/calendar.module.scss';

export function CalendarComp() {
    return (
        <div className={styles.gaegu_regular}>
            <div className={styles.calendar_body}>
                <h1>Calendar</h1>
                <br />
                <p>View our calendar to see upcoming events!</p>
                <div className={styles.calendar}>
                    {/* insert calandar here */}
                </div>
            </div>
        </div>
    );
}
