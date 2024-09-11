import styles from '@/styles/pages/joinus/joinus.module.scss';
import { EventsCard } from '@/components/eventsCard';
import { useState, useRef } from 'react';
import { Dots } from './dots';

// TODO: get photos for events

// data -> event
// event.id
// event.event_title
// event.event_description
// event.event_image.data.attributes.formats.large.url

export function EventsSlider({ data }) {
    const [eventIndex, setEventIndex] = useState(0);
    const eventRef = useRef(null);

    const handleScroll = () => {
        if (eventRef.current) {
            const { scrollLeft, offsetWidth } = eventRef.current;
            const curEventIndex = Math.round(scrollLeft / offsetWidth);
            setEventIndex(curEventIndex);
        }
    };

    return (
        <div className={styles.joinUs}>
            <h1 className={styles.header}>Join us for our...</h1>
            <div className={styles.eventContainer}>
                <div
                    className={styles.eventCards}
                    ref={eventRef}
                    onScroll={handleScroll}
                >
                    {data.map((event) => {
                        return (
                            <EventsCard
                                key={event.id}
                                title={event.event_title}
                                description={event.event_description}
                                photo={
                                    event.event_image.data.attributes.formats
                                        .large.url
                                }
                            />
                        );
                    })}
                </div>
                <Dots numDots={data.length} curCard={eventIndex} />
            </div>
        </div>
    );
}
