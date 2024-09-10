<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('pbx1_hero_1') }}</p>
                    <h1 class="font-36 font-bold xl:font-semibold">{{ $t('pbx1_hero_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('pbx1_hero_3') }}
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">{{ $t('pbx1_hero_4') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('pbx1_hero_5') }}</a>
                    </div>
                </div>
                <div><img src="/img/3hero.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- All In One -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px]">
                    <h2 class="font-32 text-center font-bold">
                        {{ $t('pbx1_aio_1') }}
                    </h2>
                    <div>
                        <p class="font-14 text-center font-bold">{{ $t('pbx1_aio_2') }}</p>
                        <p class="font-14 mx-auto text-center xl:max-w-[960px]">
                            {{ $t('pbx1_aio_3') }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-3 xl:gap-[36px]">
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio1.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_4') }}</p>
                            <p class="font-14">
                                {{ $t('pbx1_aio_5') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio2.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_6') }}</p>
                            <p class="font-14">
                                {{ $t('pbx1_aio_7') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio3.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_8') }}</p>
                            <p class="font-14">
                                {{ $t('pbx1_aio_9') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio4.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_10') }}</p>
                            <p class="font-14">
                                {{ $t('pbx1_aio_11') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio5.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">{{ $t('pbx1_aio_12') }}</p>
                            <p class="font-14">
                                {{ $t('pbx1_aio_13') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('pbx1_support_1') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('pbx1_support_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_5') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/3-feature1.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('pbx1_support_6') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('pbx1_support_7') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_8') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_9') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('pbx1_support_10') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/3-feature2.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported (Logo) -->
        <SupportedTechnology />

        <!-- Transform PBX System -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-yellow-light xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:rounded-3xl xl:bg-c-yellow-light xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('pbx1_transform_1') }}
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('pbx1_transform_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('pbx1_transform_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('pbx1_transform_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('pbx1_transform_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('pbx1_transform_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('pbx1_transform_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('pbx1_transform_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('pbx1_transform_9') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Your Phone) -->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[120px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">{{ $t('pbx1_phone_1') }}</h2>
                    <p class="font-16 font-medium text-c-white">
                        {{ $t('pbx1_phone_2') }}
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('pbx1_phone_3') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('pbx1_phone_4') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('pbx1_phone_5') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('pbx1_phone_6') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('pbx1_phone_7') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('pbx1_phone_8') }}</p>
                        </div>
                    </div>

                    <a href="#forms" class="btn">{{ $t('pbx1_phone_9') }}</a>
                </div>
                <div><img src="/img/3-cta-image.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- CTA (Want A Refresh) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">{{ $t('pbx1_want_1') }}</h2>
                    <p class="font-14">
                        {{ $t('pbx1_want_2') }}
                    </p>
                    <a href="#forms" class="btn w-fit">{{ $t('pbx1_want_3') }}</a>
                </div>
                <div>
                    <img src="/img/hello.webp" alt="Image" />
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
const title = ref(t('service_pbx_maintenance_title'));
const description = ref(t('service_pbx_maintenance_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/service/pbx-maintenance-service-support',
//         id: '/layanan/jasa-maintenance-pbx',
//     },
// });
</script>
