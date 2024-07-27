import { Footer } from '@/components/footer';
import { EventsSlider } from '@/components/eventsSlider';
import { Header } from '@/components/header';
import { Landing } from '@/components/landing';
import WhoWeAre from '@/components/whoWeAre';

export async function getStaticProps() {
    const landing_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/homepage?populate=*`
    );
    const landing_json = await landing_res.json();
    // console.log('API response:', landing_json); // Log the API response

    const event_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/event-sliders?populate=*`
    );
    const event_json = await event_res.json();
    // console.log(event_json);

    const footer_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/footer?populate=*`
    );
    const footer_json = await footer_res.json();
    // console.log(footer_json);

    return {
        props: {
            landing: landing_json.data,
            events: event_json.data,
            footer: footer_json.data,
        },
    };
}

export default function Home({ landing, events, footer }) {
    const data = landing.attributes;
    // console.log(data);

    const welcome = {
        hero: data.hero_image.data.attributes.formats.large.url,
        header: data.welcome_text,
        description: data.welcome_description,
    };
    const who = {
        english: data.whoweare_english,
        japanese: data.whoweare_japanese,
        link: data.constitution_link,
    };

    const event_slider = events[0].attributes.events;
    // console.log(event_slider);

    const links = footer.attributes;

    return (
        <div>
            <Header />
            <Landing data={welcome} />
            <WhoWeAre data={who} />
            <EventsSlider data={event_slider} />
            <Footer data={links} />
        </div>
    );
}
