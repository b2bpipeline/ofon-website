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
const route = useRoute();

// seo
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('service_title'));
const description = ref(t('service_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/service/',
//         id: '/layanan/',
//     },
// });
</script>
