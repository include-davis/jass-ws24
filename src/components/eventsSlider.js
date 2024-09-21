import styles from '@/styles/pages/joinus/joinus.module.scss';
import { EventsCard } from '@/components/eventsCard';
import { useState, useRef } from 'react';
import { Dots } from './dots';

export function EventsSlider({ events }) {
    const [eventIndex, setEventIndex] = useState(0);
    const eventRef = useRef(null);

    events = events.map((event) => {
        return {
            ...event,
            display_order: Number(event.display_order),
        };
    });

    events = events.sort((a, b) => +a.display_order - +b.display_order);

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
                    {events.map((event) => {
                        return (
                            <EventsCard
                                key={event._id}
                                title={event.event_title}
                                description={event.event_description}
                                photo={event.event_image[0].src}
                            />
                        );
                    })}
                </div>
                <Dots numDots={events.length} curCard={eventIndex} />
            </div>
        </div>
    );
}
