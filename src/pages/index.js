import { Footer } from '@/components/footer';
import { EventsSlider } from '@/components/eventsSlider';
import { Newsletter } from '@/components/newsletter';
import { Header } from '@/components/header';
import { Landing } from '@/components/landing';

export default function Home() {
    return (
        <div>
            <Header />
            <Landing />
            <Newsletter />
            <EventsSlider />
            <Footer />
        </div>
    );
}
