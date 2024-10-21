<template>
    <main>
        <!-- Hero (Productive) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('meeting_1') }}</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('meeting_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('meeting_3') }}
                    </p>

                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">{{ $t('meeting_4') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/meeting1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- The Best Meeting Setup -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center gap-[16px]">
                <p class="font-32 text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    {{ $t('meeting_setup_1') }}
                </p>
                <p class="font-16 mb-[16px] text-center font-medium">
                    {{ $t('meeting_setup_2') }}
                </p>
                <div class="flex flex-col items-center gap-[8px] xl:flex-row xl:gap-[16px]">
                    <p class="font-16 font-bold">{{ $t('meeting_setup_3') }}</p>
                    <img src="/img/meeting2.webp" alt="Image" />
                </div>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col items-start gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 text-center font-bold text-c-black xl:font-semibold">{{ $t('meeting_gear_1') }}</p>
                        <p class="font-14 text-center">
                            {{ $t('meeting_gear_2') }}
                        </p>
                        <img src="/img/meeting3.webp" alt="Image" />
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_3') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_4') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_5') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_6') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_7') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_8') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]">{{ $t('meeting_gear_cta') }}</NuxtLink>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 text-center font-bold text-c-black xl:font-semibold">{{ $t('meeting_gear_9') }}</p>
                        <p class="font-14 text-center">
                            {{ $t('meeting_gear_10') }}
                        </p>
                        <img src="/img/meeting4.webp" alt="Image" />
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_11') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_12') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_13') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_14') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_15') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_16') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]">{{ $t('meeting_gear_cta') }}</NuxtLink>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 text-center font-bold text-c-black xl:font-semibold">{{ $t('meeting_gear_17') }}</p>
                        <p class="font-14 text-center">
                            {{ $t('meeting_gear_18') }}
                        </p>
                        <img src="/img/meeting5.webp" alt="Image" />
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_19') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_20') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_gear_21') }}</p>
                                <p class="font-14">{{ $t('meeting_gear_22') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]">{{ $t('meeting_gear_cta') }}</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Meeting Room Management -->
        <section class="section bg-c-yellow-light pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    {{ $t('meeting_flex_title') }}
                </p>
                <p class="font-16 text-center font-medium">
                    {{ $t('meeting_flex_sub') }}
                </p>
            </div>
        </section>
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col items-center gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                            {{ $t('meeting_flex_1') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_2') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_3') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_4') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_5') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_6') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_7') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_8') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_9') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]"> {{ $t('meeting_flex_cta') }}</NuxtLink>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                            {{ $t('meeting_flex_10') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_11') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_12') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_13') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_14') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_15') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_16') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_17') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_18') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]"> {{ $t('meeting_flex_cta') }}</NuxtLink>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                            {{ $t('meeting_flex_19') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_20') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_21') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_22') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_23') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_24') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_25') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <div>
                                <p class="font-14 font-bold">{{ $t('meeting_flex_26') }}</p>
                                <p class="font-14">{{ $t('meeting_flex_27') }}</p>
                            </div>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn mt-[16px]"> {{ $t('meeting_flex_cta') }}</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Ofon Meeting -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xlxl:py-[50px] flex flex-col gap-[32px] xl:gap-[60px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">{{ $t('meeting_why_1') }}</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/meeting6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('meeting_why_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('meeting_why_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/meeting7.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('meeting_why_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('meeting_why_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/meeting8.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">
                                    {{ $t('meeting_why_6') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('meeting_why_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/meeting9.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('meeting_why_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('meeting_why_9') }}
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

        <!-- CTA (Ready To Elevate) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('meeting_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('meeting_cta_2') }}
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('meeting_cta_3') }}</NuxtLink>
                    </div>
                    <img src="/img/meeting10.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_meeting_setup_title'));
const description = ref(t('product_meeting_setup_description'));

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
