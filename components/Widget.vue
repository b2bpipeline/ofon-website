<script setup>
const { t } = useI18n();
</script>

<template>
    <UPopover
        mode="click"
        class="fixed bottom-[12px] right-[12px] z-50 xl:bottom-[24px] xl:right-[24px]"
        :ui="{
            rounded: 'rounded-2xl',
        }"
    >
        <div class="max-w-[80px] xl:max-w-[100px]">
            <img :src="$t('widget_image')" alt="Image" class="w-fit" />
        </div>

        <template #panel>
            <div class="flex w-fit flex-col gap-[24px] rounded-2xl p-[16px] shadow-2xl xl:min-w-[360px]">
                <div class="flex flex-col">
                    <p class="font-16 font-bold">{{ $t('widget_1') }}</p>
                    <p class="font-12">{{ $t('widget_2') }}</p>
                </div>
                <div class="flex flex-col gap-[16px]">
                    <a
                        href="https://talkto.ofon.id/"
                        class="card-hover flex items-start gap-[8px] rounded-xl border-2 border-c-orange p-[12px] xl:gap-[16px] xl:p-[16px]"
                    >
                        <img src="/img/widget1.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-14 font-bold">{{ $t('widget_3') }}</p>
                            <p class="font-12">{{ $t('widget_4') }}</p>
                        </div>
                    </a>
                    <a
                        href="mailto:customercare@ofon.co.id"
                        class="card-hover flex items-start gap-[8px] rounded-xl border-2 border-c-orange p-[12px] xl:gap-[16px] xl:p-[16px]"
                    >
                        <img src="/img/widget2.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-14 font-bold">Email</p>
                            <p class="font-12">customercare@ofon.co.id</p>
                        </div>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=628111560124&text&type=phone_number&app_absent=0"
                        class="card-hover flex items-start gap-[8px] rounded-xl border-2 border-c-orange p-[12px] xl:gap-[16px] xl:p-[16px]"
                    >
                        <img src="/img/widget3.webp" alt="Image" />
                        <div class="flex flex-col gap-[8px]">
                            <p class="font-14 font-bold">WhatsApp</p>
                            <p class="font-12">+6281-1156-0124</p>
                        </div>
                    </a>
                </div>
            </div>
        </template>
    </UPopover>
</template>
