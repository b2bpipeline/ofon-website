<template>
    <section class="section bg-c-white pt-[0]">
        <div class="div flex flex-col gap-[34px]">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'w-full basis-full' }" arrows>
                <div
                    class="card-hover flex w-full flex-col gap-[30px] rounded-2xl bg-c-yellow-light p-[24px] xl:m-[20px] xl:p-[40px]"
                >
                    <div class="flex grid-cols-2 flex-col items-center gap-[24px] xl:grid xl:gap-[32px]">
                        <div class="flex flex-col items-start gap-[24px]">
                            <p class="font-16 font-semibold">Featured Case Study</p>
                            <p class="font-32 font-bold xl:text-[32px]">
                                {{ item.name }}
                            </p>
                            <a href="#forms" class="btn-outline w-fit">Read Case Study</a>
                        </div>
                        <img :src="item.image" alt="Image" />
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        name: 'Migration to Cloud PBX to Adopt the Unified Communications System',
        image: '/img/case-study1.webp',
    },
    {
        name: 'Cisco PBX Phone System Integration with Microsoft Teams',
        image: '/img/case-study2.webp',
    },
    {
        name: 'Upgrading Outdated Phone System without Changing the Existing Numbers',
        image: '/img/case-study3.webp',
    },
    {
        name: 'Implement Cloud PBX & Softphones for Cost Efficiency & Scalability',
        image: '/img/case-study4.webp',
    },
];
</script>
