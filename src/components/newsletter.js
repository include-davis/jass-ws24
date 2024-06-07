import React, { useState } from 'react';
import styles from "@/styles/components/newsletter/newsletter.module.scss"
import Image from 'next/image'

const images = {
    image1: '/images/JASSNewsletter1.png',
    image2: '/images/JASSNewsletter2.png',
};

export function Newsletter(){
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <section className={styles.container}>
            <div className={styles.seccontainer}>
                <h1 className={styles.text}>Sign up for our newsletter & stay connected!</h1>
          
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
            </div>

            <div className={styles.imagecontainer}>
                <img src={images.image1} alt="Image 1" className={styles.image} />
                <img src={images.image2} alt="Image 2" className={styles.image} />
            </div>
        </section>
    );
};

export default Newsletter;