<template>
    <section data-aos="fade-up" class="section bg-c-yellow-light">
        <div class="div flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:items-center xl:gap-[60px]">
            <p class="font-32 font-bold">{{ $t('c_faq_1') }}</p>
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
                            <span class="font-14 text-left font-semibold">
                                {{ item.label }}
                            </span>

                            <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="ms-auto h-5 w-5 transform transition-transform duration-200"
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
const items = [
    {
        label: 'Who is Ofon?',
        defaultOpen: true,
        content: `Starting as a fixed-line telephone service tied to geographical area codes, Ofon has evolved into an IP-based fixed-line service. It is continuously developed and managed to stay relevant and adaptable to the telecommunications needs of businesses and modern lifestyles.
            
        Currently, Ofon is developing cloud-based IP PBX phone systems and managed service PBX solutions to meet Indonesia's telephony needs, aiming to become the all-in-one unified telephony system the country requires.`,
    },
    {
        label: 'Why Ofon is the ideal telephony solution for my company?',
        content: `Ofon offers the best unified telephony system solution in Indonesia, tailored to meet your business's telecommunications needs. With over 28 years of experience, we have a proven track record and have assisted more than 3,299 clients across 17 cities in Indonesia, helping them stay current with technological advancements and enhancing their company's efficiency and mobility for greater productivity. 

        Our services include migration from on-premises PaBX to Cloud PBX, SIP Trunk optimization, integration of various communication platforms, and PBX system maintenance. Still have doubts? Contact us today! `,
    },
    {
        label: 'How much does it cost to use ofon products and services?',
        content: `The costs vary depending on the telephony system needs required to create efficiency in telecommunications. However, in the long run, Ofon can help you save up to 60% compared to the increasing and outdated on-premises legacy telecommunication system expenses.`,
    },
    {
        label: 'If I have been using another PBX, can I connect to Ofon Cloud PBX?',
        content: `Certainly, with Ofon cloud-based IP PBX telephone system, we can help connect your existing PBX system to various devices such as laptops, smartphones, and computers across Indonesia, or to other platforms like Zoom, Microsoft Teams, Webex, and many more— the possibilities are limitless. Therefore, we confidently offer ourselves as your unified telephony solution in Indonesia for all your needs.`,
    },
    {
        label: 'Can I use Ofon for all my company branches?',
        content: `Yes, you can. Installing the Ofon cloud-based IP PBX system for your company branches makes maintenance easier and, of course, saves costs by over 60% compared to on-premises PBX systems, while also being more efficient.`,
    },
    {
        label: 'My cloud PBX is still compatible, but I don’t have team to maintain this. What should I do?',
        content: `Don't worry. With Ofon's Managed Service, your PBX issues will always be taken care of. We have expert technicians who can install, repair, and maintain your cloud PBX, regardless of the specific vendor.`,
    },
];
</script>
