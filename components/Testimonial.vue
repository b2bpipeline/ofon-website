<template>
    <section class="section bg-c-white">
        <div class="div flex flex-col gap-[34px]">
            <div class="text-center">
                <p class="font-14 text-c-orange mb-[8px] font-bold">TESTIMONIALS</p>
                <p class="font-32 text-c-black font-bold">Hear It Directly from Our Happy Clients</p>
            </div>
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'w-full basis-full xl:basis-1/3' }" arrows>
                <div class="border-c-orange card-hover flex flex-col gap-[30px] rounded-2xl border-[2px] p-[24px] xl:m-[20px]">
                    <div class="flex w-full items-start justify-between">
                        <img :src="item.avatar" alt="" class="w-[48px] xl:w-[72px]" />
                        <img src="/img/semicolon.png" alt="" class="w-[36px] xl:w-[44px]" />
                    </div>
                    <div>
                        <p class="font-14">
                            {{ item.testimoinal }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-[4px]">
                        <p class="font-16 font-bold">{{ item.name }}</p>
                        <p class="font-12">{{ item.companies }}</p>
                        <img src="/img/star.png" alt="" class="w-fit" />
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        name: 'Alexandre Wong',
        companies: 'PGN',
        testimoinal:
            'Really great to work with Ofon! Such a great opportunity to find automatic telecommunication, make it easy, simple and effective.',
        avatar: '/img/avatar1.png',
    },
    {
        name: 'Alexandre Wong',
        companies: 'MATAHARI',
        testimoinal:
            'Before Ofon we find it’s hard to managet our internal communication yet also the expensive services. But after we find Ofon, everything become All-In-One solution. ',
        avatar: '/img/avatar2.png',
    },
    {
        name: 'Alexandre Wong',
        companies: 'Tiket.com',
        testimoinal: 'Good job for Ofon and team. To make our communication through everything became timeless and efficient. ',
        avatar: '/img/avatar3.png',
    },
    {
        name: 'Alexandre Wong',
        companies: 'PGN',
        testimoinal:
            'Really great to work with Ofon! Such a great opportunity to find automatic telecommunication, make it easy, simple and effective.',
        avatar: '/img/avatar1.png',
    },
    {
        name: 'Alexandre Wong',
        companies: 'MATAHARI',
        testimoinal:
            'Before Ofon we find it’s hard to managet our internal communication yet also the expensive services. But after we find Ofon, everything become All-In-One solution. ',
        avatar: '/img/avatar2.png',
    },
];
</script>
