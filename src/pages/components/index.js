import React, { useState } from 'react';
import styles from "@/styles/components/newsletter/newsletter.module.scss"
import image1 from "@/styles/components/newsletter/JASSsocial1.jpeg"; 
import image2 from "@/styles/components/newsletter/JASSsocial2.jpeg";
import image3 from "@/styles/components/newsletter/JASSsocial3.jpeg";

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
            <div className={styles.imageContainer}>
                <img src={image1} alt="Image 1" className={styles.image} />
                <img src={image2} alt="Image 2" className={styles.image} />
                <img src={image3} alt="Image 3" className={styles.image} />
            </div>
        </section>
    );
};

export default newsletter;
