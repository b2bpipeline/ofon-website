<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon + Cisco Webex</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('cisco_1') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('cisco_2') }}
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">{{ $t('cisco_3') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('cisco_4') }}</a>
                    </div>
                </div>
                <div><img src="/img/hero-webex.webp" alt="Image" /></div>
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
                            {{ $t('cisco_card_1') }}
                        </h2>
                        <p class="font-16 font-regular text-center text-c-black">
                            {{ $t('cisco_card_2') }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_3') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_4') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_5') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_6') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_7') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_8') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_9') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_10') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_11') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_12') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_13') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_14') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams7.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_15') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_16') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/msteams8.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cisco_card_17') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cisco_card_18') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#another" class="btn-outline mx-auto w-fit">{{ $t('cisco_card_19') }}</a>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <h2 class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cisco_service_1') }}</h2>
                    <p class="font-14 font-medium">
                        {{ $t('cisco_service_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_5') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/msteams9.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cisco_service_6') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('cisco_service_7') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_8') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_9') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cisco_service_10') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/msteams10.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- CTA (28 Years) -->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[120px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">{{ $t('cloud_years_1') }}</h2>
                    <p class="font-16 font-medium text-c-white">
                        {{ $t('cloud_years_2') }}
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold text-c-white">{{ $t('cloud_years_3') }}</p>
                        <img src="/img/microsoft-white.webp" alt="Image" class="" />
                    </div>
                    <a href="#forms" class="btn">{{ $t('cloud_years_4') }}</a>
                </div>
                <div><img src="/img/testi-pgn.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Why Choose Ofon (Table) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px]">
                <div class="flex flex-col gap-[24px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('cisco_why_1') }}
                    </h2>
                    <p class="font-16 font-regular text-center text-c-black">
                        {{ $t('cisco_why_2') }}
                    </p>
                </div>
                <div class="overflow-auto">
                    <img src="/img/msteams.webp" alt="Image" class="min-w-[1200px] xl:w-fit" />
                </div>
            </div>
        </section>

        <!-- Not Using Microsoft Teams -->
        <section id="another" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-16 font-bold">{{ $t('cisco_not_0') }}</p>
                    <h2 class="font-32 font-bold text-c-black xl:font-semibold">{{ $t('cisco_not_1') }}</h2>
                    <p class="font-16 font-medium">
                        {{ $t('cisco_not_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/icon-teams.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('cisco_not_3') }}</p>
                                <p class="font-14">
                                    {{ $t('cisco_not_4') }}
                                </p>
                                <NuxtLink
                                    :to="localePath('/service/phone-system-integration/microsoft-teams/')"
                                    class="font-14 font-bold text-c-orange"
                                    >{{ $t('msteams_not_cta') }}</NuxtLink
                                >
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/icon-zoom.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('cisco_not_5') }}</p>
                                <p class="font-14">
                                    {{ $t('cisco_not_6') }}
                                </p>
                                <NuxtLink
                                    :to="localePath('/service/phone-system-integration/zoom/')"
                                    class="font-14 font-bold text-c-orange"
                                    >{{ $t('msteams_not_cta') }}</NuxtLink
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/msteams14.webp" alt="Image" />
            </div>
        </section>

        <!-- CTA (Unify Your Phone) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 font-semibold text-c-white">{{ $t('cisco_uni_1') }}</h2>
                        <p class="font-16 text-c-white">{{ $t('cisco_uni_2') }}</p>
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
const title = ref(t('service_phone_system_cisco_title'));
const description = ref(t('service_phone_system_cisco_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page route
// defineI18nRoute({
//     paths: {
//         en: '/service/phone-system-integration/cisco/',
//         id: '/layanan/integrasi-phone-system/cisco/',
//     },
// });
</script>
