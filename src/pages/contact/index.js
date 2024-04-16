
import styles from "@/styles/pages/contact/contact.module.scss"


export default function Contact() {
  return (
    <><body id="whole">
      <div className={styles.contactContainer}>
      <div className={styles.leftSection}>
      <div id="contact-us">
        <h1 className={styles.contactTitle}>Get In Touch With Us!</h1>
        <p className={styles.contactText}>Lorem ipsum dolor sit amet consectetur<br />
          adipiscing elit, sed do eiusmod tempor<br />
          incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      


      <div className={styles.rightSection}>
      <div id="container">
        <h1 className={styles.contactForm}>Contact Form</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <br></br>

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <br></br>

        <label htmlFor="textbook">Textbook</label>
        <input type="text" id="textbook" name="textbook" />





      </div>
      </div>

      </div>

    </body>



    </>


  );
}
  