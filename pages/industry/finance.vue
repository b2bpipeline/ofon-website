<template>
    <main>
        <!-- Coming Soon -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col items-start gap-[16px] xl:gap-[24px]">
                    <p class="font-36 font-bold text-c-black xl:font-semibold">Coming Soon!</p>
                    <p class="font-16 font-medium">URL: {{ route.path }}</p>
                    <div class="grid w-full grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <NuxtLink to="/" class="btn-outline w-full">{{ $t('thankyou_3') }}</NuxtLink>
                        <WhatsAppUs />
                    </div>
                </div>
                <img src="/img/thankyou.webp" alt="Image" />
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
// defineI18nRoute({
//     paths: {
//         en: '/industry/finance/',
//         id: '/industri/finance/',
//     },
// });
</script>
