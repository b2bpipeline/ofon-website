<template>
    <section class="section" id="forms">
        <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
            <div class="flex flex-col">
                <h2 class="font-32 mb-[16px] font-semibold text-c-black xl:mb-[24px] xl:font-semibold">{{ $t('c_forms_1') }}</h2>
                <p class="font-14 font-medium">
                    {{ $t('c_forms_2') }}
                </p>
                <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                    <div class="flex items-center gap-4">
                        <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                        <p class="font-16 font-bold">{{ $t('c_forms_3') }}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                        <p class="font-16 font-bold">{{ $t('c_forms_4') }}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                        <p class="font-16 font-bold">{{ $t('c_forms_5') }}</p>
                    </div>
                </div>
                <div class="mt-[32px] flex flex-col gap-[12px] rounded-xl border-2 border-c-orange p-[24px]">
                    <div class="flex items-start justify-start gap-[8px]">
                        <img src="/img/forms1.webp" alt="Image" />
                        <p class="font-14 font-medium">
                            Menara Batavia Lt. 12A, Jl. K.H. Mas Mansyur No.Kav. 126, Karet Tengsin, Tanah Abang, Kota Jakarta
                            Pusat, Daerah Khusus Ibukota Jakarta 10250
                        </p>
                    </div>
                    <div class="flex items-start justify-start gap-[8px]">
                        <img src="/img/forms2.webp" alt="Image" />
                        <p class="font-14 font-medium">marketing@ofon.co.id</p>
                    </div>
                    <div class="flex items-start justify-start gap-[8px]">
                        <img src="/img/forms3.webp" alt="Image" />
                        <p class="font-14 font-medium">(021) 3971 0000</p>
                    </div>
                </div>
            </div>
            <div class="flex h-full w-full flex-col rounded-xl border-2 border-c-orange p-[16px]">
                <WaitlistForm />
            </div>
        </div>
    </section>
</template>
