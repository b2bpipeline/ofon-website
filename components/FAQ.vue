<template>
    <!-- FAQ -->
    <section data-aos="fade-up" class="section bg-yellow-light">
      <div
        class="div flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:items-center xl:gap-[60px]"
      >
        <p class="font-32 font-bold">Frequently Asked Questions</p>
        <div class="flex flex-col gap-[24px] xl:col-span-3">
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >Who is Ofon?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              Starting as a fixed-line telephone service tied to geographical
              area codes, Ofon has evolved into an IP-based fixed-line service.
              It is continuously developed and managed to stay relevant and
              adaptable to the telecommunications needs of businesses and modern
              lifestyles.
              <br />
              <br />
              Currently, Ofon is developing cloud-based IP PBX phone systems and
              managed service PBX solutions to meet Indonesia's telephony needs,
              aiming to become the all-in-one unified telephony system the
              country requires.
            </dd>
          </faq>
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >Why Ofon is the ideal telephony solution for my company?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              Ofon offers the best unified telephony system solution in
              Indonesia, tailored to meet your business's telecommunications
              needs. With over 28 years of experience, we have a proven track
              record and have assisted more than 3,299 clients across 17 cities
              in Indonesia, helping them stay current with technological
              advancements and enhancing their company's efficiency and mobility
              for greater productivity.
              <br /><br />
              Our services include migration from on-premises PaBX to Cloud PBX,
              SIP Trunk optimization, integration of various communication
              platforms, and PBX system maintenance. Still have doubts? Contact
              us today!
            </dd>
          </faq>
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >How much does it cost to use ofon products and services?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              The costs vary depending on the telephony system needs required to
              create efficiency in telecommunications. However, in the long run,
              Ofon can help you save up to 70% compared to the increasing and
              outdated on-premises legacy telecommunication system expenses.
            </dd>
          </faq>
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >If I have been using another PBX, can I connect to Ofon Cloud
                PBX?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              Certainly, with Ofon cloud-based IP PBX telephone system, we can
              help connect your existing PBX system to various devices such as
              laptops, smartphones, and computers across Indonesia, or to other
              platforms like Zoom, Microsoft Teams, Webex, and many more— the
              possibilities are limitless. Therefore, we confidently offer
              ourselves as your unified telephony solution in Indonesia for all
              your needs.
            </dd>
          </faq>
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >Can I use Ofon for all my company branches?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              Yes, you can. Installing the Ofon cloud-based IP PBX system for
              your company branches makes maintenance easier and, of course,
              saves costs by over 70% compared to on-premises PBX systems, while
              also being more efficient.
            </dd>
          </faq>
          <faq
            class="rounded-xl border-[2px] border-solid border-orange bg-white px-[16px] py-[26px]"
          >
            <dt
              class="flex cursor-pointer items-center justify-between text-xl font-semibold"
              onclick="toggleAnswer(this)"
            >
              <span class="font-14 font-semibold leading-normal"
                >My cloud PBX is still compatible, but I don’t have team to
                maintain this. What should I do?</span
              >
              <img src="/img/chevron.png" alt="" />
            </dt>
            <dd class="font-12 mt-2 hidden">
              Don't worry. With Ofon's Managed Service, your PBX issues will
              always be taken care of. We have expert technicians who can
              install, repair, and maintain your cloud PBX, regardless of the
              specific vendor.
            </dd>
          </faq>
        
        </div>
      </div>
    </section>
</template>

<script>
    function toggleAnswer(element) {
      const answer = element.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    }
</script>