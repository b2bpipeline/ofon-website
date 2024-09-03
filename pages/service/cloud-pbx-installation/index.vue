<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/background.webp')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">
                        {{ $t('cloud_hero_1') }}
                    </h1>
                    <p class="font-16 font-medium">
                        {{ $t('cloud_hero_2') }}
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('cloud_hero_3') }}</a>
                    </div>
                </div>
            </div>
            <img src="/img/hero.webp" alt="Image" class="mx-auto w-full max-w-[640px] xl:hidden" />
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- A Compled Cloud PBX -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cloud_sup_1') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_sup_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/support1.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_sup_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/support2.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_sup_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/support3.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_sup_5') }}</p>
                        </div>
                    </div>
                </div>
                <img src="/img/solution.webp" alt="Image" />
            </div>
        </section>

        <!-- Join The Future -->
        <section class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        {{ $t('cloud_join_1') }}
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('cloud_join_2') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_join_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('cloud_join_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_join_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    {{ $t('cloud_join_6') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('cloud_join_7') }}
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
                <img src="/img/service1.webp" alt="Image" class="xl:order-1" />
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cloud_service_1') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_service_2') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_3') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_4') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_5') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <img src="/img/service3.webp" alt="Image" />
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">{{ $t('cloud_service_6') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('cloud_service_7') }}
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_8') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_9') }}</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('cloud_service_10') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- What Makes Us Different -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <h2 class="font-32 text-center font-bold text-c-orange xl:font-semibold">{{ $t('cloud_what_1') }}</h2>
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_what_2') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('cloud_what_3') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_what_4') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('cloud_what_5') }}
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cloud_what_6') }}</p>
                            <p class="font-14 font-medium">
                                {{ $t('cloud_what_7') }}
                            </p>
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

        <!-- CTA (Connecting Business)-->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">
                        {{ $t('cloud_connecting_1') }}
                    </h2>
                    <p class="font-16 font-medium text-c-white">
                        {{ $t('cloud_connecting_2') }}
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('cloud_connecting_3') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('cloud_connecting_4') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('cloud_connecting_5') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('cloud_connecting_6') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('cloud_connecting_7') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('cloud_connecting_8') }}</p>
                        </div>
                    </div>

                    <a href="#forms" class="btn">{{ $t('cloud_connecting_9') }}</a>
                </div>
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Join The Future)-->
        <section class="section">
            <div class="div">
                <div
                    class="flex w-full flex-col justify-between gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]"
                >
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('cloud_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('cloud_cta_2') }}
                        </p>
                        <a href="#forms" class="btn xl:w-fit">{{ $t('cloud_cta_3') }}</a>
                    </div>
                    <img src="/img/call.webp" alt="Image" />
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
// seo
useSeoMeta({
    title: 'Say Goodbye to the High Maintenance and Outdated Telephone Systems',
    description:
        'Still use outdated telephone system with higher maintenance? No way! Upgrade to a modern designed of communication and boost the efficiency.',
});

// page route
defineI18nRoute({
    paths: {
        en: '/service/cloud-pbx-installation',
        id: '/layanan/jasa-pasang-cloud-pbx',
    },
});
</script>
