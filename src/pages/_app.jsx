import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/header';
import Footer from '../components/footer';
import { Gaegu } from 'next/font/google';

const gaegu = Gaegu({
    subsets: ['latin'],
    variable: '--font-gaegu',
    weight: ['300', '400', '700'],
});

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{`JASS UCD`}</title>
                <meta
                    name="description"
                    content="​The Japanese American Student Society or JASS (est. 1982) is a student organization at the University of California, Davis with an eye to service, social, and cultural happenings."
                />
                <meta
                    name="keywords"
                    content="ucd, ucdavis, davis, japanese, japanese american, students, community, jass, jassucd, student society, culture, service, social"
                />
            </Head>
            <main className={gaegu.className}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}
