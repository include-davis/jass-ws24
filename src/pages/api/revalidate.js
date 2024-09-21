export default async function handler(_, res) {
    try {
        await res.revalidate('/');
        await res.revalidate('/calendar');
        await res.revalidate('/join-ius');
        await res.revalidate('/meet-us');
        return res.json({ ok: true, error: null });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err });
    }
}
