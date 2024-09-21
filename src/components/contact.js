import styles from '@/styles/pages/contact/contact.module.scss';
import { useState, useRef } from 'react';
import ConfirmationModal from './confirmationModal';

// const textContent = {
//     text1: {
//         title: 'Contact Us',
//         description:
//             "Have questions or comments for JASS? Please fill out this form and we'll get back to you as soon as possible",
//     },
// };
export function ContactComp() {
    const [mailStatus, setMailStatus] = useState('');
    const [pending, setPending] = useState(false);
    const formRef = useRef(null);

    const resetState = () => {
        setPending(false);
        setMailStatus('');
    };

    const formHandler = async (e) => {
        setPending(true);
        e.preventDefault();

        const data = new FormData(e.target);
        // console.log(data);
        const values = Object.fromEntries(data.entries());
        console.log(values);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json',
                },
                body: JSON.stringify(values),
            });
            const resData = await res.json();
            if (!resData.ok) {
                throw new Error(resData.error);
            }
            setMailStatus('success');
        } catch (e) {
            setMailStatus('failed');
        }

        setPending(false);
        formRef.current.reset();
    };

    return (
        <>
            <div className={styles.main}></div>
            <div id="contact-us" className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <h1 className={styles.contactTitle}>Contact Us</h1>
                    <p className={styles.contactText}>
                        Have questions or comments for JASS? Please fill out
                        this form and we'll get back to you as soon as possible.
                    </p>
                    <h2 className={styles.contactField}>
                        <span className={styles.asteriskRed}>*</span> = required
                        field
                    </h2>
                </div>

                <form
                    ref={formRef}
                    onSubmit={formHandler}
                    style={{ width: '100%' }}
                >
                    <div className={styles.goSide}>
                        <div
                            className={`${styles.goUnder} ${styles.nameInput}`}
                        >
                            <label htmlFor="name" className={styles.label}>
                                Name{' '}
                                <span className={styles.asteriskRed}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`${styles.inputText} ${styles.inputCentered}`}
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div
                            className={`${styles.goUnder} ${styles.spacingBetweenFields} ${styles.emailInput}`}
                        >
                            <label htmlFor="email" className={styles.label}>
                                Email Address{' '}
                                <span className={styles.asteriskRed}>*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className={`${styles.inputText} ${styles.inputCentered}`}
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.goUnder}>
                        <label htmlFor="subject" className={styles.label}>
                            Subject{' '}
                            <span className={styles.asteriskRed}>*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={`${styles.inputText} ${styles.subjectInput}`}
                            placeholder="I have a question or comment about..."
                        />
                    </div>

                    <div className={styles.goUnder}>
                        <label htmlFor="message" className={styles.label}>
                            Your Message{' '}
                            <span className={styles.asteriskRed}>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className={`${styles.inputText} ${styles.messageInput}`}
                        />
                    </div>

                    <br></br>

                    <div className={styles.submitButtonContainer}>
                        <button
                            type="submit"
                            href="/contact"
                            className={styles.submitButton}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <ConfirmationModal
                pending={pending}
                mailStatus={mailStatus}
                handleClose={resetState}
            />
        </>
    );
}
