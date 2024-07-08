import styles from '@/styles/components/footer/footer.module.scss';

const images = {
    discLogo: '/images/discordIcon.png',
    emailLogo: '/images/emailIcon.png',
    fbLogo: '/images/facebookIcon.png',
    instaLogo: '/images/instagramIcon.png',
    jassLogo: '/images/JASS_LOGO.jpeg',
};

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerContent}>
                    <div className={styles.contact}>
                        <img
                            className={styles.image}
                            src={images.jassLogo}
                            height="124px"
                            width="124px"
                            alt="logo"
                        />
                        <p>JASS at UC Davis</p>
                        <div className={styles.emailFrame}>
                            <img
                                className={styles.image}
                                src={images.emailLogo}
                                height="24.52px"
                                alt="emailLogo"
                            />
                            <a href="mailto:jassofficers@ucdavis.edu">
                                jassofficers@ucdavis.edu
                            </a>
                        </div>
                        <div className={styles.icons}>
                            <img
                                className={styles.image}
                                src={images.instaLogo}
                                height="24.52px"
                                alt="instalogo"
                            />
                            <img
                                className={styles.image}
                                src={images.fbLogo}
                                height="24.52"
                                alt="fblogo"
                            />
                            <img
                                className={styles.image}
                                src={images.discLogo}
                                height="24.52"
                                alt="disclogo"
                            />
                        </div>

                        {/* Add social media icons here */}
                    </div>
                    <div className={styles.linksOuterFrame}>
                        <div className={styles.linksInnerFrame}>
                            <div className={styles.linksLeft}>
                                <p className={styles.link}>Home</p>
                                <p className={styles.link}>Calendar</p>
                                <p className={styles.link}>Meet Us</p>
                                <p className={styles.link}>Join Our Cabinet</p>
                            </div>
                            <div className={styles.linksRight}>
                                <p className={styles.link}>Media</p>
                                <p className={styles.link}>Youtube</p>
                                <p className={styles.link}>Google Photos</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.newsletter}>
                        <p className={styles.title}>
                            Sign up for our newsletter & stay connected!
                        </p>
                        <div className={styles.interactive}>
                            <div className={styles.inputWrapper}>
                                <input
                                    className={styles.input}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <button className={styles.submitButton}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.creditText}>
                    Made with &#x2661; by #include at Davis &#9426; 2024
                </p>
            </div>
        </div>
    );
}
