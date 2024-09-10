<template>
    <section class="section bg-c-white">
        <div class="div flex flex-col gap-[34px]">
            <div class="text-center">
                <h2 class="font-14 mb-[8px] font-bold text-c-orange">{{ $t('c_testimonial_1') }}</h2>
                <p class="font-32 font-bold text-c-black">{{ $t('c_testimonial_2') }}</p>
            </div>
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'w-full basis-full' }">
                <div
                    class="card-hover flex w-full flex-col gap-[30px] rounded-2xl border-[2px] border-c-orange p-[24px] xl:m-[20px]"
                >
                    <div class="flex w-full items-start justify-between">
                        <img :src="item.avatar" class="w-[48px] rounded-full xl:w-[72px]" alt="Image" />
                        <img src="/img/semicolon.webp" alt="Image" class="w-[36px] xl:w-[44px]" />
                    </div>
                    <div>
                        <p class="font-14">
                            {{ item.testimonial }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-[4px]">
                        <p class="font-16 font-bold">{{ item.name }}</p>
                        <p class="font-12">{{ item.companies }}</p>
                        <img src="/img/star.webp" alt="Image" class="w-fit" />
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n();
const name1 = ref(t('comp_testi_name_1'));
const companies1 = ref(t('comp_testi_companies_1'));
const testimonial1 = ref(t('comp_testi_testimonial_1'));

const items = [
    {
        name: name1,
        companies: companies1,
        testimonial: testimonial1,
        avatar: '/img/avatar1.webp',
    },
];
</script>
