<template>
    <main>
        <!-- Placeholder -->
        <section class="section">
            <div class="div">
                <h1 class="font-36">{{ route.path }}</h1>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('service_yeastar_title'));
const description = ref(t('service_yeastar_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/service/pbx-maintenance-service-support/yeastar/',
//         id: '/layanan/jasa-maintenance-pbx/yeastar/',
//     },
// });
</script>
