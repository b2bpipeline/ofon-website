<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/ab-hero.webp')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:mt-[60px] xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">The Ofon’s Story</h1>
                    <p class="font-16 font-medium">
                        Established in 1996, we keep our purpose to enable seamless connectivity for businesses & individuals.
                        With more than 3000 customers, we provide telephony service, maintenance & support, cloud communication,
                        and phone system integration.
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">{{ $t('home_hero_3') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Assessment</a>
                    </div>
                </div>
            </div>
            <img src="/img/ab-hero2.webp" alt="Image" class="mx-auto w-full max-w-[640px] xl:hidden" />
        </section>

        <!-- Why We're Here -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold xl:mb-[24px] xl:font-semibold">Why We’re Here</p>
                    <p class="font-16 font-medium">
                        We simplify business communication with advanced IP telephony solutions and cloud services. As a leading
                        cloud service provider in Indonesia, we integrate traditional telephone service with modern business phone
                        solutions to keep your business ahead with our telephony solutions.
                    </p>
                </div>
                <img src="/img/ab-why.webp" alt="Image" />
            </div>
        </section>

        <!-- Our Journey -->
        <section class="section">
            <div class="div flex flex-col items-start gap-[24px] xl:gap-[40px]">
                <h2 class="font-32 mx-auto text-center font-bold">Our Journey</h2>
                <div class="grid grid-cols-1 gap-[32px] xl:grid-cols-3">
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">1996</p>
                        <p class="font-24 font-bold text-c-black">PT Batam Bintan Telekomunikasi</p>
                        <p class="font-14 text-c-black">
                            PT Batam Bintan Telekomunikasi (BBT) was established in Batam by Batamindo and Telkom with the primary
                            goal of providing PSTN telephone services to factories and businesses in the Batamindo Industrial Park
                            (Mukakuning), Bintan Industrial Estate (Lobam), and Bintan Resorts (Lagoi) regions.
                        </p>
                        <img src="/img/ab-journey1.webp" class="mt-[16px]" alt="Image" />
                    </div>
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">2017</p>
                        <p class="font-24 font-bold text-c-black">Ofon - National Service Provider</p>
                        <p class="font-14 text-c-black">
                            BBT evolved into a nationwide service provider known as Ofon with head office in Jakarta. Ofon
                            delivers IT solutions and IP telephone services, including cloud solutions across Indonesia.
                        </p>
                        <img src="/img/ab-journey2.webp" class="mt-[16px]" alt="Image" />
                    </div>
                    <div class="flex flex-col items-start gap-[16px] xl:items-center">
                        <p class="font-24 mr-auto border-b-2 border-c-orange font-bold text-c-orange">2023</p>
                        <p class="font-24 font-bold text-c-black">Unified Telephony Solutions in Indonesia</p>
                        <p class="font-14 text-c-black">
                            BBT initiated an MSP division to offer IT solutions concentrating on integrating telephone/voice
                            systems with collaboration and operational applications frequently utilized in corporate and
                            enterprise settings.
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
                    <h2 class="font-32 text-center font-bold">Who We Help</h2>
                    <p class="font-16 text-center">
                        We assist a variety of companies across Indonesia with business telephone solutions and VoIP telephony
                        solutions.
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
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold xl:font-semibold">Our Gallery</p>
                    <p class="font-16 mb-[16px] font-medium xl:mb-[24px]">
                        Explore our transformation and commitment to innovation as a leading cloud telephony service provider.
                    </p>
                    <a href="#forms" class="btn-outline w-fit">See More</a>
                </div>
                <img src="/img/ab-gallery.webp" alt="Image" />
            </div>
        </section>

        <!-- CTA (Ready To Start)-->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Ready to Start Your Better Communication Journey?</p>
                        <p class="font-16 text-c-white">Talk with us and get a free quick assessment!</p>
                        <a href="#forms" class="btn xl:w-fit"> {{ $t('home_get_cta') }}</a>
                    </div>
                    <img src="/img/ab-cta.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const route = useRoute();

// seo
useSeoMeta({
    title: 'Page',
    description: 'Page',
});

// page routing
defineI18nRoute({
    paths: {
        en: '/about-us/',
        id: '/tentang-kami/',
    },
});
</script>
