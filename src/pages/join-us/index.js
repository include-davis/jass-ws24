import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JoinCabinet } from '@/components/joinCabinet';
export async function getStaticProps() {
    const join_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/join-us?populate=*`
    );
    const joinus_json = await join_res.json();
    // console.log('header', joinus_json);

    const joincab_res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/join-cabinets?populate=*`
    );
    const joincab_json = await joincab_res.json();
    // console.log('positions', joincab_json);

    return {
        props: {
            header: joinus_json.data,
            positions: joincab_json.data,
        },
    };
}

export default function JoinUs({ header, positions }) {
    return (
        <div>
            <Header />
            <JoinCabinet header={header} positions={positions} />
            <Footer />
        </div>
    );
}
