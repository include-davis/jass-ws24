import styles from "@/styles/pages/joinus/joinus.module.scss";


const Card1 = () => (
    <div className={styles.card}>
      <div className={styles.innerBox}></div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>General Meetings</p>
        <p className={styles.cardDescription}>Every Thursday at 7pm we have fun activities, slices of Japanese culture, and information about upcoming events!</p>
      </div>
    </div>
  );
  
  const Card2 = () => (
    <div className={styles.card}>
      <div className={styles.innerBox}></div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Service & Social Events</p>
        <p className={styles.cardDescription}>Find opportunities to help the community as well as taking part in fun group events!</p>
      </div>
    </div>
  );
  
  const Card3 = () => (
    <div className={styles.card}>
      <div className={styles.innerBox}></div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Big/Little System</p>
        <p className={styles.cardDescription}>Take part in our Big/Little program and Family System to create even closer friendships within the club!</p>
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
            <Card1 />
          </div>
          <div className={styles.cardWrapper}>
            <Card2 />
          </div>
          <div className={styles.cardWrapper}>
            <Card3 />
          </div>
        </div>
      </div>
    );
  }