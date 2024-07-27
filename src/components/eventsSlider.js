import React from 'react';
import styles from '@/styles/pages/joinus/joinus.module.scss';
import { EventsCard } from '@/components/eventsCard';

const content = {
    card1: {
        title: 'General Meeting',
        description:
            'Every Thursday at 7pm we have fun activities, slices of Japanese culture, and information about upcoming events!',
    },
    card2: {
        title: 'Service & Social Events',
        description:
            'Find opportunities to help the community as well as taking part in fun group events!',
    },
    card3: {
        title: 'Big/Little System',
        description:
            'Take part in our Big/Little program and Family System to create even closer friendships within the club!',
    },
};

export function EventsSlider({ data }) {
    console.log(data);
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
