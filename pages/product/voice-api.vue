<template>
    <main>
        <!-- Hero (Enhance) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('voice_1') }}</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('voice_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('voice_3') }}
                    </p>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline"> {{ $t('voice_4') }}</NuxtLink>
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
                    {{ $t('voice_trust_1') }}
                </p>
                <p class="font-16 text-center font-medium">
                    {{ $t('voice_trust_2') }}
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi3.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_3') }}</p>
                            <p class="font-12">{{ $t('voice_trust_4') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi4.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_5') }}</p>
                            <p class="font-12">{{ $t('voice_trust_6') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi5.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_7') }}</p>
                            <p class="font-12">{{ $t('voice_trust_8') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi6.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_9') }}</p>
                            <p class="font-12">{{ $t('voice_trust_10') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi7.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_11') }}</p>
                            <p class="font-12">
                                {{ $t('voice_trust_12') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi8.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_trust_13') }}</p>
                            <p class="font-12">
                                {{ $t('voice_trust_14') }}
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
                        {{ $t('voice_suit_1') }}
                    </p>
                    <p class="font-16 text-left font-medium">
                        {{ $t('voice_suit_2') }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi9.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_suit_3') }}</p>
                            <p class="font-12">{{ $t('voice_suit_4') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi10.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_suit_5') }}</p>
                            <p class="font-12">{{ $t('voice_suit_6') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi11.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_suit_7') }}</p>
                            <p class="font-12">{{ $t('voice_suit_8') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]">
                        <img src="/img/voiceapi12.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-16 font-bold">{{ $t('voice_suit_9') }}</p>
                            <p class="font-12">{{ $t('voice_suit_10') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mengapa Memilih -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">{{ $t('voice_why_1') }}</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi13.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('voice_why_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('voice_why_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi14.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('voice_why_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('voice_why_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi15.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('voice_why_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('voice_why_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/voiceapi16.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('voice_why_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('voice_why_9') }}
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
                        <p class="font-32 font-semibold text-c-white">{{ $t('voice_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('voice_cta_2') }}
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('voice_cta_3') }}</NuxtLink>
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
