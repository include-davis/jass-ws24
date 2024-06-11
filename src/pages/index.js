import { Footer } from '@/components/footer';
import { EventsSlider } from '@/components/eventsSlider';
import { Newsletter } from '@/components/newsletter';
import { Header } from '@/components/header';
import { Landing } from '@/components/landing';
import WhoWeAre from '@/components/whoWeAre';

export default function Home() {
    return (
        <div>
            <Header />
            <Landing />
            <WhoWeAre />
            <Newsletter />
            <EventsSlider />
            <Footer />
        </div>
    );
}
