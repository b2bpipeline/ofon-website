<template>
    <section class="section bg-c-white pt-[0]">
        <div class="div flex flex-col gap-[34px]">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'w-full basis-full' }" arrows>
                <div
                    class="card-hover flex w-full flex-col gap-[30px] rounded-2xl bg-c-yellow-light p-[24px] xl:m-[20px] xl:p-[40px]"
                >
                    <div class="flex grid-cols-2 flex-col items-center gap-[24px] xl:grid xl:gap-[32px]">
                        <div class="flex flex-col items-start gap-[24px]">
                            <p class="font-16 font-semibold">{{ $t('c_casestudy_1') }}</p>
                            <p class="font-32 font-bold xl:text-[32px]">
                                {{ item.name }}
                            </p>
                            <a href="#forms" class="btn-outline w-fit"> {{ $t('c_casestudy_2') }}</a>
                        </div>
                        <img :src="item.image" alt="Image" />
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n();
const name1 = ref(t('comp_casestudy_name_1'));
const name2 = ref(t('comp_casestudy_name_2'));
const name3 = ref(t('comp_casestudy_name_3'));
const name4 = ref(t('comp_casestudy_name_4'));

const items = [
    {
        name: name1,
        image: '/img/case-study1.webp',
    },
    {
        name: name2,
        image: '/img/case-study2.webp',
    },
    {
        name: name3,
        image: '/img/case-study3.webp',
    },
    {
        name: name4,
        image: '/img/case-study4.webp',
    },
];
</script>
