import styles from "@/styles/pages/contact/contact.module.scss"
import { useState } from 'react'



const textContent = {
    text1: {
        title: "Contact Us",
        description: "Have questions or comments for JASS? Please fill out this form and we'll get back to you as soon as possible"
    }
}
export function Contact() {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject, setSubject] = useState('');


    return (
        <>
        <div className={styles.main}></div>
            <div id="contact-us" className={styles.contactContainer}>
                <h1 className={styles.contactTitle}>Contact Us</h1>
                    <p className={styles.contactText}>Have questions or comments for JASS? Please fill out this form and <br/>we'll get back to you as soon as possible</p>
                <h2 className={styles.contactField}><span className={styles.asterickRed}>*</span> = required field</h2>


                <div id="form">
                    <div className={styles.goSide}>
                    <div className={styles.goUnder}>
                    <label htmlFor="name" className={styles.label}>Name <span className={styles.asteriskRed}>*</span></label>
                    <input type="text" id="name" name="name" className={`${styles.inputText} ${styles.inputCentered} ${styles.nameInput}`} value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"/>
                    </div>


                    <div className={`${styles.goUnder} ${styles.spacingBetweenFields}`}>
                    <label htmlFor="email" className={styles.label}>Email Address <span className={styles.asteriskRed}>*</span></label>
                    <input type="text" id="email" name="email" className={`${styles.inputText} ${styles.inputCentered} ${styles.emailInput}`} 
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Email"/>
                    
                    
                    </div>
                    </div>
                  
                    <div className={styles.goUnder}>
                    <label htmlFor="subject" className={styles.label}>Subject <span className={styles.asteriskRed}>*</span></label>
                    <input type="text" id="subject" name="subject" className={`${styles.inputText} ${styles.inputCentered}${styles.subjectInput}`}
                    value={subject}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="I have a question or comment about..."/>
                    </div>

                    
                    <div className={styles.goUnder}>
                    <label htmlFor="message" className={styles.label}>Your Message <span className={styles.asteriskRed}>*</span></label>
                    <input type="textarea" id="message" name="message" className={`${styles.inputText} ${styles.inputCentered} ${styles.messageInput}`} />
                    </div>

                    <br></br>

                    <div className={styles.submitButtonContainer}>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </div>




                    
                    



                </div>
            
            </div> 



            


        
        </>
    )
}