import Navbar from './header';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                <Head>
                    <title>{`JASS UCD`}</title>
                    <meta type="description" />
                </Head>
                {children}
            </main>
            <Footer />
        </>
    );
}
