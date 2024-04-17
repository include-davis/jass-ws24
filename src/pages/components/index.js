import styles from "@/styles/components/footer/footer.module.scss"

export default function Footer() {
    return (
      <div className = {styles.footer}>
        <div className= {styles.footerTop}>
          <div className = {styles.newsletter}>
            <h1 className = {styles.title}>Sign up for our newsletter & stay connected!</h1>
            <input className = {styles.input} type = "email" placeholder = "Enter email" />
            <button className={styles.submitButton}>Submit</button>
          </div>
          <div className={styles.links}>
            <p className={styles.link}>Home</p>
            <p className={styles.link}>Calendar</p>
            <p className={styles.link}>Meet Us</p>
            <p className={styles.link}>Media</p>
            <p className={styles.link}>Youtube</p>
            <p className={styles.link}>Google Photos</p>
          </div>
          <div className={styles.contact}>
            <p>JASS at UC Davis</p>
            <a href="mailto:jassofficers@ucdavis.edu">jassofficers@ucdavis.edu</a>
            {/* Add social media icons here */}
          </div>
        </div>



        <div className={styles.credit}>
          <p className = {styles.creditText}>Made with love by #include at Davis c 2024</p>
        </div>
      </div>

    );
  }
  