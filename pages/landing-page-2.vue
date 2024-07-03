<template>
    <main>    
    <!-- Navbar -->
    <Navbar/>

    <!-- Hero -->
    <section
      data-aos="fade-up"
      class="section bg-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/background.png')] xl:bg-cover"
    >
      <div
        class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center"
      >
        <div
          class="items-start-center flex flex-col gap-6 text-center xl:max-w-[640px]"
        >
          <h1 class="font-36 font-bold xl:font-semibold">
            Say Goodbye to the High Maintenance and Outdated Telephone Systems
          </h1>
          <p class="font-16 font-medium">
            Still use outdated telephone system with higher maintenance? No way!
            Upgrade to a modern designed of communication and boost the
            efficiency.
          </p>
          <div class="flex justify-center gap-2 xl:gap-3">
            <p class="font-16 font-bold">Certified Engineer by</p>
            <img src="/img/microsoft.png" alt="" class="" />
          </div>
          <a href="/" class="btn mx-auto w-fit">Contact Us</a>
        </div>
      </div>
      <img
        src="/img/hero.png"
        alt=""
        class="mx-auto w-full max-w-[640px] xl:hidden"
      />
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

    <!-- A Compled Cloud PBX -->
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <div class="flex flex-col gap-[16px] xl:gap-[24px]">
          <p class="font-32 font-bold text-orange xl:font-semibold">
            A Complete Cloud PBX Solution & Support
          </p>
          <p class="font-14 font-medium">
            Don't risk non-compliance due to an unreliable phone system. Upgrade
            to a complete compliant solution that meets all necessary standards,
            giving you peace of mind and avoiding
            <span class="font-bold">potential risks or issues:</span>
          </p>
          <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
            <div class="flex justify-start gap-4">
              <img src="/img/support1.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">
                Need Protections and Adjustments with IT Security
              </p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/support2.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">
                Worries about Adjusting Device Setting
              </p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/support3.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">
                Disruption and Disconnected Communication
              </p>
            </div>
          </div>
        </div>
        <img src="/img/solution.png" alt="" />
      </div>
    </section>

    <!-- Join The Future -->
    <section data-aos="fade-up" class="section bg-brown xl:bg-white">
      <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
        <div class="xl:rounded-3xl xl:bg-brown xl:p-[50px]">
          <h2 class="font-32 text-center font-bold text-white xl:font-semibold">
            Join the Future of Communication with PBX Solutions
          </h2>
          <div
            class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]"
          >
            <div
              class="flex flex-col items-center gap-[24px] rounded-xl p-[24px]"
            >
              <img
                src="/img/solution1.png"
                alt=""
                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
              />
              <div>
                <p class="font-16 mb-[8px] text-center font-bold text-white">
                  Compliance to IT Security Policies
                </p>
                <p class="font-14 font-regular text-center text-white">
                  Keep digital information safe from threats like hacking or
                  data breaches with proper safety guidelines in a workplace to
                  prevent accidents and keep everyone secure.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col items-center gap-[24px] rounded-xl p-[24px]"
            >
              <img
                src="/img/solution2.png"
                alt=""
                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
              />
              <div>
                <p class="font-16 mb-[8px] text-center font-bold text-white">
                  Adapt to Network Configuration
                </p>
                <p class="font-14 font-regular text-center text-white">
                  Adjusting device settings to fit with the way a network is set
                  up and connects to Wi-Fi.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col items-center gap-[24px] rounded-xl p-[24px]"
            >
              <img
                src="/img/solution3.png"
                alt=""
                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
              />
              <div>
                <p class="font-16 mb-[8px] text-center font-bold text-white">
                  Integrate to Other Softwares & Platform
                </p>
                <p class="font-14 font-regular text-center text-white">
                  Making different programs and systems to work together
                  smoothly. Sharing information and work together, making your
                  tasks easier and more efficient.
                </p>
              </div>
            </div>
          </div>
          <a href="" class="btn mx-auto w-fit">Contact Us</a>
        </div>
      </div>
    </section>

    <!-- 2 Services -->
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <img src="/img/service1.png" alt="" />
        <div class="flex flex-col gap-[16px] xl:gap-[24px]">
          <p class="font-32 font-bold text-orange xl:font-semibold">
            Cloud PBX
          </p>
          <p class="font-14 font-medium">
            Join the league of modern businesses thriving with efficient
            communication solutions. Don't let the fear of missing out on
            streamlined operations hold you back!
          </p>
          <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Work from Anywhere</p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Low Maintenance</p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Seamless Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-aos="fade-up" class="section">
      <div
        class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]"
      >
        <img src="/img/service3.png" alt="" class="xl:order-1" />
        <div class="flex flex-col gap-[16px] xl:gap-[24px]">
          <p class="font-32 font-bold text-orange xl:font-semibold">
            Managed PBX Service
          </p>
          <p class="font-14 font-medium">
            Are you constantly playing catch-up with maintenance tasks for your
            outdated phone system?
          </p>
          <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Call Efficiency</p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Location Flexibility</p>
            </div>
            <div class="flex justify-start gap-4">
              <img src="/img/checklist.png" alt="" class="h-fit" />
              <p class="font-16 font-bold">Monitoring & Analysis</p>
            </div>
          </div>
        </div>
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

    <!-- What Makes Us Different -->
    <section data-aos="fade-up" class="section">
      <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
        <h2 class="font-32 text-center font-bold text-orange xl:font-semibold">
          What Makes Us Different
        </h2>
        <div
          class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]"
        >
          <div
            class="flex flex-col gap-[24px] rounded-xl border-[2px] border-orange bg-white p-[24px]"
          >
            <img
              src="/img/different1.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">
                Modernization of Legacy Systems
              </p>
              <p class="font-14 font-medium">
                We transform outdated phone systems into modern cloud setups,
                ensuring your communication infrastructure is not only up to
                date but also scalable and secure.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col gap-[24px] rounded-xl border-[2px] border-orange bg-white p-[24px]"
          >
            <img
              src="/img/different2.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">Unified Communication</p>
              <p class="font-14 font-medium">
                Our PBX solution tackles the inefficiency of separate platforms
                by offering a single, integrated system that enhances both
                internal and external communications, making the use of
                <span class="font-bold">Zoom, Microsoft Teams, Webex</span> and
                other tools more seamless.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col gap-[24px] rounded-xl border-[2px] border-orange bg-white p-[24px]"
          >
            <img
              src="/img/different3.png"
              alt=""
              class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
            />
            <div>
              <p class="font-16 mb-[8px] font-bold">CPBX Needs Customization</p>
              <p class="font-14 font-medium">
                Recognizing that one size doesn't fit all, we tailor our
                solutions to meet your business specific operational
                requirements, ensuring a seamless transition and integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Save Cost -->
    <section data-aos="fade-up" class="section">
      <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
        <div class="flex flex-col gap-[24px] text-center">
          <h2 class="font-32 font-bold text-black">
            Save Cost Up to 70% by Upgrading to Cloud PBX
          </h2>
          <p class="font-16 mx-auto max-w-[1080px]">
            Analyze the budget to optimize your company's communication
            strategies.
            <span class="font-bold">
              Assumed installation for 10 branch offices with 10 DID 10 CC
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

    <!-- CTA (Connecting Business)-->
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

    <!-- CTA (Join The Future)-->
    <section data-aos="fade-up" class="section">
      <div class="div">
        <div
          class="flex flex-col gap-[24px] rounded-xl bg-brown p-[24px] xl:flex-row xl:p-[42px]"
        >
          <div class="flex flex-col gap-[24px]">
            <p class="font-32 font-semibold text-white">
              Join the Future of Cloud Communication Now!
            </p>
            <p class="font-16 text-white">
              Communicate through place and time with us! Upgrade today to stay
              ahead of the curve and ensure your business thrives.
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