import React, { useState } from 'react';
import styles from "@/styles/components/newsletter/newsletter.module.scss"

const newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <section className={styles.container}>
          <div className={styles.section}></div>
            <h1 className={styles.text}>Sign up for our newsletter</h1>
            <h1 className={styles.text}>& stay connected!</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>

            
        </section>
    );
};

export default newsletter;
