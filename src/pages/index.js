import { Footer } from '@/components/footer';
import { EventsSlider } from "@/components/eventsSlider";
import {Newsletter} from '@/components/newsletter'

export default function Home() {
    return (
        <div>
            <Newsletter/>
            <EventsSlider/>
            <Footer/>
        </div>
    );
}
