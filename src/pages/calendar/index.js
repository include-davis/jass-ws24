import styles from '@/styles/pages/calendar/calendar.module.scss';

export default function Calendar() {
    return (
        <div className={styles.gaegu_regular}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
            </style>
            <div className={styles.calendar_body}>
                <h1>Calendar</h1>
                <br />
                <p>View our calandar to see upcoming events!</p>
                <div className={styles.calendar}>
                    {/* insert calandar here */}
                </div>
            </div>
        </div>
    );
}
