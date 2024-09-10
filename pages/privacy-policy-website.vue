<template>
    <main>
        <section class="section">
            <div class="div">
                <div class="w-full rounded-lg border border-gray-500 p-[16px] xl:border-0">
                    <iframe src="privacy-policy.html" class="hidden xl:flex" width="100%" height="7200px"></iframe>
                    <iframe src="privacy-policy.html" class="xl:hidden" width="100%" height="500px"></iframe>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('privacy_policy_website_title'));
const description = ref(t('privacy_policy_website_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
defineI18nRoute(false);
</script>
