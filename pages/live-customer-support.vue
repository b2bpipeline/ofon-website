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
const title = ref(t('live_customer_service_title'));
const description = ref(t('live_customer_service_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
defineI18nRoute({
    paths: {
        en: '/live-customer-support/',
        id: '/live-customer-support/',
    },
});
</script>
