<template>
    <main>
        <!-- Section -->
        <section class="section bg-[#ffffff]">
            <div class="div">
                <img src="/img/page-internet.webp" alt="Image" />
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Get A Free) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('home_get_1') }}</p>
                        <p class="font-16 text-c-white">{{ $t('home_get_2') }}</p>
                        <a href="#forms" class="btn xl:w-fit"> {{ $t('home_get_cta') }}</a>
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
const route = useRoute();

// seo
useSeoMeta({
    title: 'Page',
    description: 'Page',
});

// page routing
defineI18nRoute({
    paths: {
        en: '/product/internet',
        id: '/produk/internet',
    },
});
</script>
