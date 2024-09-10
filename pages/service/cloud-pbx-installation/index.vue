<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('cloud_pbx_hero_1') }}</p>
                    <h1 class="font-36 font-bold xl:font-semibold">{{ $t('cloud_pbx_hero_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('cloud_pbx_hero_3') }}
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">{{ $t('cloud_pbx_hero_4') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('cloud_pbx_hero_5') }}</a>
                    </div>
                </div>
                <div><img src="/img/cloud-pbx-hero.webp" alt="Image" class="max-w-[760px]" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- A Complete -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <h2 class="font-32 font-bold text-c-orange xl:font-semibold">
                        {{ $t('cloud_pbx_solution_1') }}
                    </h2>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_pbx_solution_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/cloud-icon-1.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">{{ $t('cloud_pbx_solution_3') }}</p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/cloud-icon-2.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">{{ $t('cloud_pbx_solution_4') }}</p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/cloud-icon-3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">{{ $t('cloud_pbx_solution_5') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/cloud-icon-4.webp" alt="Image" />
            </div>
        </section>

        <!-- Join The Future -->
        <section class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        {{ $t('cloud_pbx_boost_1') }}
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/cloud-round-1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('cloud_pbx_boost_2') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_pbx_boost_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/cloud-round-2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('cloud_pbx_boost_4') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_pbx_boost_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/cloud-round-3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('cloud_pbx_boost_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_pbx_boost_7') }}
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
                    <h2 class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cloud_pbx_service_1') }}</h2>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_pbx_service_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_5') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/cloud-service-1.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cloud_pbx_service_6') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_pbx_service_7') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_8') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_9') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_pbx_service_10') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/cloud-service-2.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported (Logo) -->
        <SupportedTechnology />

        <!-- What Makes Ofon Different -->
        <section class="section">
            <div class="div xl:gap-[60px flex flex-col gap-[36px]">
                <div class="flex flex-col gap-[8px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">{{ $t('cloud_pbx_diff_1') }}</h2>
                </div>
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/cloud-diff-1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_pbx_diff_2') }}</p>
                            <p class="font-14 mb-[24px] font-medium">{{ $t('cloud_pbx_diff_3') }}</p>
                        </div>
                    </div>

                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/cloud-diff-2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_pbx_diff_4') }}</p>
                            <p class="font-14 mb-[24px] font-medium">{{ $t('cloud_pbx_diff_5') }}</p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/cloud-diff-3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_pbx_diff_6') }}</p>
                            <p class="font-14 mb-[24px] font-medium">{{ $t('cloud_pbx_diff_7') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Save Cost -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px] text-center">
                    <h2 class="font-32 font-bold text-c-black">{{ $t('home_save_1') }}</h2>
                    <p class="font-16 mx-auto max-w-[1080px]">
                        {{ $t('home_save_2') }}
                    </p>
                </div>
                <div class="xl:gap-[40 px] flex flex-col gap-[24px] text-center xl:flex-row xl:items-center">
                    <div class="flex flex-col gap-[24px]">
                        <img :src="$t('image_chartmobile1')" alt="Image" class="xl:hidden" />
                        <img :src="$t('image_chartdesktop1')" alt="Image" class="hidden xl:flex" />
                    </div>
                    <p class="font-32 font-bold text-c-orange">VS</p>
                    <div class="flex flex-col gap-[24px]">
                        <img :src="$t('image_chartmobile2')" alt="Image" class="xl:hidden" />
                        <img :src="$t('image_chartdesktop2')" alt="Image" class="hidden xl:flex" />
                    </div>
                </div>
                <a href="#forms" class="btn-outline mx-auto">{{ $t('home_save_3') }}</a>
            </div>
        </section>

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
                <div><img src="/img/3-cta-image.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- CTA (Want A Refresh) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">{{ $t('cloud_call_1') }}</h2>
                    <p class="font-14">
                        {{ $t('cloud_call_2') }}
                    </p>
                    <a href="#forms" class="btn w-fit">{{ $t('cloud_call_3') }}</a>
                </div>
                <div>
                    <img src="/img/cloud-cta-1.webp" alt="Image" />
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
const title = ref(t('service_cloud_pbx_title'));
const description = ref(t('service_cloud_pbx_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page route
// defineI18nRoute({
//     paths: {
//         en: '/service/cloud-pbx-installation',
//         id: '/layanan/jasa-pasang-cloud-pbx/',
//     },
// });
</script>
