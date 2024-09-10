<template>
    <main>
        <!-- Section -->
        <section class="section bg-[#ffffff]">
            <div class="div">
                <img src="/img/privacy-policy-telfon.webp" alt="Image" />
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('privacy_policy_app_title'));
const description = ref(t('privacy_policy_app_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
defineI18nRoute(false);
</script>
