import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';
import { EventsCard } from '@/components/eventsCard';

// TODO: get photos for events

export function EventsSlider({ data }) {
    // console.log(data);
    return (
        <div className={styles.pageContainer}>
            {/* <div className={styles.topMargin}></div> */}
            <div className={styles.container}>
                <p className={styles.title}>Join us for our...</p>
                <div className={styles.cardContainer}>
                    {data.map((event) => (
                        <div key={event.id} className={styles.cardWrapper}>
                            <EventsCard
                                title={event.event_title}
                                description={event.event_description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className={styles.bottomMargin}></div> */}
        </div>
    );
}
