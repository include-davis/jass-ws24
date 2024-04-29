import React from "react";
import styles from "@/styles/pages/joinus/joinus.module.scss";
import { EventsCard } from "@/components/eventsCard";

const content = {
    card1: {
        title: "General Meeting",
        description: "Every Thursday at 7pm we have fun activities, slices of Japanese culture, and information about upcoming events!",
    },
    card2: {
        title: "Service & Social Events",
        description: "Find opportunities to help the community as well as taking part in fun group events!",
    },
    card3: {
        title: "Big/Little System",
        description: "Take part in our Big/Little program and Family System to create even closer friendships within the club!",
    }
}

export function EventsSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <p className={styles.title}>Join us for our...</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <EventsCard
            title= {content.card1.title}
            description= {content.card1.description}
          />
        </div>
        <div className={styles.cardWrapper}>
          <EventsCard
            title = {content.card2.title}
            description= {content.card2.description}
          />
        </div>
        <div className={styles.cardWrapper}>
          <EventsCard
            title= {content.card3.title}
            description= {content.card3.description}
          />
        </div>
      </div>
    </div>
  );
}