<template>
    <main>
        <!-- Hero -->
        <section
            class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/ab-hero.webp')] xl:bg-cover xl:bg-center"
        >
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:mt-[90px] xl:max-w-[900px]">
                    <h1 class="font-36 font-bold xl:font-semibold">{{ $t('about_hero_1') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('about_hero_2') }}
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">{{ $t('about_hero_3') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('about_hero_4') }}</a>
                    </div>
                </div>
            </div>
            <img src="/img/ab-hero2.webp" alt="Image" class="mx-auto w-full max-w-[640px] xl:hidden" />
        </section>

        <!-- Why We're Here -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold xl:mb-[24px] xl:font-semibold">{{ $t('about_why_1') }}</p>
                    <p class="font-16 font-medium">
                        {{ $t('about_why_2') }}
                    </p>
                </div>
                <img src="/img/ab-why.webp" alt="Image" />
            </div>
        </section>

        <!-- Our Journey -->
        <section class="section">
            <div class="div flex flex-col items-start gap-[24px] xl:gap-[40px]">
                <h2 class="font-32 mx-auto text-center font-bold">{{ $t('about_journey_1') }}</h2>
                <div class="grid grid-cols-1 gap-[32px] xl:grid-cols-3">
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">1996</p>
                        <p class="font-24 font-bold text-c-black">{{ $t('about_journey_2') }}</p>
                        <p class="font-14 text-c-black">
                            {{ $t('about_journey_3') }}
                        </p>
                        <img src="/img/ab-journey1.webp" class="mt-[16px]" alt="Image" />
                    </div>
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">2017</p>
                        <p class="font-24 font-bold text-c-black">{{ $t('about_journey_4') }}</p>
                        <p class="font-14 text-c-black">
                            {{ $t('about_journey_5') }}
                        </p>
                        <img src="/img/ab-journey2.webp" class="mt-[16px]" alt="Image" />
                    </div>
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">2023</p>
                        <p class="font-24 font-bold text-c-black">{{ $t('about_journey_6') }}</p>
                        <p class="font-14 text-c-black">
                            {{ $t('about_journey_7') }}
                        </p>
                        <img src="/img/ab-journey3.webp" class="mt-[16px]" alt="Image" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Who We Help -->
        <section class="section">
            <div class="div flex flex-col items-start gap-[24px] xl:gap-[40px]">
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 text-center font-bold">{{ $t('about_who_1') }}</h2>
                    <p class="font-16 text-center">
                        {{ $t('about_who_2') }}
                    </p>
                </div>
                <div class="grid w-full grid-cols-1 gap-[24px] xl:grid-cols-3 xl:gap-[40px]">
                    <div class="flex flex-col items-center rounded-xl border-2 border-c-orange p-[24px]">
                        <p class="font-32 text-center font-bold text-c-orange">{{ $t('home_connecting_3') }}</p>
                        <p class="font-14 text-center font-bold text-c-black">{{ $t('home_connecting_4') }}</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl border-2 border-c-orange p-[24px]">
                        <p class="font-32 text-center font-bold text-c-orange">{{ $t('home_connecting_5') }}</p>
                        <p class="font-14 text-center font-bold text-c-black">{{ $t('home_connecting_6') }}</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl border-2 border-c-orange p-[24px]">
                        <p class="font-32 text-center font-bold text-c-orange">{{ $t('home_connecting_7') }}</p>
                        <p class="font-14 text-center font-bold text-c-black">{{ $t('home_connecting_8') }}</p>
                    </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-[32px]">
                    <img src="/img/ab-1.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-2.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-3.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-4.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-5.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-6.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-7.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-8.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-9.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-10.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-11.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-12.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-13.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-14.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-15.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-16.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-17.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-18.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-19.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-20.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-21.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-22.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-23.webp" class="h-[32px] xl:h-fit" alt="Image" />
                    <img src="/img/ab-24.webp" class="h-[32px] xl:h-fit" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Our Gallery -->
        <section class="section bg-c-white">
            <div class="div flex flex-col items-center gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold xl:font-semibold">{{ $t('about_gallery_1') }}</p>
                    <p class="font-16 mb-[16px] font-medium xl:mb-[24px]">
                        {{ $t('about_gallery_2') }}
                    </p>
                    <a href="#forms" class="btn-outline w-fit">{{ $t('about_gallery_3') }}</a>
                </div>
                <img src="/img/gallery.webp" alt="Image" class="xl:col-span-2" />
            </div>
        </section>

        <!-- CTA (Ready To Start)-->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('about_cta_1') }}</p>
                        <p class="font-16 text-c-white">{{ $t('about_cta_2') }}</p>
                        <a href="#forms" class="btn xl:w-fit">{{ $t('about_cta_3') }}</a>
                    </div>
                    <img src="/img/ab-cta.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('about_us_title'));
const description = ref(t('about_us_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
defineI18nRoute({
    paths: {
        en: '/about-us/',
        id: '/tentang-kami/',
    },
});
</script>
