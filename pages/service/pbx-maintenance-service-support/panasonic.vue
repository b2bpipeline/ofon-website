<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Pemeliharaan & Dukungan Sistem Telepon PBX Panasonic</p>
                    <h1 class="font-32 font-bold xl:font-semibold">Optimalkan Kinerja PBX Panasonic Anda</h1>
                    <p class="font-16 font-medium">
                        Solusi terbaik memelihara dan mendukung PBX Panasonic dengan biaya minimum dan manfaat maksimum yang fokus
                        pada kebutuhan Anda.
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Assessment</a>
                    </div>
                </div>
                <div><img src="/img/hero-panasonic.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Why You Need -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                            Solusi All-In-One untuk Sistem Telepon Panasonic PBX
                        </h2>
                        <p class="font-16 font-regular text-center text-c-black">
                            Mulai dari memelihara dan memberi dukungan hingga integrasi dan migrasi, kami bisa menangani hardware
                            dan software PBX Panasonic Anda untuk memastikannya beroperasi seperti baru.
                        </p>
                    </div>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Cakupan Komprehensif</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Kami menangani semua aspek perawatan Panasonic PBX, memastikan sistem lama Anda berjalan
                                    lancar.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Tanpa Paksaan Upgrade</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Pertahankan sistem Anda tanpa tekanan untuk upgrade ke cloud PBX—beralih hanya ketika Anda
                                    siap.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Pengetahuan Mendalam</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Tim kami yang berpengalaman sangat memahami Panasonic, memberikan Anda ketenangan pikiran.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Perawatan Hemat Biaya</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Hindari biaya perbaikan tak terduga dengan rencana perawatan yang terukur dan lebih hemat
                                    biaya hingga 60%.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Downtime yang Minim</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Kami mencegah masalah sebelum menyebabkan downtime, menjaga sistem tetap berjalan.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Dukungan yang Disesuaikan</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Dapatkan opsi perawatan fleksibel yang sesuai dengan kebutuhan komunikasi bisnis Anda.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-7.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Optimalisasi Sistem Lama</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Maksimalkan usia dan kinerja Panasonic PBX Anda tanpa perlu upgrade.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/psms-8.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Konsultasi untuk Masa Depan</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Kami menawarkan saran opsional tentang strategi komunikasi masa depan sesuai kebutuhan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <h2 class="font-32 font-bold text-c-orange xl:font-semibold">Pemeliharaan Sistem Telepon Panasonic</h2>
                    <p class="font-14 font-medium">
                        Apakah sistem telepon lama Panasonic Anda bermasalah? Layanan kami siap membantu!
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Pemeliharaan Perangkat Keras & Lunak</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Teknisi Berpengalaman</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Integrasi dengan Infrastruktur yang Ada</p>
                        </div>
                    </div>
                </div>
                <img src="/img/psms-hero1.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Integrasi & Migrasi ke Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Siap memodernisasi sistem telepon PBX Panasonic Anda? Migrasi ke Cloud PBX dan rasakan manfaatnya!
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Hemat Biaya</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Fleksibel dan Andal</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Fitur & Integrasi Canggih</p>
                        </div>
                    </div>
                </div>
                <img src="/img/psms-hero2.webp" alt="Image" />
            </div>
        </section>

        <!-- CTA (Connecting Business)-->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[80px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">Pakar Spesialis Sistem Telepon Anda</h2>
                    <p class="font-16 font-medium text-c-white">
                        Dapatkan layanan dari ahlinya untuk merevolusi sistem telekomunikasi Anda bersama Ofon
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
                    <div class="grid grid-cols-1 items-center gap-[16px]">
                        <NuxtLink :to="localePath('contact-us')" class="btn"> {{ $t('home_connecting_cta') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/psms-testi.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- All In One -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[60px]">
                <div class="flex flex-col gap-[24px]">
                    <h2 class="font-32 text-center font-bold">Tidak Menggunakan PBX Panasonic? Tidak Masalah</h2>
                    <div>
                        <p class="font-14 mx-auto text-center xl:max-w-[960px]">
                            Solusi PBX multi-vendor kami memastikan setiap pemeliharaan, dukungan, dan perbaikan kompatibel dengan
                            jenis perangkat PBX yang Anda gunakan.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-3 xl:gap-[36px]">
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio1.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_4') }}</p>
                            <p class="font-14 mb-4">
                                {{ $t('pbx1_aio_5') }}
                            </p>
                            <NuxtLink
                                :to="localePath('/service/pbx-maintenance-service-support/cisco')"
                                class="font-14 font-bold text-c-orange"
                                >{{ $t('msteams_not_cta') }}</NuxtLink
                            >
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio2.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_6') }}</p>
                            <p class="font-14 mb-4">
                                {{ $t('pbx1_aio_7') }}
                            </p>
                            <NuxtLink
                                :to="localePath('/service/pbx-maintenance-service-support/avaya')"
                                class="font-14 font-bold text-c-orange"
                                >{{ $t('msteams_not_cta') }}</NuxtLink
                            >
                        </div>
                    </div>

                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio4.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_10') }}</p>
                            <p class="font-14 mb-4">
                                {{ $t('pbx1_aio_11') }}
                            </p>
                            <NuxtLink
                                :to="localePath('/service/pbx-maintenance-service-support/nec')"
                                class="font-14 font-bold text-c-orange"
                                >{{ $t('msteams_not_cta') }}</NuxtLink
                            >
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio5.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_12') }}</p>
                            <p class="font-14 mb-4">
                                {{ $t('pbx1_aio_13') }}
                            </p>
                            <NuxtLink
                                :to="localePath('/service/pbx-maintenance-service-support/alcatel')"
                                class="font-14 font-bold text-c-orange"
                                >{{ $t('msteams_not_cta') }}</NuxtLink
                            >
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio6.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_14') }}</p>
                            <p class="font-14 mb-4">
                                {{ $t('pbx1_aio_15') }}
                            </p>
                            <NuxtLink
                                :to="localePath('/service/pbx-maintenance-service-support/yeastar')"
                                class="font-14 font-bold text-c-orange"
                                >{{ $t('msteams_not_cta') }}</NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Unify Your Phone) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 font-semibold text-c-white">
                            Ingin Memperbarui Panasonic PBX Anda? Dapatkan Asesmen Gratis!
                        </h2>
                        <p class="font-16 text-c-white">
                            Apa pun sistem telepon yang Anda gunakan, kami punya solusi untuk membuat sistem telepon Anda berjalan
                            seperti baru.
                        </p>
                        <a href="#forms" class="btn xl:w-fit"> {{ $t('pi_integrate_3') }}</a>
                    </div>
                    <img src="/img/lp4-cta.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <FAQ />
    </main>
</template>

<script setup>
const route = useRoute();

// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('service_panasonic_title'));
const description = ref(t('service_panasonic_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/service/pbx-maintenance-service-support/panasonic/',
//         id: '/layanan/jasa-maintenance-pbx/panasonic/',
//     },
// });
</script>
