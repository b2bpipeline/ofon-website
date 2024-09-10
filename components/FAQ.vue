<template>
    <section class="section bg-c-yellow-light">
        <div class="div flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:items-center xl:gap-[60px]">
            <h2 class="font-32 font-bold">{{ $t('c_faq_1') }}</h2>
            <div class="flex flex-col gap-[24px] xl:col-span-3">
                <UAccordion
                    :items="items"
                    :ui="{
                        wrapper: 'gap-[16px]',
                        container: 'border-c-orange bg-c-white rounded-xl border-[2px] border-solid px-[16px] py-[26px] font-24',
                        item: {
                            padding: 'px-2',
                        },
                    }"
                    class="font-body"
                >
                    <template #default="{ item, open }">
                        <UButton color="white" variant="ghost">
                            <span class="font-14 faq-label text-left font-semibold">
                                {{ item.label }}
                            </span>

                            <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="faq-text ms-auto h-5 w-5 transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                            </template>
                        </UButton>
                    </template>
                </UAccordion>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const label1 = ref(t('comp_faq_label_1'));
const content1 = ref(t('comp_faq_content_1'));
const label2 = ref(t('comp_faq_label_2'));
const content2 = ref(t('comp_faq_content_2'));
const label3 = ref(t('comp_faq_label_3'));
const content3 = ref(t('comp_faq_content_3'));
const label4 = ref(t('comp_faq_label_4'));
const content4 = ref(t('comp_faq_content_4'));
const label5 = ref(t('comp_faq_label_5'));
const content5 = ref(t('comp_faq_content_5'));
const label6 = ref(t('comp_faq_label_6'));
const content6 = ref(t('comp_faq_content_6'));

const items = [
    {
        label: label1,
        defaultOpen: true,
        content: content1,
    },
    {
        label: label2,
        content: content2,
    },
    {
        label: label3,
        content: content3,
    },
    {
        label: label4,
        content: content4,
    },
    {
        label: label5,
        content: content5,
    },
    {
        label: label6,
        content: content6,
    },
];
</script>

<style scoped>
.faq-label {
    font-size: 20px;
}
.pb-3 {
    font-size: 16px;
    font-family: 'Montserrat';
}
@media only screen and (max-width: 480px) {
    .faq-label {
        font-size: 16px;
    }
    .pb-3 {
        font-size: 14px;
    }
}
</style>
