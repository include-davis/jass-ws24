import styles from "@/styles/pages/contact/contact.module.scss"

export function Contact () {
    return (
        <>
            <div className={styles.main}>
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

                <div className={styles.inputRow}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name" className={styles.label}>Name</label>
            
                    <input type="text" id="name" name="name"  className={`${styles.inputText} ${styles.nameInput}`} />
                </div>



            <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="text" id="email" name="email"  className={`${styles.inputText} ${styles.emailInput}`} />
            </div>
            </div>



            <br></br>
            <div className={styles.inputContainer}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input type="text" id="subject" name="subject" className={`${styles.inputText} ${styles.subjectInput}`} />
            </div>
            <br></br>

            <div className={styles.inputContainer}>
            <label htmlFor="textbook" className={styles.label}>Textbook</label>
            {/*ensure text */}
            {/*<input type="text" id="textbook" name="textbook" className={`${styles.inputText} ${styles.textbookInput}`} /> */}
            <textarea style={{ verticalAlign: 'top' }} id="textbook" name="textbook" className={`${styles.inputText} ${styles.textbookInput}`} />
            </div>





        </div>
        </div>

        </div>

        </div>



    </>
    );
}