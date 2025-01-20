<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('pi_hero_1') }}</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('pi_hero_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('pi_hero_3') }}
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">{{ $t('pi_hero_4') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('pi_hero_5') }}</a>
                    </div>
                </div>
                <div><img src="/img/pi-hero.webp" alt="phone system integration" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Connect Any Communication -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('pi_connect_1') }}
                    </h2>
                    <p class="font-16 text-center">
                        {{ $t('pi_connect_2') }}
                    </p>
                </div>
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[36px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('pi_connect_3') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('pi_connect_4') }}
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-wrap items-center gap-[16px]">
                            <img src="/img/sm-logo1.webp" alt="Image" />
                            <img src="/img/sm-logo2.webp" alt="Image" />
                            <img src="/img/sm-logo3.webp" alt="Image" />
                            <img src="/img/sm-logo4.webp" alt="Image" />
                            <img src="/img/sm-logo5.webp" alt="Image" />
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('pi_connect_5') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('pi_connect_6') }}
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-col items-start gap-[16px]">
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo1.webp" alt="Image" />
                                <a href="https://ofon.co.id/en/service/phone-system-integration/microsoft-teams" class="font-14 font-semibold">{{ $t('pi_connect_7') }}</a>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo2.webp" alt="Image" />
                                <a href="https://ofon.co.id/en/service/phone-system-integration/cisco" class="font-14 font-semibold">{{ $t('pi_connect_8') }}</a>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo3.webp" alt="Image" />
                                <a href="https://ofon.co.id/en/service/phone-system-integration/zoom" class="font-14 font-semibold">{{ $t('pi_connect_9') }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('pi_connect_10') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('pi_connect_11') }}
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-col items-start gap-[16px]">
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo4.webp" alt="Image" />
                                <p class="font-14 font-semibold">{{ $t('pi_connect_12') }}</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo5.webp" alt="Image" />
                                <p class="font-14 font-semibold">{{ $t('pi_connect_13') }}</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo6.webp" alt="Image" />
                                <p class="font-14 font-semibold">{{ $t('pi_connect_14') }}</p>
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
                    <h2 class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('pi_services_1') }}</h2>
                    <p class="font-14 font-medium">
                        {{ $t('pi_services_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_5') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service3.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('pi_services_6') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('pi_services_7') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_8') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_9') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pi_services_10') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service1.webp" alt="Image" />
            </div>
        </section>

        <!-- Boost Productivity -->
        <section class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        {{ $t('pi_boost_1') }}
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('pi_boost_2') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('pi_boost_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('pi_boost_4') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('pi_boost_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('pi_boost_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('pi_boost_7') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- <a href="#forms" class="btn mx-auto w-fit">{{ $t('pi_boost_8') }}</a> -->
                </div>
            </div>
        </section>

        <!-- Why Choose Ofon -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <h2 class="font-32 font-bold text-c-black xl:font-semibold">
                        {{ $t('pi_why_1') }}
                    </h2>
                    <p class="font-16 font-medium">
                        {{ $t('pi_why_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point1.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('pi_why_3') }}</p>
                                <p class="font-14">
                                    {{ $t('pi_why_4') }}
                                </p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point2.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('pi_why_5') }}</p>
                                <p class="font-14">{{ $t('pi_why_6') }}</p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('pi_why_7') }}</p>
                                <p class="font-14">{{ $t('pi_why_8') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/lp4-why.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported (Logo) -->
        <SupportedTechnology />

        <!-- CTA (28+ Years) -->
        <section class="section bg-c-white">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[120px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold xl:font-semibold">{{ $t('pi_years_1') }}</h2>
                    <p class="font-16 font-medium">{{ $t('pi_years_2') }}</p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">{{ $t('pi_years_3') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <!-- <a href="#forms" class="btn"> {{ $t('pi_years_4') }}</a> -->
                </div>
                <div><img :src="$t('case_pic3')" alt="Image" /></div>
            </div>
        </section>

        <!-- CTA (Ready To Integrate) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 font-semibold text-c-white">
                            {{ $t('pi_integrate_1') }}
                        </h2>
                        <p class="font-16 text-c-white">
                            {{ $t('pi_integrate_2') }}
                        </p>
                        <a href="#forms" class="btn xl:w-fit"> {{ $t('pi_integrate_3') }}</a>
                    </div>
                    <img src="/img/lp4-cta.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />

        <!-- FAQ -->
        <FAQ />
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('service_phone_system_title'));
const description = ref(t('service_phone_system_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page route
// defineI18nRoute({
//     paths: {
//         en: '/service/phone-system-integration/',
//         id: '/layanan/integrasi-phone-system/',
//     },
// });
</script>
