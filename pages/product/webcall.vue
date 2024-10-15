<template>
    <main>
        <main>
            <!-- Hero (Enhance) -->
            <section class="section bg-c-white pb-0 pt-[40px]">
                <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                    <div class="flex flex-col gap-6 xl:max-w-[480px]">
                        <p class="font-16 font-bold">Ofon Web Call</p>
                        <h1 class="font-32 font-bold xl:font-semibold">Solusi Praktis Telepon Internet & Website</h1>
                        <p class="font-16 font-medium">
                            Lakukan telepon online langsung dari website tanpa perlu download atau instalasi.
                        </p>
                        <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                            <WhatsAppUs />
                            <NuxtLink :to="localePath('contact-us')" class="btn-outline">Hubungi Kami</NuxtLink>
                        </div>
                    </div>
                    <div><img src="/img/webcall1.webp" alt="Image" /></div>
                </div>
            </section>

            <!-- Logo -->
            <CompaniesLogo />

            <!-- Hubungkan Pelanggan -->
            <section class="section pb-[32px] xl:pb-[0]">
                <div class="div flex flex-col items-center">
                    <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                        Hubungkan Pelanggan dengan Bisnis dalam 1 Klik
                    </p>
                    <p class="font-16 text-center font-medium">
                        Lelah dengan telepon internet yang ribet? Pengaturan telepon tradisional sering kali rumit, banyak
                        software yang harus diunduh, dan kualitas panggilannya buruk. Dengan Voice Call Ofon, nikmati telepon
                        internet langsung dari website tanpa ribet dengan call widget.
                    </p>
                </div>
            </section>
            <section class="section">
                <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Tanpa Download</p>
                                <p class="font-12">Telepon online langsung dari browser tanpa install aplikasi.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall4.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Panggilan Mudah</p>
                                <p class="font-12">Mulai panggilan hanya dengan click to call.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall5.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Panggilan Jernih</p>
                                <p class="font-12">Voice call HD memastikan setiap kata terdengar jelas.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall6.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Percakapan Aman</p>
                                <p class="font-12">Enkripsi end-to-end melindungi telepon internet Anda.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall7.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Perangkat Kompatibel</p>
                                <p class="font-12">Lakukan call voice dari laptop, tablet, atau smartphone.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall8.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Chat dan Berbagi File</p>
                                <p class="font-12">
                                    Lebih mudah dengan fitur chat langsung dan berbagi file dengan click to call software.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src="/img/webcall2.webp" alt="Image" class="xl:order-1" />
                </div>
            </section>

            <!-- Sempurna Untuk -->
            <section class="section bg-c-yellow-light">
                <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                    <div class="flex flex-col items-start">
                        <p class="font-32 mb-[16px] text-left font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                            Sempurna untuk Berbagai Bisnis & Industri
                        </p>
                        <p class="font-16 text-left font-medium">
                            Ketahui bagaimana Ofon Web Call dapat mendukung bisnis Anda lebih dekat dengan para pelanggan dengan
                            internet telephone yang cepat dan mudah.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall9.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Pariwisata & Perhotelan</p>
                                <p class="font-12">
                                    Tawarkan promo dan layanan dengan mudah melalui scan QR code dan click-to call.
                                </p>
                            </div>
                        </div>

                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall10.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Kesehatan & Rumah Sakit</p>
                                <p class="font-12">Telemedicine melalui telepon web untuk konsultasi virtual dan emergency.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall11.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">IT & Telekomunikasi</p>
                                <p class="font-12">Tingkatkan layanan pelanggan dan dukungan teknis melalui panggilan web.</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall12.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">E-commerce</p>
                                <p class="font-12">
                                    Dapatkan komunikasi instan antara pelanggan dan customer service langsung di situs web
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mengapa Memilih -->
            <section class="section">
                <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                    <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                        <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                            Mengapa Memilih Ofon Web Call?
                        </h2>
                        <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall13.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">
                                        Komunikasi Cepat & Fleksibel
                                    </p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        Dengan click to call solution, tak perlu instalasi software yang rumit. Lakukan telepon
                                        online dari mana saja, dengan perangkat apa saja.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall14.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">Pengalaman Profesional</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        Kualitas telepon internet HD memberi kesan dan layanan yang profesional pada pelanggan dan
                                        rekan bisnis.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall15.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">Biaya Lebih Hemat</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        Hindari sistem telepon yang mahal dan software yang rumit dengan telepon online melalui
                                        website.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall16.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">Keamanan Terpercaya</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        Lindungi keamanan voice call bisnis Anda dengan enkripsi end-to-end kelas enterprise.
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
                            <NuxtLink :to="localePath('contact-us')" class="btn-outline">
                                {{ $t('home_connecting_cta') }}</NuxtLink
                            >
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
                            <p class="font-32 font-semibold text-c-white">Coba Layanan Voice Call Website Sekarang!</p>
                            <p class="font-16 text-c-white">
                                Rasakan kemudahan panggilan bisnis berbasis internet telephone melalui browser dengan layanan yang
                                mudah dan aman.
                            </p>
                            <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">Contact Us</NuxtLink>
                        </div>
                        <img src="/img/webcall17.webp" alt="Image" />
                    </div>
                </div>
            </section>
        </main>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref('Webcall');
const description = ref('Webcall');

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
