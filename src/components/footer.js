import styles from '@/styles/components/footer/footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/footer/links.json';

const images = {
    discLogo: '/images/discordIcon.png',
    emailLogo: '/images/emailIcon.png',
    fbLogo: '/images/facebookIcon.png',
    instaLogo: '/images/instagramIcon.png',
    jassLogo: '/images/JASS_LOGO.jpeg',
};

export default function Footer() {
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
                        <div className={styles.contactInfo}>
                            <p className={styles.contactHeader}>
                                JASS at UC Davis
                            </p>
                            <div className={styles.emailFrame}>
                                <Image
                                    className={styles.image}
                                    src={images.emailLogo}
                                    width={24.52}
                                    height={24.52}
                                    alt="emailLogo"
                                />
                                <a
                                    href={`mailto:${data.jass_email}`}
                                    id="email"
                                >
                                    {data.jass_email}
                                </a>
                            </div>
                            <div className={styles.icons}>
                                <a
                                    href={`${data.instagram_link}`}
                                    target="_blank"
                                >
                                    <Image
                                        className={styles.image}
                                        src={images.instaLogo}
                                        width={24.52}
                                        height={24.52}
                                        alt="instalogo"
                                    />
                                </a>
                                <a
                                    href={`${data.facebook_link}`}
                                    target="_blank"
                                >
                                    <Image
                                        className={styles.image}
                                        src={images.fbLogo}
                                        width={24.52}
                                        height={24.52}
                                        alt="fblogo"
                                    />
                                </a>
                                <a
                                    href={`${data.discord_link}`}
                                    target="_blank"
                                >
                                    <Image
                                        className={styles.image}
                                        src={images.discLogo}
                                        width={24.52}
                                        height={24.52}
                                        alt="disclogo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.linksInnerFrame}>
                        <div className={styles.linksLeft}>
                            <Link
                                href="/"
                                className={styles.link}
                                style={{ fontWeight: '900' }}
                            >
                                {' '}
                                Home
                            </Link>
                            <Link href="/calendar" className={styles.link}>
                                Calendar
                            </Link>
                            <Link href="/meet-us" className={styles.link}>
                                Meet Us
                            </Link>
                            <Link href="/join-us" className={styles.link}>
                                Join Our Cabinet
                            </Link>
                        </div>
                        <div className={styles.linksRight}>
                            <p
                                className={styles.link}
                                style={{ fontWeight: '900' }}
                            >
                                Media
                            </p>
                            <p>
                                <a
                                    className={styles.link}
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
                            <p>
                                <a
                                    className={styles.link}
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
