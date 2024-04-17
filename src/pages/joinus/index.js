import styles from "@/styles/pages/joinus/joinus.module.scss";


const Card = ({ title, description }) => (
  <div className={styles.card}>
    <div className={styles.innerBox}></div>
    <div className={styles.cardContent}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
);

  
export default function JoinUs() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <p className={styles.title}>Join us for our...</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="General Meetings"
            description="Every Thursday at 7pm we have fun activities, slices of Japanese culture, and information about upcoming events!"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Service & Social Events"
            description="Find opportunities to help the community as well as taking part in fun group events!"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Big/Little System"
            description="Take part in our Big/Little program and Family System to create even closer friendships within the club!"
          />
        </div>
      </div>
    </div>
  );
}