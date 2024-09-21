import Footer from '@/components/footer';
import styles from '@/styles/pages/calendar/calendar.module.scss';

export async function getStaticProps() {
    const calendar_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/calendar?_published=true`
    );
    const calendar_json = await calendar_res.json();

    const external_links_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/external-links?_published=true`
    );
    const external_links_data = await external_links_res.json();

    return {
        props: {
            calendar: calendar_json,
            external_links: external_links_data.body || [],
        },
    };
}

export default function Calendar({ calendar, external_links }) {
    return (
        <>
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
            <Footer links={external_links} />
        </>
    );
}
