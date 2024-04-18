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
            <p>Home</p>
            <p>Calendar</p>
            <p>Meet Us</p>
            <p>Media</p>
            <p>Youtube</p>
            <p>Google Photos</p>
          </div>

          <div className={styles.contact}>
            <p>JASS at UC Davis</p>
            <a href="mailto:jassofficers@ucdavis.edu">jassofficers@ucdavis.edu</a>
            {/* Add social media icons here */}
          </div>
        </div>

        <div className={styles.credit}>
          <p className = {styles.creditText}>Made with &#x2661; by #include at Davis &#9426; 2024</p>
        </div>
      </div>


    );
  }
  