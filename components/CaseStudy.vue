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
                            <!-- <a href="#forms" class="btn-outline w-fit"> {{ $t('c_casestudy_2') }}</a> -->
                        </div>
                        <div class="flex flex-col gap-[30px] rounded-xl border-2 border-c-orange bg-c-white p-[24px]">
                            <div class="flex flex-row items-center justify-between">
                                <img :src="item.image" alt="Image" />
                                <img src="/img/arrows.webp" alt="Image" />
                            </div>
                            <p class="font-14">{{ item.content }}</p>
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">{{ item.company }}</p>
                                <p class="font-14">{{ item.location }}</p>
                            </div>
                        </div>
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
const content1 = ref(t('comp_casestudy_content_1'));
const content2 = ref(t('comp_casestudy_content_2'));
const content3 = ref(t('comp_casestudy_content_3'));
const content4 = ref(t('comp_casestudy_content_4'));

const items = [
    {
        name: name1,
        content: content1,
        company: 'PT Pertamina Gas Negara',
        location: 'Jakarta, Indonesia',
        image: '/img/logo-case-study1.webp',
    },
    {
        name: name2,
        content: content2,
        company: 'PT Bursa Efek Indonesia',
        location: 'Jakarta, Indonesia',
        image: '/img/logo-case-study2.webp',
    },
    {
        name: name3,
        content: content3,
        company: 'Rumah Sakit Indriati',
        location: 'Solo, Indonesia',
        image: '/img/logo-case-study3.webp',
    },
    {
        name: name4,
        content: content4,
        company: 'JAC Recruitment',
        location: 'Jakarta, Indonesia',
        image: '/img/logo-case-study4.webp',
    },
];
</script>
