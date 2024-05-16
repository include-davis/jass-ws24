import { Footer } from '@/components/footer';
import { EventsSlider } from '@/components/eventsSlider';
import { Newsletter } from '@/components/newsletter';
import Header from '@/components/header';

export default function Home() {
    return (
        <div>
            <Header />
            <Newsletter />
            <EventsSlider />
            <Footer />
        </div>
    );
}
