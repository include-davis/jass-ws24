import styles from "@/styles/components/footer/footer.module.scss"
import jassLogo from './JASS_LOGO.jpeg';
import discLogo from './discordIcon.png';
import instaLogo from './instagramIcon.png';
import fbLogo from './facebookIcon.png';
import emailLogo from './emailIcon.png';

export function Footer() {
  return (
    <div className = {styles.footer}>
      <div className= {styles.footerTop}>

        <div className={styles.footerContent}>
          <div className ={styles.linksOuterFrame}>
            <div className={styles.linksInnerFrame}>
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
          </div>


          <div className={styles.contact}>
            <img className= {styles.image} src = {jassLogo} height="124px" alt="logo" />
            <p>JASS at UC Davis</p>
            <div className = {styles.emailFrame}>
              <img className= {styles.image} src = {emailLogo} height = "24.52px" alt = "emailLogo" />
              <a href="mailto:jassofficers@ucdavis.edu">jassofficers@ucdavis.edu</a>
            </div>
            <div className = {styles.icons}>
              <img className= {styles.image} src = {instaLogo} height="24.52px" alt="instalogo" />
              <img className= {styles.image}src = {fbLogo} height="24.52" alt="fblogo" />
              <img className= {styles.image} src = {discLogo} height="24.52" alt="disclogo" />
            </div>

            {/* Add social media icons here */}
          </div>
        </div>

        <div className = {styles.newsletter}>
          <p className = {styles.title}>Sign up for our newsletter & stay connected!</p>
          <input className = {styles.input} type = "email" placeholder = "Enter email" />
          <button className={styles.submitButton}>Submit</button>
        </div>

      </div>

      <div className={styles.footerBottom}>
          <p className = {styles.creditText}>Made with &#x2661; by #include at Davis &#9426; 2024</p>
      </div>
    </div>
);
}


export default Footer;