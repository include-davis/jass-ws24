import { EventsSlider } from '@/components/eventsSlider';
import { Landing } from '@/components/landing';
import { WhoWeAre } from '@/components/whoWeAre';

export async function getStaticProps() {
    // const landing_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/homepage?populate=*`
    // );
    // const landing_json = await landing_res.json();
    // // console.log('API response:', landing_json); // Log the API response

    // const event_res = await fetch(
    //     `${process.env.NEXT_PUBLIC_CMS_URL}/api/event-sliders?populate[0]=events&populate[1]=events.event_image`
    // );
    // const event_json = await event_res.json();
    // // console.log(event_json);

    const landing_json = {
        data: {
            attributes: {
                hero_image: {
                    data: {
                        attributes: {
                            formats: {
                                large: {
                                    url: '/images/JASS_LOGO.jpeg',
                                },
                            },
                        },
                    },
                },
                welcome_text: 'Welcome to JASS',
                welcome_description: 'Join us for our next event',
                whoweare_english: 'We are JASS',
                whoweare_japanese: '私たちはJASSです',
                constitution_link: 'https://www.google.com',
            },
        },
    };
    const event_json = {
        data: [
            {
                attributes: {
                    events: [
                        {
                            event_title: 'Event 1',
                            event_description: 'Event 1 description',
                            event_image: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_LOGO.jpeg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            event_title: 'Event 2',
                            event_description: 'Event 2 description',
                            event_image: {
                                data: {
                                    attributes: {
                                        formats: {
                                            large: {
                                                url: '/images/JASS_LOGO.jpeg',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    };

    return {
        props: {
            landing: landing_json.data,
            events: event_json.data,
        },
    };
}

export default function Home({ landing, events }) {
    const data = landing.attributes;

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
    // TODO: figure out how to get all images

    return (
        <>
            <Landing data={welcome} />
            <WhoWeAre data={who} />
            <EventsSlider data={event_slider} />
        </>
    );
}
