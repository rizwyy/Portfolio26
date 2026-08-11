<script setup lang="ts">
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  MoveRight,
} from "lucide-vue-next";

const projects = [
  {
    no: "01",
    title: "SaaS Waste Detector",
    type: "Product intelligence / 2026",
    description:
      "A focused Nuxt product for finding forgotten subscriptions and turning recurring software spend into clear action.",
    stack: ["Nuxt", "Vue", "TypeScript"],
    url: "https://github.com/rizwyy/saas-waste-detector",
    accent: "#c7ff18",
  },
  {
    no: "02",
    title: "Water Round",
    type: "Operations platform / 2026",
    description:
      "A Vue-powered field workflow that makes everyday water-round operations feel fast, legible, and surprisingly calm.",
    stack: ["Vue", "JavaScript", "Workflow UX"],
    url: "https://github.com/rizwyy/water-round-app",
    accent: "#8de1ff",
  },
  {
    no: "03",
    title: "Riz Carlton",
    type: "Digital experience / 2024",
    description:
      "An Astro experiment balancing a playful concept with quick loading, bold art direction, and clean frontend craft.",
    stack: ["Astro", "Motion", "Creative Dev"],
    url: "https://github.com/rizwyy/riz-carlton",
    accent: "#ff805d",
  },
];

const tools = [
  "NUXT",
  "VUE",
  "TYPESCRIPT",
  "GSAP",
  "TAILWIND",
  "NODE",
  "ASTRO",
  "GIT",
];
const year = new Date().getFullYear();

onMounted(async () => {
  const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("lenis"),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const intro = gsap.timeline();
  intro
    .to(".loader-line", { scaleX: 1, duration: 0.75, ease: "power3.inOut" })
    .to(
      ".loader-count",
      {
        textContent: 100,
        duration: 0.75,
        snap: { textContent: 1 },
        ease: "none",
      },
      0,
    )
    .to(".loader", {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.1,
    })
    .from(
      ".hero-reveal",
      { yPercent: 110, duration: 1.15, stagger: 0.08, ease: "power4.out" },
      "-=.45",
    )
    .from(
      ".portrait-wrap",
      { clipPath: "inset(100% 0 0 0)", duration: 1.3, ease: "power4.inOut" },
      "-=1.1",
    );

  gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
    gsap.from(element, {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 86%" },
    });
  });

  gsap.to(".portrait-image", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".progress-bar", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
  });

  const pointer = document.querySelector<HTMLElement>(".cursor-dot");
  const halo = document.querySelector<HTMLElement>(".cursor-halo");
  if (pointer && halo && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("pointermove", (event) => {
      gsap.to(pointer, { x: event.clientX, y: event.clientY, duration: 0.08 });
      gsap.to(halo, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    });
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("is-hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("is-hovering"),
      );
    });
  }
});
</script>

