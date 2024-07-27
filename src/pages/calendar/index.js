import { CalendarComp } from '@/components/calendar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Calendar() {
    return (
        <div>
            <Header />
            <CalendarComp />
            <Footer />
        </div>
    );
}
