<template>
    <main>
        <!-- Hero (Enhance) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon Voice API</p>
                    <h1 class="font-32 font-bold xl:font-semibold">Perkuat Bisnis dengan Integrasi Voice API</h1>
                    <p class="font-16 font-medium">
                        Kembangkan fitur in app calling Anda dengan integrasi voice API yang berkualitas dan skalabel.
                    </p>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">Hubungi Kami</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/voiceapi1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Solusi Terpercaya -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    Solusi Terpercaya Fitur Voice Call API
                </p>
                <p class="font-16 text-center font-medium">
                    Membangun panggilan yang nyaman terkadang rumit. Anda butuh solusi yang sederhana, skalabel, dan andal. Ofon
                    menghadirkan Voice API – cara tercepat untuk mengintegrasikan in app voice calling. Tambahkan fitur voice
                    call, konferensi, dan mengirim pesan ke aplikasi Anda.
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi3.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Konektivitas Suara Global</p>
                            <p class="font-12">Hubungkan pelanggan di seluruh dunia dengan API phone number.</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi4.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Perekaman dan Transkripsi</p>
                            <p class="font-12">Simpan dan analisis voice call dengan perekaman bawaan dan transkripsi AI.</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi5.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Fungsi Suara yang Bisa Diprogram</p>
                            <p class="font-12">Otomatisasi panggilan suara dan konferensi dengan mudah melalui phone call.</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi6.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Dukungan Multi-Bahasa</p>
                            <p class="font-12">Layanan global dengan dukungan berbagai bahasa dan aksen dengan phone call API.</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi7.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Analitik Panggilan Real-Time</p>
                            <p class="font-12">
                                Lacak kinerja panggilan dan perilaku pengguna dengan analitik phone number mendalam.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi8.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Aman dan Patuh Regulasi</p>
                            <p class="font-12">
                                Enkripsi phone call end-to-end dan kepatuhan terhadap regulasi global (GDPR, HIPAA).
                            </p>
                        </div>
                    </div>
                </div>
                <img src="/img/voiceapi2.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>

        <!-- Sempurna Untuk -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col items-start">
                    <p class="font-32 mb-[16px] text-left font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                        Sempurna untuk Berbagai Aplikasi
                    </p>
                    <p class="font-16 text-left font-medium">
                        Ketahui bagaimana Ofon Voice API dapat terintegrasi untuk mendukung berbagai fitur aplikasi sesuai
                        kebutuhan bisnis Anda.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi9.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Pusat Layanan Pelanggan</p>
                            <p class="font-12">Otomatisasi operasi call center Anda dengan kemampuan real-time voice call.</p>
                        </div>
                    </div>

                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi10.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Autentikasi 2 Faktor</p>
                            <p class="font-12">
                                Tingkatkan keamanan in app calling dengan verifikasi suara ke proses autentikasi.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi11.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Pengingat Janji Temu</p>
                            <p class="font-12">Kirim pengingat suara otomatis ke klien dan karyawan dengan phone call API.</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi12.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">Interactive Voice Response (IVR)</p>
                            <p class="font-12">Buat sistem IVR cerdas yang memandu pengguna dengan voice call personal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mengapa Memilih -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">Mengapa Memilih Ofon Voice API?</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi13.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Integrasi Cepat</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Siap digunakan dalam hitungan menit dengan dokumentasi voice call API yang sederhana.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi14.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Skalabel</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Tangani ribuan voice call dengan infrastruktur berbasis cloud yang tangguh.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi15.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Biaya Efisien</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Bayar hanya untuk voice API yang Anda gunakan dengan harga yang fleksibel.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi16.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Jangkauan Global</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Aktifkan voice call di lebih dari 190 negara dengan kualitas yang jernih.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Connecting Business)-->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">
                        {{ $t('home_connecting_1') }}
                    </h2>
                    <p class="font-16 font-medium text-c-white">
                        {{ $t('home_connecting_2') }}
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_3') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_4') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_5') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_6') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_7') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_8') }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 items-center gap-[16px]">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline"> {{ $t('home_connecting_cta') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Mulai Integrasi) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Mulai Integrasi dengan Voice API Sekarang!</p>
                        <p class="font-16 text-c-white">
                            Hubungi kami untuk mengetahui lebih lanjut tentang layanan Voice Call API.
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">Contact Us</NuxtLink>
                    </div>
                    <img src="/img/voiceapi17.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref('Voice API');
const description = ref('Voice API');

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/meeting-setup',
//         id: '/produk/setup-meeting',
//     },
// });
</script>
