<template>
    <main>
    <!-- Navbar -->
    <Navbar/>

    <!-- Hero -->
    <section data-aos="fade-up" class="section bg-white pb-0 pt-[40px]">
      <div
        class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0"
      >
        <div class="flex flex-col gap-6 xl:max-w-[480px]">
          <h1 class="font-36 font-bold xl:font-semibold">
            Simplified Communication with Advanced Solutions
          </h1>
          <p class="font-16 font-medium">
            Need to maximize productivity and minimize cost business
            telecommunications?
          </p>
          <div class="flex gap-2 xl:gap-4">
            <p class="font-16 font-bold">Certified Engineer by</p>
            <img src="/img/microsoft.png" alt="" class="" />
          </div>
          <a href="/" class="btn">Contact Us</a>
        </div>
        <div><img src="/img/hero-lp-1.png" alt="" /></div>
      </div>
    </section>

    <!-- Logo -->
    <section data-aos="fade-up" class="section bg-yellow-light py-[40px]">
      <div
        class="mx-auto flex w-full flex-col justify-between gap-[24px] px-[16px] sm:max-xl:max-w-[640px] xl:px-[120px]"
      >
        <p
          class="text-center font-body text-base font-bold text-black xl:text-xl"
        >
          Helping Many Companies for Better Communication
        </p>
        <div
          class="mx-auto flex max-w-full items-center gap-4 overflow-scroll xl:w-full xl:justify-between"
        >
          <img src="/img/logo-1.png" alt="" class="h-fit" />
          <img src="/img/logo-2.png" alt="" class="h-fit" />
          <img src="/img/logo-3.png" alt="" class="h-fit" />
          <img src="/img/logo-4.png" alt="" class="h-fit" />
          <img src="/img/logo-5.png" alt="" class="h-fit" />
          <img src="/img/logo-6.png" alt="" class="h-fit" />
          <img src="/img/logo-7.png" alt="" class="h-fit" />
          <img src="/img/logo-8.png" alt="" class="h-fit" />
        </div>
      </div>
    </section>

    <!-- Why We're Here -->
    <section data-aos="fade-up" class="section">
      <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
        <div class="flex flex-col gap-[24px] text-center">
          <h2 class="font-32 font-bold text-orange">Why We’re Here?</h2>
          <p class="font-16">
            In the last decade,
            <span class="font-bold">over 40% of mid-level companies</span> have
            faced major communication challenges due to outdated technology.
            On-premise PBX is no longer sufficient and we’re here with the
            solution to upgrade your telecommunication system.
          </p>
        </div>
        <div
          class="flex flex-col gap-[24px] text-center xl:flex-row xl:gap-[80px]"
        >
          <div class="flex flex-col gap-[24px]">
            <p class="font-20 font-bold">On-premise PBX</p>
            <img src="/img/pbx2.png" alt="" />
          </div>
          <div class="flex flex-col gap-[24px]">
            <p class="font-20 font-bold">Ofon Cloud PBX</p>
            <img src="/img/pbx1.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- We Make Communication -->
    <section data-aos="fade-up" class="section bg-brown">
      <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
        <h2 class="font-32 text-center font-bold text-white xl:font-semibold">
          We Make Your Communication More Efficient
        </h2>
        <div class="flex flex-col gap-[24px] xl:flex-row xl:gap-[60px]">
          <div class="flex flex-col gap-[24px] rounded-xl bg-white p-[24px]">
            <img
              src="/img/feature1.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">Cost Reduction</p>
              <p class="font-14 font-medium">
                Significant cost savings by offering reductions of up to 50% to 70% compared to the fees charged by other providers.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-[24px] rounded-xl bg-white p-[24px]">
            <img
              src="/img/feature2.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">Saving Efficiently</p>
              <p class="font-14 font-medium">
                Reduce maintenance costs and make you save significantly while maintaining high standards of service.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-[24px] rounded-xl bg-white p-[24px]">
            <img
              src="/img/feature3.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">Hardware Elimination</p>
              <p class="font-14 font-medium">
                Say goodbye to hardware hassles and enjoy a seamless, worry-free experience with our advanced solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Services -->
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <div class="">
          <p
            class="font-32 mb-[16px] font-bold text-orange xl:mb-[24px] xl:font-semibold"
          >
            Ofon PBX
          </p>
          <p class="font-14 font-medium">
            Unify all branches and user extensions into a single,
            enterprise-class telephony system with Ofon's Software as a Service
            (SaaS) solution.
          </p>
        </div>
        <img src="/img/service1.png" alt="" />
      </div>
    </section>
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <div class="xl:order-1">
          <p
            class="font-32 mb-[16px] font-bold text-orange xl:mb-[24px] xl:font-semibold"
          >
            Ofon SIP Trunk
          </p>
          <p class="font-14 font-medium">
            Streamline your existing telephone connections and reduce costs with
            our efficient SIP Trunking service.
          </p>
        </div>
        <img src="/img/service2.png" alt="" />
      </div>
    </section>
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <div class="">
          <p
            class="font-32 mb-[16px] font-bold text-orange xl:mb-[24px] xl:font-semibold"
          >
            Managed Service
          </p>
          <p class="font-14 font-medium">
            Optimize your budget by outsourcing the operation, maintenance, and
            management of your telephony infrastructure to our expert team.
          </p>
        </div>
        <img src="/img/service3.png" alt="" />
      </div>
    </section>

    <!-- Supported Technology -->
    <section data-aos="fade-up" class="section bg-yellow-light py-[40px]">
      <div
        class="mx-auto flex w-full flex-col justify-between gap-[24px] px-[16px] sm:max-xl:max-w-[640px] xl:px-[120px]"
      >
        <p
          class="text-center font-body text-base font-bold text-black xl:text-xl"
        >
          Supported Technology
        </p>
        <div
          class="mx-auto flex max-w-full items-center gap-4 overflow-scroll xl:w-full xl:justify-between"
        >
          <img src="/img/techlogo-1.png" alt="" class="h-fit" />
          <img src="/img/techlogo-2.png" alt="" class="h-fit" />
          <img src="/img/techlogo-3.png" alt="" class="h-fit" />
          <img src="/img/techlogo-4.png" alt="" class="h-fit" />
          <img src="/img/techlogo-5.png" alt="" class="h-fit" />
          <img src="/img/techlogo-6.png" alt="" class="h-fit" />
        </div>
      </div>
    </section>

    <!-- See How Much -->
    <section data-aos="fade-up" class="section">
      <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
        <div class="flex flex-col gap-[24px] text-center">
          <h2 class="font-32 font-bold text-black">
            See How Much You Can Save by Upgrading to Cloud PBX
          </h2>
          <p class="font-16">
            Compare the budget to understand how you can efficiently improve the
            way your company communicates.
            <span class="font-bold"
              >Assumed installation for 10 branch offices with 10 DID 10 CC
              offices each.</span
            >
          </p>
        </div>
        <div
          class="xl:gap-[40 px] flex flex-col gap-[24px] text-center xl:flex-row xl:items-center"
        >
          <div class="flex flex-col gap-[24px]">
            <img src="/img/chartmobile1.png" alt="" class="xl:hidden" />
            <img
              src="/img/chartdesktop1.png"
              alt=""
              class="hidden xl:flex"
            />
          </div>
          <p class="font-32 font-bold text-orange">VS</p>
          <div class="flex flex-col gap-[24px]">
            <img src="/img/chartmobile2.png" alt="" class="xl:hidden" />
            <img
              src="/img/chartdesktop2.png"
              alt=""
              class="hidden xl:flex"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA (Connecting Business) -->
    <section data-aos="fade-up" class="section bg-brown">
      <div
        class="div flex-col justify-between gap-10 xl:flex-row xl:items-center"
      >
        <div class="flex flex-col gap-6 xl:max-w-[480px]">
          <h2 class="font-32 font-bold text-white xl:font-semibold">
            Connecting Business Communication Across the Island
          </h2>
          <p class="font-16 font-medium text-white">
            Our services give all across the places to connect and grow
            businesses strongly.
          </p>
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <p class="font-32 text-center font-bold text-yellow">20</p>
              <p class="font-14 text-center font-bold text-white">Big Cities</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="font-32 text-center font-bold text-yellow">3299</p>
              <p class="font-14 text-center font-bold text-white">Customers</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="font-32 text-center font-bold text-yellow">28+</p>
              <p class="font-14 text-center font-bold text-white">
                Years Experience
              </p>
            </div>
          </div>

          <a href="/" class="btn">Contact Us</a>
        </div>
        <div><img src="/img/indonesia.png" alt="" /></div>
      </div>
    </section>

    <!-- Testimonial -->
    <section data-aos="fade-up" class="section bg-white">
      <div class="div flex flex-col gap-[34px]">
        <div class="text-center">
          <p class="font-14 mb-[8px] font-bold text-orange">TESTIMONIALS</p>
          <p class="font-32 font-bold text-black">
            Hear It Directly from Our Happy Clients
          </p>
        </div>
        <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3">
          <div
            class="flex flex-col gap-[30px] rounded-2xl border-[2px] border-orange p-[24px]"
          >
            <div class="flex w-full items-start justify-between">
              <img
                src="/img/avatar1.png"
                alt=""
                class="w-[48px] xl:w-[72px]"
              />
              <img
                src="/img/semicolon.png"
                alt=""
                class="w-[36px] xl:w-[44px]"
              />
            </div>
            <div>
              <p class="font-14">
                Really great to work with Ofon! Such a great opportunity to find
                automatic telecommunication, make it easy, simple and effective.
              </p>
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="font-16 font-bold">Alexandre Wong</p>
              <p class="font-12">PGN</p>
              <img src="/img/star.png" alt="" class="w-fit" />
            </div>
          </div>
          <div
            class="flex flex-col gap-[30px] rounded-2xl border-[2px] border-orange p-[24px]"
          >
            <div class="flex w-full items-start justify-between">
              <img
                src="/img/avatar2.png"
                alt=""
                class="w-[48px] xl:w-[72px]"
              />
              <img
                src="/img/semicolon.png"
                alt=""
                class="w-[36px] xl:w-[44px]"
              />
            </div>
            <div>
              <p class="font-14">
                Before Ofon we find it’s hard to managet our internal
                communication yet also the expensive services. But after we find
                Ofon, everything become All-In-One solution.
              </p>
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="font-16 font-bold">Alexandre Wong</p>
              <p class="font-12">MATAHARI</p>
              <img src="/img/star.png" alt="" class="w-fit" />
            </div>
          </div>
          <div
            class="flex flex-col gap-[30px] rounded-2xl border-[2px] border-orange p-[24px]"
          >
            <div class="flex w-full items-start justify-between">
              <img
                src="/img/avatar3.png"
                alt=""
                class="w-[48px] xl:w-[72px]"
              />
              <img
                src="/img/semicolon.png"
                alt=""
                class="w-[36px] xl:w-[44px]"
              />
            </div>
            <div>
              <p class="font-14">
                Good job for Ofon and team. To make our communication through
                everything became timeless and efficient.
              </p>
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="font-16 font-bold">Alexandre Wong</p>
              <p class="font-12">Tiket.com</p>
              <img src="/img/star.png" alt="" class="w-fit" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA (Avoid Misunderstandings) -->
    <section data-aos="fade-up" class="section">
      <div class="div">
        <div
          class="flex flex-col gap-[24px] rounded-xl bg-brown p-[24px] xl:flex-row xl:p-[42px]"
        >
          <div class="flex flex-col gap-[24px]">
            <p class="font-32 font-semibold text-white">
              Avoid Misunderstandings and Switch with Ofon!</p>
            <p class="font-16 text-white">
              Need to change the way your business communicate?
            </p>
            <a href="/" class="btn xl:w-fit">Contact Us</a>
          </div>
          <img src="/img/call.png" alt="" />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FAQ/>

    <!-- Footer -->
    <Footer/>

    </main>
</template>

