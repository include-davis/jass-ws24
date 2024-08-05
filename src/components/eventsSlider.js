import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';
import { EventsCard } from '@/components/eventsCard';

// TODO: get photos for events

export function EventsSlider({ data }) {
    console.log(data);
    return (
        <div className={styles.pageContainer}>
            {/* <div className={styles.topMargin}></div> */}
            <div className={styles.container}>
                <h1 className={styles.title}>Join us for our...</h1>
                <div className={styles.cardContainer}>
                    {data.map((event) => (
                        <div key={event.id} className={styles.cardWrapper}>
                            <EventsCard
                                title={event.event_title}
                                description={event.event_description}
                                photo={
                                    event.event_image.data.attributes.formats
                                        .large.url
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className={styles.bottomMargin}></div> */}
        </div>
    );
}
