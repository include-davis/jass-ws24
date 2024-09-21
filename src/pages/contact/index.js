import { ContactComp } from '@/components/contact';
import Footer from '@/components/footer';

export async function getStaticProps() {
    const external_links_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/external-links?_published=true`
    );
    const external_links_data = await external_links_res.json();

    return {
        props: {
            external_links: external_links_data.body || [],
        },
    };
}

export default function Contact({ external_links }) {
    return (
        <>
            <ContactComp />
            <Footer links={external_links} />
        </>
    );
}
