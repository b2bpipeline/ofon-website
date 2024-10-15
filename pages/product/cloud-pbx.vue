<template>
    <main>
        <!-- Hero (Solusi Komunikasi) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon Cloud PBX</p>
                    <h1 class="font-32 font-bold xl:font-semibold">Solusi Komunikasi Bisnis Lebih Hemat & Canggih</h1>
                    <p class="font-16 font-medium">
                        Ofon Cloud PBX memberikan layanan telepon bisnis yang lebih modern dan hemat biaya dengan integrasi dan
                        fitur yang lebih beragam.
                    </p>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">Hubungi Kami</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/product-cloudpbx1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Solusi Cloud PBXX -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    Solusi Cloud PBX Fleksibel & Reliabel
                </p>
                <p class="font-16 text-center font-medium">
                    Ofon PBX adalah sebuah infrastruktur PBX (Private Branch Exchange) berbasis cloud yang dapat diimplementasikan
                    sebagai CPaaS (Communication Platform as a Service). Solusi ini dapat dimanfaatkan untuk mendukung bisnis yang
                    tersebar di berbagai lokasi dan pola kerja dengan mobilitas tinggi.
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Mulai dari 20 extension</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Dapat diinstall di softphone, PC/laptop, atau smartphone</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Unlimited extension call</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Web-access call detail record</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Web-portal PBX management</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Integrasi dengan nomor telepon existing</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">
                            Fitur PBX:
                            <br />* Call forward, ring group <br />* Auto attendance <br />* Interactive voice response <br />*
                            Call recording (add-on) <br />* Integrasi API (add-on)
                        </p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Customer care 24 jam</p>
                    </div>
                    <div class="mx-auto flex items-center gap-[8px]">
                        <p class="font-14 font-medium">Mulai dari</p>
                        <p class="font-24 font-bold text-c-orange">Rp 800.000</p>
                        <p class="font-14 font-medium">/ month</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn">Get It Now</NuxtLink>
                </div>
                <img src="/img/product-cloudpbx2.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>

        <!-- Cloud PBX Untuk -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col items-center gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="flex flex-col gap-[16px]">
                        <h2 class="font-32 text-left font-bold text-c-black xl:font-semibold">
                            Cloud PBX untuk berbagai Kebutuhan
                        </h2>
                        <p class="font-16 text-left font-medium">
                            Sesuaikan konfigurasi dan kustomisasi cloud PBX Anda untuk berbagai kebutuhan industri.
                        </p>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/product-cloudpbx3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Web Call</p>
                            <p class="font-14 mb-[24px] font-medium">
                                Tambahkan fitur panggilan langsung dari website Anda tanpa perangkat tambahan. Tingkatkan
                                pengalaman pelanggan dengan panggilan berbasis web yang cepat, mudah, dan gratis.
                            </p>
                            <NuxtLink :to="localePath('/product/webcall')" class="font-14 font-bold text-c-orange"
                                >Selengkapnya ></NuxtLink
                            >
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/product-cloudpbx4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Voice API</p>
                            <p class="font-14 mb-[24px] font-medium">
                                Bangun solusi komunikasi yang canggih dengan integrasi Voice API kami. Otomatisasi panggilan,
                                pesan suara, dan banyak lagi dalam satu platform yang mudah dikustomisasi.
                            </p>
                            <NuxtLink :to="localePath('/product/voice-api')" class="font-14 font-bold text-c-orange"
                                >Selengkapnya ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mengapa Memilih -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">Mengapa Memilih Ofon Cloud PBX?</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx5.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Tanpa Investasi</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    100% Cloud dengan OPEX model tanpa investasi perangkat dan perawatan hardware, cukup 1 account
                                    service management.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx6.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Hemat Biaya</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Menggabungkan berbagai lokasi bisnis ke dalam satu cloud platform sehingga menghapus biaya
                                    komunikasi internal.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx7.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Portal Management</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Menghadirkan berbagai fitur PBX dan kemudahan dalam pengelolaan sistem telepon dengan web
                                    portal yang dapat diakses secara remote
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx8.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Adaptif</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Mendukung pola kerja mobile, skalabilitas, dan fleksibilitas dalam pemilihan perangkat
                                    berbasis IP sesuai kebutuhan dengan SLA 99%.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx9.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Integrasi</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Dapat dihubungkan dengan sambungan dan nomor telepon yang telah ada sebelumnya, serta
                                    integrasi dengan berbagai platform komunikasi.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx10.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Audio Berkualitas</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Mendukung perangkat dan aplikasi dengan transcoding G711, G729, dan Opus untuk kualitas audio
                                    yang jernih.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx11.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Dukungan Profesional</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Dukungan teknis dari para tenaga profesional dan bersertifikat untuk memastikan kelancaran
                                    komunikasi bisnis Anda.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx12.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Jaminan Keamanan</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Layanan dan platform cloud PBX yang teruji dan tersertifikasi untuk memastikan keamanan
                                    telekomunikasi.
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

        <!-- CTA (Sederhanakan) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Sederhanakan Komunikasi Bisnis Anda Sekarang!</p>
                        <p class="font-16 text-c-white">
                            Perkuat komunikasi bisnis Anda dengan solusi PBX berbasis cloud yang bisa diakses dari mana saja.
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">Contact Us</NuxtLink>
                    </div>
                    <img src="/img/product-cloudpbx13.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_cloud_pbx_title'));
const description = ref(t('product_cloud_pbx_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/cloud-pbx',
//         id: '/produk/cloud-pbx',
//     },
// });
</script>
