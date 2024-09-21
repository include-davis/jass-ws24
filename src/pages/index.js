import styles from '@/styles/pages/home/home.module.scss';
import { EventsSlider } from '@/components/eventsSlider';
import { Landing } from '@/components/landing';
import { WhoWeAre } from '@/components/whoWeAre';
import Footer from '@/components/footer';

export async function getStaticProps() {
    const home_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/home?_published=true`
    );
    const home_json = await home_res.json();

    const event_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/event?_published=true`
    );
    const event_json = await event_res.json();

    const external_links_res = await fetch(
        `${process.env.HEARTH_CONNECTION_STRING}/external-links?_published=true`
    );
    const external_links_data = await external_links_res.json();

    return {
        props: {
            home: home_json,
            events: event_json,
            external_links: external_links_data.body || [],
        },
    };
}

export default function Home({ home, events, external_links }) {
    const landingData = {
        hero: home.body[0]?.home_hero_image[0].src,
        title: home.body[0]?.home_hero_title,
        description: home.body[0]?.home_hero_description,
    };

    const whoWeAreData = {
        english: home.body[0]?.who_we_are_english,
        japanese: home.body[0]?.who_we_are_japanese,
        constitution_link: home.body[0]?.constitution_link,
    };

    const eventsData = events?.body;

    return (
        <>
            <div className={styles.home}>
                <Landing data={landingData} />
                <WhoWeAre data={whoWeAreData} />
                <EventsSlider events={eventsData} />
            </div>
            <Footer links={external_links} />
        </>
    );
}
