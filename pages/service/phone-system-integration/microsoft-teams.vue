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
const title = ref(t('service_phone_system_ms_teams_title'));
const description = ref(t('service_phone_system_ms_teams_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page route
// defineI18nRoute({
//     paths: {
//         en: '/service/phone-system-integration/microsoft-teams/',
//         id: '/layanan/integrasi-phone-system/microsoft-teams/',
//     },
// });
</script>
