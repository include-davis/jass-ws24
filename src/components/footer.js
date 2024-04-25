import styles from "@/styles/components/footer/footer.module.scss"


export function Footer() {
  return (
    <div className = {styles.footer}>
      <div className= {styles.footerTop}>
        <div className = {styles.newsletter}>
          <p className = {styles.title}>Sign up for our newsletter & stay connected!</p>
          <input className = {styles.input} type = "email" placeholder = "Enter email" />
          <button className={styles.submitButton}>Submit</button>
        </div>

        <div className={styles.footerContent}>
          <div className={styles.links}>
            <div className = {styles.linksLeft}>
              <p className= {styles.link}>Home</p>
              <p className= {styles.link}>Calendar</p>
              <p className= {styles.link}>Meet Us</p>
              <p className= {styles.link}>Join Our Cabinet</p>
            </div>
            <div className= {styles.linksRight}>
              <p className= {styles.link}>Media</p>
              <p className= {styles.link}>Youtube</p>
              <p className= {styles.link}>Google Photos</p>
            </div>
          </div>

          <div className={styles.contact}>
            <p>JASS at UC Davis</p>
            <a href="mailto:jassofficers@ucdavis.edu">jassofficers@ucdavis.edu</a>
            {/* Add social media icons here */}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
          <p className = {styles.creditText}>Made with &#x2661; by #include at Davis &#9426; 2024</p>
      </div>
    </div>
);
}


export default Footer;