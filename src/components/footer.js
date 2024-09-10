import styles from '@/styles/components/footer/footer.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';

const images = {
    discLogo: '/images/discordIcon.png',
    emailLogo: '/images/emailIcon.png',
    fbLogo: '/images/facebookIcon.png',
    instaLogo: '/images/instagramIcon.png',
    jassLogo: '/images/JASS_LOGO.jpeg',
};

export function Footer({ data }) {
    const router = useRouter();
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerContent}>
                    <div className={styles.contact}>
                        <Image
                            className={styles.image}
                            src={images.jassLogo}
                            height="124"
                            width="124"
                            alt="logo"
                        />
                        <p>JASS at UC Davis</p>
                        <div className={styles.emailFrame}>
                            <Image
                                className={styles.image}
                                src={images.emailLogo}
                                width={24.52}
                                height={24.52}
                                alt="emailLogo"
                            />
                            <a
                                href="mailto:jassofficers@ucdavis.edu"
                                id="email"
                            >
                                jassofficers@ucdavis.edu
                            </a>
                        </div>
                        <div className={styles.icons}>
                            <Image
                                className={styles.image}
                                src={images.instaLogo}
                                width={24.52}
                                height={24.52}
                                alt="instalogo"
                                onClick={() => {
                                    window.open(
                                        `${data.instagram_link}`,
                                        '_blank'
                                    );
                                }}
                            />
                            <Image
                                className={styles.image}
                                src={images.fbLogo}
                                width={24.52}
                                height={24.52}
                                alt="fblogo"
                                onClick={() => {
                                    window.open(
                                        `${data.facebook_link}`,
                                        '_blank'
                                    );
                                }}
                            />
                            <Image
                                className={styles.image}
                                src={images.discLogo}
                                width={24.52}
                                height={24.52}
                                alt="disclogo"
                                onClick={() => {
                                    window.open(
                                        `${data.discord_link}`,
                                        '_blank'
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.linksInnerFrame}>
                        <div className={styles.linksLeft}>
                            <p
                                className={styles.link}
                                style={{ fontWeight: '900' }}
                                onClick={() => {
                                    router.push('/');
                                }}
                            >
                                Home
                            </p>
                            <p
                                className={styles.link}
                                onClick={() => {
                                    router.push('/calendar');
                                }}
                            >
                                Calendar
                            </p>
                            <p
                                className={styles.link}
                                onClick={() => {
                                    router.push('/meet-us');
                                }}
                            >
                                Meet Us
                            </p>
                            <p
                                className={styles.link}
                                onClick={() => {
                                    router.push('/join-us');
                                }}
                            >
                                Join Our Cabinet
                            </p>
                        </div>
                        <div className={styles.linksRight}>
                            <p
                                className={styles.link}
                                style={{ fontWeight: '900' }}
                            >
                                Media
                            </p>
                            <p className={styles.link}>
                                <a
                                    href={
                                        data?.youtube_link ||
                                        'https://www.youtube.com/channel/UCoS3lPl549qRKaRcUC_TP3w'
                                    }
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Youtube
                                </a>
                            </p>
                            <p className={styles.link}>
                                <a
                                    href={
                                        data?.gphotos_link ||
                                        'https://photos.app.goo.gl/Cj5QHG2k3EkVacES8'
                                    }
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Google Photos
                                </a>
                            </p>
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