<template>
  <div class="site-shell bg-ink text-bone">
    <div
      class="loader fixed inset-0 z-[100] flex flex-col justify-between bg-acid p-6 text-ink md:p-10"
    >
      <div
        class="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.18em]"
      >
        <span>Riswin / Portfolio</span><span>Loading the good stuff</span>
      </div>
      <div>
        <div
          class="loader-count font-sans text-[28vw] font-extrabold leading-[.72] tracking-[-.09em]"
        >
          0
        </div>
        <div class="mt-7 h-px bg-black/20">
          <div class="loader-line h-full origin-left scale-x-0 bg-ink" />
        </div>
      </div>
    </div>

    <div
      class="progress-bar fixed left-0 top-0 z-[90] h-[3px] w-full origin-left scale-x-0 bg-acid"
    />
    <div
      class="cursor-dot pointer-events-none fixed left-0 top-0 z-[120] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid lg:block"
    />
    <div
      class="cursor-halo pointer-events-none fixed left-0 top-0 z-[119] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/50 lg:block"
    />

    <header class="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav
        class="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 md:px-10"
      >
        <a
          href="#top"
          class="font-sans text-sm font-extrabold tracking-[-.04em]"
          >RM<span class="text-acid">.</span></a
        >
        <div
          class="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[.16em] md:gap-10"
        >
          <a href="#work" class="nav-link">Work</a>
          <a href="#about" class="nav-link">About</a>
          <a
            href="#contact"
            class="rounded-full border border-white/40 px-4 py-2 transition-colors hover:border-acid hover:text-acid"
            >Let's talk</a
          >
        </div>
      </nav>
    </header>

    <main id="top">
      <section
        class="hero relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pb-10"
      >
        <div
          class="pointer-events-none absolute left-[12%] top-[12%] h-[44rem] w-[44rem] rounded-full bg-acid/[.035] blur-[120px]"
        />
        <div
          class="mx-auto grid min-h-[calc(100svh-9rem)] max-w-[1600px] grid-cols-12 items-end"
        >
          <div class="relative z-20 col-span-12 pb-5 md:col-span-8 md:pb-[6vh]">
            <div
              class="mb-8 flex items-center gap-3 overflow-hidden font-mono text-[10px] uppercase tracking-[.18em] text-smoke md:mb-12"
            >
              <span
                class="hero-reveal h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_#c7ff18]"
              />
              <span class="hero-reveal">Available for select projects</span>
            </div>
            <h1
              class="hero-title font-sans font-extrabold uppercase leading-[.77] tracking-[-.085em]"
            >
              <span class="block overflow-hidden"
                ><span class="hero-reveal block">I build</span></span
              >
              <span class="block overflow-hidden"
                ><span class="hero-reveal block text-acid">digital</span></span
              >
              <span class="block overflow-hidden"
                ><span class="hero-reveal block"
                  >impact<span class="text-smoke">.</span></span
                ></span
              >
            </h1>
            <div
              class="mt-10 flex flex-col gap-7 md:ml-[31%] md:mt-14 md:max-w-xl md:flex-row md:items-end md:justify-between"
            >
              <p
                class="hero-reveal max-w-sm font-sans text-base font-medium leading-relaxed text-smoke md:text-lg"
              >
                Vue & Nuxt developer building fast, expressive products with the
                kind of frontend craft people remember.
              </p>
              <a
                href="#work"
                aria-label="See selected work"
                class="hero-reveal group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-bone text-ink transition-colors hover:bg-acid md:h-20 md:w-20"
              >
                <ArrowDownRight
                  class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>

          <div
            class="portrait-wrap relative col-span-10 col-start-3 mt-8 h-[51vh] min-h-[390px] overflow-hidden md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-[92vh] md:w-[45vw] md:max-w-[720px]"
          >
            <!--  -->
            <img
              src="/riswin-portrait.png"
              alt="Portrait of Riswin Mohammed"
              class="portrait-image h-[110%] w-full object-cover object-top grayscale-[18%]"
            />
            <div class="absolute inset-0" />
            <div
              class="absolute bottom-8 right-5 font-mono text-[9px] uppercase tracking-[.18em] text-white/55 md:right-10"
            >
              Kozhikode, India<br />11.2588° N / 75.7804° E
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        class="border-y border-white/10 px-5 py-24 md:px-10 md:py-40"
      >
        <div class="mx-auto grid max-w-[1600px] grid-cols-12 gap-y-12">
          <div class="col-span-12 md:col-span-3">
            <p
              class="reveal font-mono text-[10px] uppercase tracking-[.2em] text-acid"
            >
              ( 01 / About )
            </p>
          </div>
          <div class="col-span-12 md:col-span-8">
            <p
              class="reveal text-balance font-sans text-[clamp(2rem,5vw,5.7rem)] font-semibold leading-[1.02] tracking-[-.055em]"
            >
              I build Vue-first products that feel
              <span class="text-smoke">clean, fast, human</span> and
              unmistakably polished.
            </p>
            <div
              class="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-20"
            >
              <p class="reveal font-sans text-sm leading-7 text-smoke">
                Vue is my home base and Nuxt is the framework I reach for first.
                I use them to turn product thinking into structured,
                maintainable interfaces that stay fast as they grow.
              </p>
              <p class="reveal font-sans text-sm leading-7 text-smoke">
                Around that core, I bring TypeScript, Tailwind, GSAP, Node, and
                thoughtful motion. The outcome is useful software with a clear
                architecture and a distinct point of view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="px-5 py-24 md:px-10 md:py-40">
        <div class="mx-auto max-w-[1600px]">
          <div class="mb-16 flex items-end justify-between md:mb-24">
            <div>
              <p
                class="reveal mb-6 font-mono text-[10px] uppercase tracking-[.2em] text-acid"
              >
                ( 02 / Selected work )
              </p>
              <h2
                class="reveal font-sans text-[clamp(3.4rem,10vw,10rem)] font-extrabold uppercase leading-[.78] tracking-[-.08em]"
              >
                Built to<br /><span class="text-smoke">matter.</span>
              </h2>
            </div>
            <p
              class="hidden font-mono text-[10px] uppercase tracking-[.16em] text-smoke md:block"
            >
              Recent experiments<br />& products / 2023—26
            </p>
          </div>

          <article
            v-for="project in projects"
            :key="project.no"
            class="project-row group relative grid grid-cols-12 gap-y-8 border-t border-white/15 py-10 md:py-14"
          >
            <div class="col-span-2 font-mono text-[10px] text-smoke">
              {{ project.no }}
            </div>
            <div class="col-span-10 md:col-span-5">
              <p
                class="mb-3 font-mono text-[9px] uppercase tracking-[.17em] text-smoke"
              >
                {{ project.type }}
              </p>
              <h3
                class="font-sans text-[clamp(2rem,4.7vw,5rem)] font-semibold leading-none tracking-[-.055em] transition-colors duration-300 group-hover:text-[var(--accent)]"
                :style="{ '--accent': project.accent }"
              >
                {{ project.title }}
              </h3>
            </div>
            <div
              class="col-span-10 col-start-3 md:col-span-3 md:col-start-auto"
            >
              <p class="max-w-sm font-sans text-sm leading-6 text-smoke">
                {{ project.description }}
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="item in project.stack"
                  :key="item"
                  class="rounded-full border border-white/15 px-3 py-1 font-mono text-[8px] uppercase tracking-[.1em]"
                  >{{ item }}</span
                >
              </div>
            </div>
            <div class="col-span-2 flex justify-end">
              <a
                :href="project.url"
                target="_blank"
                rel="noreferrer"
                :aria-label="`View ${project.title} on GitHub`"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:border-acid group-hover:bg-acid group-hover:text-ink md:h-16 md:w-16"
              >
                <ArrowUpRight class="h-5 w-5" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="overflow-hidden border-y border-white/10 py-7">
        <div
          class="marquee flex w-max items-center gap-7 whitespace-nowrap font-sans text-6xl font-extrabold uppercase tracking-[-.06em] text-smoke md:text-8xl"
        >
          <template v-for="n in 2" :key="n">
            <span
              v-for="tool in tools"
              :key="`${n}-${tool}`"
              class="flex items-center gap-7"
              ><span>{{ tool }}</span
              ><span class="text-acid">✳</span></span
            >
          </template>
        </div>
      </section>

      <section class="px-5 py-24 md:px-10 md:py-40">
        <div class="mx-auto grid max-w-[1600px] grid-cols-12 gap-y-12">
          <div class="col-span-12 md:col-span-3">
            <p
              class="reveal font-mono text-[10px] uppercase tracking-[.2em] text-acid"
            >
              ( 03 / Approach )
            </p>
          </div>
          <div class="col-span-12 md:col-span-9">
            <div
              v-for="(item, index) in [
                'Think in systems',
                'Design with intent',
                'Ship with care',
              ]"
              :key="item"
              class="reveal group flex items-center justify-between border-b border-white/15 py-8 md:py-12"
            >
              <div class="flex items-baseline gap-5 md:gap-10">
                <span class="font-mono text-[10px] text-smoke"
                  >0{{ index + 1 }}</span
                >
                <h3
                  class="font-sans text-[clamp(2rem,5vw,5.5rem)] font-semibold tracking-[-.055em] transition-transform duration-500 group-hover:translate-x-3"
                >
                  {{ item }}
                </h3>
              </div>
              <MoveRight
                class="h-6 w-6 text-acid opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="relative overflow-hidden bg-acid px-5 py-24 text-ink md:px-10 md:py-36"
      >
        <div
          class="absolute -right-16 -top-24 select-none font-sans text-[28vw] font-extrabold leading-none tracking-[-.1em] text-black/[.055]"
        >
          R
        </div>
        <div class="relative mx-auto max-w-[1600px]">
          <p
            class="reveal mb-10 font-mono text-[10px] uppercase tracking-[.2em]"
          >
            ( 04 / Contact )
          </p>
          <h2
            class="reveal max-w-[1300px] font-sans text-[clamp(4rem,12.5vw,13rem)] font-extrabold uppercase leading-[.73] tracking-[-.09em]"
          >
            Let's make<br />it real<span class="text-white">.</span>
          </h2>
          <div
            class="mt-16 flex flex-col gap-10 border-t border-black/20 pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p
              class="reveal max-w-md font-sans text-sm font-semibold leading-6"
            >
              Have a product to build, an interface to sharpen, or an ambitious
              idea worth exploring? My inbox is open.
            </p>
            <div class="reveal flex flex-wrap gap-3">
              <a
                href="mailto:123391105+rizwyy@users.noreply.github.com"
                class="group flex items-center gap-3 rounded-full border border-black/30 px-5 py-3 font-mono text-[10px] uppercase tracking-[.12em] transition-colors hover:bg-ink hover:text-acid"
                ><Mail class="h-4 w-4" /> Email me</a
              >
              <a
                href="https://github.com/rizwyy"
                target="_blank"
                rel="noreferrer"
                class="group flex items-center gap-3 rounded-full border border-black/30 px-5 py-3 font-mono text-[10px] uppercase tracking-[.12em] transition-colors hover:bg-ink hover:text-acid"
                ><Github class="h-4 w-4" /> GitHub</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      class="flex flex-col gap-4 bg-acid px-5 pb-8 pt-4 font-mono text-[9px] uppercase tracking-[.14em] text-ink md:flex-row md:items-center md:justify-between md:px-10"
    >
      <span>© {{ year }} Riswin Mohammed</span
      ><span>Designed in Kerala · Built with Nuxt + GSAP</span
      ><a href="#top" class="flex items-center gap-2"
        >Back to top <ArrowUpRight class="h-3 w-3"
      /></a>
    </footer>
  </div>
</template>
