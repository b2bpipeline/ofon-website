<template>
    <main>
        <!-- Section -->
        <section class="section bg-[#ffffff]">
            <div class="div">
                <img src="/img/page-meeting-room.webp" alt="Image" />
            </div>
        </section>

        <!-- Litebiz -->
        <section class="section bg-[#ffffff]">
            <div class="div">
                <img src="/img/litebiz.webp" alt="Image" />
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
