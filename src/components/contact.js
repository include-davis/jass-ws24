import styles from '@/styles/pages/contact/contact.module.scss';
import { useState } from 'react';

// //i can create my own styles for the submit button 
// //I need to also add colors it doesnt matter too much

// //create a little more space between name and email text boxes. increase margin - done

// //create json objects for texts on left side  - done

// const textContent = {
//     text1: {
//         title: "Get In Touch With Us",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elitm sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     }
// }

// export function Contact() {
//     return (
//         <>
//             <div className={styles.main}>
//                 <div className={styles.contactContainer}>
//                     <div className={styles.leftSection}>
//                         <div id="contact-us">
//                             <h1 className={styles.contactTitle}>Get In Touch With Us!</h1>
//                             <p className={styles.contactText}>Lorem ipsum dolor sit amet consectetur<br />
//                                 adipiscing elit, sed do eiusmod tempor<br />
//                                 incididunt ut labore et dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div className={styles.rightSection}>
//                         <div id="container">
//                             <h1 className={styles.contactForm}>Contact Form</h1>

//                             <div className={styles.inputRow}>
//                                 <div className={styles.inputContainer}>
//                                     <label htmlFor="name" className={styles.label}>Name</label>

//                                     <input type="text" id="name" name="name" className={`${styles.inputText} ${styles.nameInput}`} />
//                                 </div>

//                                 <div className={styles.inputContainer}>
//                                     <label htmlFor="email" className={styles.label}>Email</label>
//                                     <input type="text" id="email" name="email" className={`${styles.inputText} ${styles.emailInput}`} />
//                                 </div>
//                             </div>

//                             <br></br>
//                             <div className={styles.inputContainer}>
//                                 <label htmlFor="subject" className={styles.label}>Subject</label>
//                                 <input type="text" id="subject" name="subject" className={`${styles.inputText} ${styles.subjectInput}`} />
//                             </div>
//                             <br></br>

//                             <div className={styles.inputContainer}>
//                                 <label htmlFor="textbook" className={styles.label}>Textbook</label>
//                                 {/*ensure text */}
//                                 {/*<input type="text" id="textbook" name="textbook" className={`${styles.inputText} ${styles.textbookInput}`} /> */}
//                                 <textarea style={{ verticalAlign: 'top' }} id="textbook" name="textbook" className={`${styles.inputText} ${styles.textbookInput}`} />
//                             </div>

//                             <div className={styles.submitButton}>
//                                 <button type="submit" id="submitButton" name="submit">Submit</button>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

//}
export function Contact() {
    return (
        <>
        <div className={styles.main}></div>
            <div id="contact-us">
                <h1 className={styles.contactTitle}>Contact Us</h1>
                    <p className={styles.contactText}>Have questions or comments for JASS? Please fill out this form and <br/>we'll get back to you as soon as possible</p>
                <h2 className={styles.contactField}>* = required field</h2>


                <div id="form">
                    <label htmlFor="name" className={styles.label}>Name *</label>
                    <input type="text" id="name" name="name" className={`${styles.inputText} ${styles.nameInput}`} />

                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input type="text" id="email" name="email" className={`${styles.inputText} ${styles.emailInput}`} />
                  <br></br>

                    <label htmlFor="subject" className={styles.label}>Subject *</label>
                    <input type="text" id="subject" name="subject" className={`${styles.inputText} ${styles.subjectInput}`} />

                    <br></br>

                    <label htmlFor="message" className={styles.label}>Your Message *</label>
                    <input type="text" id="message" name="message" className={`${styles.inputText} ${styles.messageInput}`} />

                    <br></br>

                    <button type="submit" className="submitButton">Submit</button>

                    
                    



                </div>
            
            </div> 



            


        
        </>
    )
}
