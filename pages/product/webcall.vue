<template>
    <main>
        <main>
            <!-- Hero (Enhance) -->
            <section class="section bg-c-white pb-0 pt-[40px]">
                <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                    <div class="flex flex-col gap-6 xl:max-w-[480px]">
                        <p class="font-16 font-bold">{{ $t('webcall_1') }}</p>
                        <h1 class="font-32 font-bold xl:font-semibold">{{ $t('webcall_2') }}</h1>
                        <p class="font-16 font-medium">
                            {{ $t('webcall_3') }}
                        </p>
                        <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                            <WhatsAppUs />
                            <NuxtLink :to="localePath('contact-us')" class="btn-outline"> {{ $t('webcall_4') }}</NuxtLink>
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
                        {{ $t('webcall_conn_1') }}
                    </p>
                    <p class="font-16 text-center font-medium">
                        {{ $t('webcall_conn_2') }}
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
                                <p class="font-16 font-bold">{{ $t('webcall_conn_3') }}</p>
                                <p class="font-12">{{ $t('webcall_conn_4') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall4.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_conn_5') }}</p>
                                <p class="font-12">{{ $t('webcall_conn_6') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall5.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_conn_7') }}</p>
                                <p class="font-12">{{ $t('webcall_conn_8') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall6.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_conn_9') }}</p>
                                <p class="font-12">{{ $t('webcall_conn_10') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall7.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_conn_11') }}</p>
                                <p class="font-12">{{ $t('webcall_conn_12') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall8.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_conn_13') }}</p>
                                <p class="font-12">
                                    {{ $t('webcall_conn_14') }}
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
                            {{ $t('webcall_suit_1') }}
                        </p>
                        <p class="font-16 text-left font-medium">
                            {{ $t('webcall_suit_2') }}
                        </p>
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall9.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_suit_3') }}</p>
                                <p class="font-12">
                                    {{ $t('webcall_suit_4') }}
                                </p>
                            </div>
                        </div>

                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall10.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_suit_5') }}</p>
                                <p class="font-12">{{ $t('webcall_suit_6') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall11.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_suit_7') }}</p>
                                <p class="font-12">{{ $t('webcall_suit_8') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/webcall12.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('webcall_suit_9') }}</p>
                                <p class="font-12">
                                    {{ $t('webcall_suit_10') }}
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
                            {{ $t('webcall_why_1') }}
                        </h2>
                        <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall13.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">
                                        {{ $t('webcall_why_2') }}
                                    </p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        {{ $t('webcall_why_3') }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall14.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('webcall_why_4') }}</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        {{ $t('webcall_why_5') }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall15.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('webcall_why_6') }}</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        {{ $t('webcall_why_7') }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                                <img src="/img/webcall16.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                                <div>
                                    <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('webcall_why_8') }}</p>
                                    <p class="font-14 font-regular text-center text-c-black">
                                        {{ $t('webcall_why_9') }}
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
                            <p class="font-32 font-semibold text-c-white">{{ $t('webcall_cta_1') }}</p>
                            <p class="font-16 text-c-white">
                                {{ $t('webcall_cta_2') }}
                            </p>
                            <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit"> {{ $t('webcall_cta_3') }}</NuxtLink>
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
