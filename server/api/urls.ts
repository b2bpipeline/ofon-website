export default defineSitemapEventHandler(async (e) => {
    const posts = await Promise.all([
        {
            _path: '/blog/pemanfaatan-ofon-webcall-sebagai-channel-komunikasi-dalam-sebuah-proses-transaksi-online',
        },
        {
            _path: '/blog/pemanfaatan-ofon-webcall-menghubungkan-pelanggan-dengan-waiter-dalam-bisnis-hospitality-dan-fb',
        },
        {
            _path: '/blog/pemanfaatan-ofon-webcall-menghubungkan-pelanggan-ke-customer-serivce',
        },
        {
            _path: '/blog/cloud-pbx-vs-on-premise-pbx',
        },
        {
            _path: '/blog/ofon-cloud-direct-routing-microsoft-teams',
        },
        {
            _path: '/blog/fitur-dial-in-dalam-aplikasi-conference',
        },
        {
            _path: '/blog/tetap-produktif-bisnis-meeting-dari-rumah',
        },
        {
            _path: '/blog/alternatif-rapat-atau-konferensi-daring-android',
        },
        {
            _path: '/blog/alternatif-rapat-atau-konferensi-daring',
        },
        {
            _path: '/blog/phone-number-proxy',
        },
    ]);
    return posts.map((post) => ({ loc: post._path }));
});
