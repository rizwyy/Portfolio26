<script setup lang="ts">
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Github,
  Mail,
  MessageSquare,
  MoveRight,
  SendHorizontal,
  X,
} from "lucide-vue-next";

type Project = {
  no: string;
  title: string;
  category: string;
  year: string;
  description: string;
  story?: string;
  details?: string;
  decision?: string;
  role?: string[];
  stack: string[];
  url?: string;
  image?: string;
  status?: string;
  nextSteps?: string;
  accent: string;
  featured?: boolean;
  hidden?: boolean;
  privacyNote?: string;
};

const projects: Project[] = [
  {
    no: "01",
    title: "Contexta",
    category: "AI-powered company knowledge assistant",
    year: "2026",
    description:
      "A full-stack RAG application for finding answers across internal company documents, with source citations for verification.",
    story:
      "Helping employees find answers across internal company documents. Contexta combines a Nuxt interface with Amazon Bedrock retrieval and generation, with citations that link answers back to their sources.",
    details:
      "The public demo uses fictional company documents, citations, and a five-question daily limit. The described implementation includes Cognito authentication, protected APIs, permission-aware retrieval, document ingestion, conversation history, feedback, guardrails, monitoring, and RAG evaluation.",
    decision:
      "Separate ingestion from question answering: documents are retrieved through a Bedrock Knowledge Base before the model returns a cited answer, while demo authentication and usage limits protect access.",
    status: "Public demo · Sign-in required",
    role: [
      "System architecture",
      "Full-stack development",
      "AWS integration",
      "RAG evaluation",
    ],
    stack: [
      "Nuxt",
      "Vue",
      "TypeScript",
      "Python",
      "AWS Lambda",
      "API Gateway",
      "Amazon Bedrock",
      "Bedrock Knowledge Bases",
      "S3",
      "DynamoDB",
      "Cognito",
      "IAM",
      "CloudWatch",
    ],
    url: "https://contexta-aws.netlify.app/",
    accent: "#00dc82",
    featured: true,
  },
  {
    no: "02",
    title: "Floorsir",
    category: "Customer-facing flooring retail",
    year: "2024",
    description:
      "A customer-facing flooring catalogue that helps visitors explore categories, compare options, and move into a guided enquiry journey.",
    story:
      "I translated a flooring retailer’s customer journey into a responsive catalogue experience covering carpets, parquet, vinyl, raised flooring, sports flooring, services, and accessories.",
    details:
      "The visible flow supports category browsing, product exploration, designer sign-up, home or store visits, sample requests, and WhatsApp enquiries. The public site does not establish a transactional checkout flow.",
    decision:
      "Treat the catalogue and enquiry journey as the product surface, avoiding a checkout claim the public experience does not support.",
    role: [
      "Client acquisition & sales",
      "UX direction",
      "UI design",
      "Frontend development",
      "Responsive implementation",
      "Iteration",
    ],
    stack: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS", "GSAP"],
    url: "https://carpets-woltiz.netlify.app/",
    accent: "#ff9900",
    featured: true,
  },
  {
    no: "03",
    title: "Zentail",
    category: "AI-assisted job search workspace",
    year: "2026",
    status: "Launched · Early release",
    description:
      "One dashboard to organize a job search: track applications and stages, analyze job fit with AI, compare resume results, and see overall progress.",
    details:
      "Built with my co-founder over four weeks, inspired by our own placement-season job searches. Available to try and actively being improved.",
    stack: ["Next.js", "React"],
    url: "https://zentail.netlify.app/",
    accent: "#00dc82",
  },
  {
    no: "04",
    title: "Water Round",
    category: "Operations platform",
    year: "2026",
    description:
      "A Vue-powered field workflow that makes everyday water-round operations feel fast, legible, and surprisingly calm.",
    stack: ["Vue", "JavaScript", "Workflow UX"],
    url: "https://github.com/rizwyy/water-round-app",
    accent: "#8de1ff",
    hidden: true,
  },
  {
    no: "05",
    title: "Relay",
    category: "AI customer support agent frontend",
    year: "2026",
    status: "In progress · Frontend prototype",
    description:
      "A responsive support workspace for order tracking, refunds, return policies, product search, and simulated tickets. Conversation context and an activity panel expose tool inputs and results.",
    details: "Working frontend with simulated responses and tool calls.",
    nextSteps: "LLM integration and a FastAPI backend.",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "#00dc82",
  },
  {
    no: "06",
    title: "Folio",
    category: "AI invoice processing workspace",
    year: "2026",
    status: "In progress · Frontend prototype",
    description:
      "A responsive invoice review workspace with PDF uploads and previews, search and status filters, side-by-side editing, human approval, and JSON export.",
    details:
      "Working frontend with sample extraction data and browser-local uploads.",
    nextSteps:
      "S3, Textract, and Bedrock integration for extraction, validation, and classification, with human approval.",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "#00dc82",
    hidden: true,
  },
  {
    no: "07",
    title: "Invoxa",
    category: "Invoice management for small businesses",
    year: "2026",
    status: "Live demo · AWS workflow unverified",
    description:
      "An invoice workspace for Indian small businesses: bring supplier bills together, review original documents beside editable records, confirm details, and track what is paid or due.",
    story:
      "A working supplier-invoice workflow with upload and preview, manual review, payment tracking, search and filters, archive and restore, CSV export, and dashboard summaries.",
    details:
      "The public demo explains and previews the workflow with sample invoices. Persistent workspaces and AWS-backed extraction depend on the configured backend and are not independently verified here.",
    decision:
      "Keep original documents beside editable records and require human confirmation before an invoice affects totals; AWS extraction remains dependent on backend configuration.",
    role: [
      "Product direction",
      "UX/UI design",
      "Full-stack development",
      "AWS integration",
    ],
    stack: ["Nuxt", "Vue", "TypeScript", "Tailwind CSS", "Node.js", "AWS"],
    url: "https://invoxa-aws.netlify.app/",
    accent: "#ff9900",
    featured: true,
  },
];

const featuredProjects = computed(() =>
  projects.filter((project) => project.featured && !project.hidden),
);
const supportingProjects = computed(() =>
  projects.filter((project) => !project.featured && !project.hidden),
);

const tools = [
  "AWS",
  "BEDROCK",
  "LLMS",
  "PYTHON",
  "TYPESCRIPT",
  "NUXT",
  "VUE",
  "NODE",
  "RAG",
];

const certification = {
  title: "AWS Certified AI Practitioner",
  issuer: "Amazon Web Services",
  issued: "30 Aug 2026",
  validThrough: "30 Aug 2029",
  validationId: "408c95adc9bc486a813bb3b269c3ee5a",
  verificationUrl: "https://aws.amazon.com/verification",
  image: "/aws-certified-ai-practitioner.png",
};

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const showAwsChat = false;
const isAwsChatOpen = ref(false);
const awsPrompt = ref("");
const awsMessages = ref<ChatMessage[]>([
  {
    id: 1,
    role: "assistant",
    content:
      "Hi — I’m the frontend preview for an AWS assistant. Ask a question to test the chat experience.",
  },
]);
const awsSuggestions = [
  "How should I deploy a Nuxt app?",
  "What would a secure API setup look like?",
  "How can I store user uploads?",
];

function sendAwsMessage(message = awsPrompt.value) {
  const content = message.trim();
  if (!content) return;

  awsMessages.value.push({ id: Date.now(), role: "user", content });
  awsPrompt.value = "";
  awsMessages.value.push({
    id: Date.now() + 1,
    role: "assistant",
    content:
      "This is a frontend-only preview. Connect this interface to your AWS backend when you’re ready to return live, secure answers.",
  });
}

const year = new Date().getFullYear();

onMounted(async () => {
  const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("lenis"),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target);
    });
  });

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
    if (element.classList.contains("featured-project")) {
      const featureItems = element.querySelectorAll(".featured-project-reveal");
      gsap.from(featureItems, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 82%" },
      });
      return;
    }

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
      class="loader fixed inset-0 z-[100] flex flex-col justify-between bg-gradient-to-br from-acid via-acid to-aws-orange p-6 text-ink md:p-10"
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

    <div
      v-if="showAwsChat"
      class="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 md:bottom-8 md:right-8"
    >
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-4 opacity-0"
      >
        <section
          v-if="isAwsChatOpen"
          aria-label="AWS assistant preview"
          class="aws-chat-panel w-[calc(100vw-2.5rem)] overflow-hidden border border-acid/35 bg-ink/95 shadow-[0_24px_80px_rgba(0,0,0,.45)] backdrop-blur md:w-[25rem]"
          @keydown.esc="isAwsChatOpen = false"
        >
          <div
            class="flex items-start justify-between border-b border-white/10 px-5 py-4"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-acid text-ink"
                ><Bot class="h-4 w-4"
              /></span>
              <div>
                <p
                  class="font-sans text-sm font-semibold tracking-[-.03em] text-bone"
                >
                  AWS Launch Assistant
                </p>
                <p
                  class="mt-0.5 font-mono text-[8px] uppercase tracking-[.14em] text-acid"
                >
                  Frontend preview
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close AWS assistant"
              class="flex h-8 w-8 items-center justify-center text-smoke transition-colors hover:text-acid"
              @click="isAwsChatOpen = false"
            >
              <X class="h-4 w-4" />
            </button>
          </div>

          <div
            class="max-h-[min(22rem,48svh)] space-y-4 overflow-y-auto px-5 py-5"
            aria-live="polite"
          >
            <div
              v-for="message in awsMessages"
              :key="message.id"
              :class="
                message.role === 'user'
                  ? 'ml-8 border-acid/30 bg-acid/10 text-bone'
                  : 'mr-8 border-white/10 bg-white/[.04] text-smoke'
              "
              class="border px-3 py-3 font-sans text-[13px] leading-5"
            >
              {{ message.content }}
            </div>
          </div>

          <div class="border-t border-white/10 px-5 py-4">
            <div class="mb-3 flex gap-2 overflow-x-auto pb-1">
              <button
                v-for="suggestion in awsSuggestions"
                :key="suggestion"
                type="button"
                class="shrink-0 border border-white/15 px-2.5 py-1.5 text-left font-mono text-[8px] uppercase leading-4 tracking-[.08em] text-smoke transition-colors hover:border-acid/50 hover:text-acid"
                @click="sendAwsMessage(suggestion)"
              >
                {{ suggestion }}
              </button>
            </div>
            <form
              class="flex items-center gap-2"
              @submit.prevent="sendAwsMessage()"
            >
              <label class="sr-only" for="aws-chat-prompt"
                >Ask the AWS assistant</label
              >
              <input
                id="aws-chat-prompt"
                v-model="awsPrompt"
                type="text"
                autocomplete="off"
                placeholder="Ask about your AWS build..."
                class="min-w-0 flex-1 bg-transparent py-2 font-sans text-sm text-bone outline-none placeholder:text-smoke/65"
              />
              <button
                type="submit"
                aria-label="Send message"
                class="flex h-9 w-9 shrink-0 items-center justify-center bg-acid text-ink transition-transform hover:scale-105 disabled:opacity-40"
                :disabled="!awsPrompt.trim()"
              >
                <SendHorizontal class="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </Transition>

      <button
        type="button"
        :aria-expanded="isAwsChatOpen"
        aria-controls="aws-chat-prompt"
        class="group flex items-center gap-3 border border-acid/50 bg-ink px-4 py-3 font-mono text-[9px] uppercase tracking-[.14em] text-bone shadow-[0_12px_40px_rgba(0,0,0,.28)] transition-colors hover:bg-acid hover:text-ink"
        @click="isAwsChatOpen = !isAwsChatOpen"
      >
        <MessageSquare
          class="h-4 w-4 text-acid transition-colors group-hover:text-ink"
        />
        <span>AWS assistant</span>
      </button>
    </div>

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
        class="hero relative min-h-[86svh] overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pb-10"
      >
        <div
          class="pointer-events-none absolute left-[12%] top-[12%] h-[44rem] w-[44rem] rounded-full bg-acid/[.035] blur-[120px]"
        />
        <div
          class="mx-auto grid min-h-[calc(86svh-9rem)] max-w-[1600px] grid-cols-12 items-end"
        >
          <div
            class="hero-copy relative z-20 col-span-12 pb-5 md:col-span-8 md:pb-[6vh]"
          >
            <div
              class="mb-8 flex items-center gap-3 overflow-hidden font-mono text-[10px] uppercase tracking-[.18em] text-smoke md:mb-12"
            >
              <span
                class="hero-reveal h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_#00dc82]"
              />
              <span class="hero-reveal"
                >SOFTWARE DEVELOPER · AWS &amp; GENERATIVE AI</span
              >
            </div>
            <h1
              class="hero-title font-sans font-[600] uppercase leading-[.95] tracking-[-.09em]"
            >
              <span class="block overflow-hidden"
                ><span class="hero-reveal block">I turn business</span></span
              >
              <span class="block overflow-hidden"
                ><span class="hero-reveal block"
                  ><span class="mr-[.22em] inline-block">needs</span
                  ><span>into</span></span
                ></span
              >
              <span class="block overflow-hidden"
                ><span class="hero-reveal hero-title-long block"
                  ><span class="text-acid">practical software</span
                  ><span class="text-smoke">.</span></span
                ></span
              >
            </h1>
            <div
              class="mt-10 flex max-w-2xl flex-col gap-7 md:mt-14 md:flex-row md:items-start md:justify-between md:gap-10"
            >
              <p
                class="hero-reveal max-w-lg font-sans text-base font-medium leading-relaxed text-smoke md:text-lg"
              >
                My work spans client-facing retail websites, business applications,
                and an Amazon Bedrock knowledge assistant. I combine full-stack
                development with a focus on clear workflows and cloud architecture.
              </p>
              <div class="hero-reveal flex shrink-0 flex-col items-start gap-4 md:items-end md:pt-1">
                <a
                  href="#work"
                  class="group inline-flex items-center gap-3 rounded-full bg-bone px-5 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-ink transition-colors hover:bg-acid"
                >
                  Explore selected projects
                  <ArrowDownRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <span class="font-mono text-[9px] uppercase tracking-[.14em] text-aws-orange">AWS Certified AI Practitioner · Kozhikode, India</span>
              </div>
            </div>
          </div>

          <div
            class="portrait-wrap relative col-span-12 mt-8 h-48 w-48 justify-self-center overflow-hidden rounded-full border border-acid/30 bg-white/[.03] sm:h-56 sm:w-56 md:absolute md:bottom-[10vh] md:right-0 md:mt-0 md:h-[92vh] md:w-[45vw] md:max-w-[720px] md:justify-self-auto md:rounded-none md:border-0 md:bg-transparent"
          >
            <!--  -->
            <img
              src="/riswin-portrait.png"
              alt="Portrait of Riswin Mohammed"
              class="portrait-image h-full w-full scale-[1.18] object-cover object-top grayscale-[18%] md:h-[110%] md:scale-100"
            />
            <div class="absolute inset-0" />
            <div
              class="absolute bottom-8 right-5 hidden font-mono text-[9px] uppercase tracking-[.18em] text-white/55 md:right-10 md:block"
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
              I turn business needs into
              <span class="text-smoke">clear, useful software</span>—from
              customer-facing interfaces to AWS and generative AI workflows.
            </p>
            <div
              class="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-20"
            >
              <p class="reveal font-sans text-sm leading-7 text-smoke">
                I’m Riswin Mohammed, a software developer based in Kozhikode. My
                work spans a flooring retail website, a supplier-invoice
                application, and a company knowledge assistant. On Floorsir, my
                responsibilities included client acquisition, UX direction,
                frontend development, and iteration.
              </p>
              <p class="reveal font-sans text-sm leading-7 text-smoke">
                My application projects explore how authentication, document
                workflows, and generative AI fit into useful software. I work with
                TypeScript, Vue, Nuxt, Node.js, Python, and AWS, and I’m interested
                in customer-facing cloud roles where understanding the business
                problem matters as much as implementing the solution.
              </p>
            </div>
            <div
              class="reveal mt-16 grid items-start gap-6 border border-white/15 bg-white/[.025] p-6 lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-8 md:p-8"
            >
              <a
                :href="certification.image"
                target="_blank"
                rel="noreferrer"
                aria-label="Open full-size AWS Certified AI Practitioner certificate"
                class="group block w-40 overflow-hidden border border-white/20 transition-colors hover:border-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
              >
                <img
                  :src="certification.image"
                  :alt="`${certification.title} certificate issued by ${certification.issuer}`"
                  width="1650"
                  height="1275"
                  loading="lazy"
                  class="block h-auto w-full object-contain"
                />
                <span
                  class="flex items-center justify-between gap-2 px-3 py-2 font-mono text-[8px] uppercase tracking-[.1em] text-smoke group-hover:text-acid"
                >
                  View certificate <ArrowUpRight class="h-3 w-3" />
                </span>
              </a>
              <div class="min-w-0">
                <div>
                  <p
                    class="mb-4 font-mono text-[9px] uppercase tracking-[.18em] text-acid"
                  >
                    Certification
                  </p>
                  <p
                    class="mb-3 font-mono text-[9px] uppercase tracking-[.14em] text-smoke"
                  >
                    {{ certification.issuer }}
                  </p>
                  <h3
                    class="max-w-md font-sans text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-tight tracking-[-.04em] text-bone"
                  >
                    {{ certification.title }}
                  </h3>
                </div>
                <div class="mt-6 border-t border-white/15 pt-5">
                  <dl
                    class="grid grid-cols-2 gap-5 font-mono text-[9px] uppercase tracking-[.12em]"
                  >
                    <div>
                      <dt class="mb-1 text-smoke">Issued</dt>
                      <dd class="text-bone">{{ certification.issued }}</dd>
                    </div>
                    <div>
                      <dt class="mb-1 text-smoke">Valid through</dt>
                      <dd class="text-bone">
                        {{ certification.validThrough }}
                      </dd>
                    </div>
                  </dl>
                  <div
                    class="mt-6 flex flex-wrap items-center justify-between gap-4"
                  >
                    <p
                      class="break-all font-mono text-[8px] uppercase tracking-[.1em] text-smoke"
                    >
                      ID: {{ certification.validationId }}
                    </p>
                    <a
                      :href="certification.verificationUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.12em] text-acid transition-colors hover:text-bone"
                    >
                      Verify with AWS
                      <ArrowUpRight
                        class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
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
            v-for="featuredProject in featuredProjects"
            :key="featuredProject.no"
            :id="`project-${featuredProject.title.toLowerCase()}`"
            class="featured-project reveal group relative mb-12 overflow-hidden border border-acid/25 px-5 py-7 md:mb-16 md:px-10 md:py-10"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(255,153,0,.16),transparent_30%),linear-gradient(135deg,rgba(0,220,130,.08),transparent_52%)]"
            />
            <div
              class="pointer-events-none absolute -right-10 -top-16 select-none font-sans text-[14rem] font-extrabold leading-none tracking-[-.1em] text-acid/[.035] md:text-[21rem]"
            >
              {{ featuredProject.no }}
            </div>
            <div class="relative">
              <div
                class="featured-project-reveal mb-10 flex items-center justify-between gap-5 border-b border-acid/20 pb-4 md:mb-14"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_#00dc82]"
                  />
                  <span
                    class="font-mono text-[9px] uppercase tracking-[.17em] text-acid"
                    >Featured Project</span
                  >
                </div>
                <span
                  class="font-mono text-[10px] tracking-[.15em] text-smoke"
                  >{{ featuredProject.no }}</span
                >
              </div>
              <div class="grid grid-cols-12 gap-y-10 md:gap-x-12 md:gap-y-14">
                <div class="featured-project-reveal col-span-12 lg:col-span-7">
                  <div
                    class="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[.17em] text-smoke"
                  >
                    <span>{{ featuredProject.category }}</span
                    ><span class="h-1 w-1 rounded-full bg-acid" /><span>{{
                      featuredProject.year
                    }}</span>
                    <template v-if="featuredProject.status">
                      <span class="h-1 w-1 rounded-full bg-acid" />
                      <span class="text-acid">{{ featuredProject.status }}</span>
                    </template>
                  </div>
                  <h3
                    class="mb-6 font-sans text-[clamp(2.8rem,8.5vw,8.5rem)] font-extrabold uppercase leading-[.8] tracking-[-.08em] text-acid md:mb-9"
                  >
                    {{ featuredProject.title }}
                  </h3>
                  <p
                    class="max-w-2xl font-sans text-lg font-medium leading-8 text-bone md:text-xl md:leading-9"
                  >
                    {{ featuredProject.story }}
                  </p>
                  <p
                    v-if="featuredProject.details"
                    class="mt-5 max-w-2xl font-sans text-sm leading-7 text-smoke"
                  >
                    {{ featuredProject.details }}
                  </p>
                  <div
                    v-if="featuredProject.decision"
                    class="mt-6 max-w-2xl border-l border-acid/50 pl-4"
                  >
                    <p class="mb-2 font-mono text-[8px] uppercase tracking-[.14em] text-acid">Technical decision</p>
                    <p class="font-sans text-sm leading-6 text-smoke">{{ featuredProject.decision }}</p>
                  </div>
                </div>
                <div
                  class="featured-project-reveal col-span-12 flex items-start lg:col-span-5 lg:justify-end lg:pt-2"
                >
                  <a
                    :href="featuredProject.url"
                    target="_blank"
                    rel="noreferrer"
                    class="group/link inline-flex items-center gap-3 rounded-full border border-acid/40 px-5 py-3 font-mono text-[9px] uppercase tracking-[.14em] text-acid transition-colors duration-300 hover:bg-acid hover:text-ink"
                  >
                    {{ featuredProject.status?.toLowerCase().includes("demo") ? "Open demo" : "View live site" }}
                    <ArrowUpRight
                      class="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
                <div
                  class="featured-project-reveal col-span-12 border-t border-white/10 pt-7 lg:col-span-7 lg:pt-8"
                >
                  <p
                    class="mb-4 font-mono text-[8px] uppercase tracking-[.17em] text-smoke"
                  >
                    My role
                  </p>
                  <ul
                    class="flex flex-wrap gap-x-4 gap-y-2"
                    :aria-label="`${featuredProject.title} project role`"
                  >
                    <li
                      v-for="item in featuredProject.role"
                      :key="item"
                      class="font-sans text-sm leading-5 text-bone before:mr-2 before:text-acid before:content-['+']"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div
                  class="featured-project-reveal col-span-12 border-t border-white/10 pt-7 lg:col-span-5 lg:pt-8"
                >
                  <p
                    class="mb-4 font-mono text-[8px] uppercase tracking-[.17em] text-smoke"
                  >
                    Technology
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="item in featuredProject.stack"
                      :key="item"
                      class="rounded-full border border-acid/30 bg-acid/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.1em] text-acid"
                      >{{ item }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article
            v-for="project in supportingProjects"
            :key="project.no"
            :id="`project-${project.title.toLowerCase()}`"
            class="project-row group relative grid grid-cols-12 gap-y-8 border-t border-white/15 py-10 md:py-14"
          >
            <div class="col-span-2 font-mono text-[10px] text-smoke">
              {{ project.no }}
            </div>
            <div class="col-span-10 md:col-span-5">
              <p
                class="mb-3 font-mono text-[9px] uppercase tracking-[.17em] text-smoke"
              >
                {{ project.category }} / {{ project.year }}
              </p>
              <h3
                class="font-sans text-[clamp(2rem,4.7vw,5rem)] font-semibold leading-none tracking-[-.055em] transition-colors duration-300 group-hover:text-[var(--accent)]"
                :style="{ '--accent': project.accent }"
              >
                {{ project.title }}
              </h3>
              <p
                v-if="project.status"
                class="mt-5 inline-block border border-acid/25 px-3 py-2 font-mono text-[9px] uppercase leading-5 tracking-[.1em] text-acid"
              >
                {{ project.status }}
              </p>
            </div>
            <div
              class="col-span-10 col-start-3 md:col-span-3 md:col-start-auto"
            >
              <p class="max-w-sm font-sans text-sm leading-6 text-smoke">
                {{ project.description }}
              </p>
              <dl
                v-if="project.details || project.nextSteps"
                class="mt-5 space-y-4 border-t border-white/10 pt-5"
              >
                <div v-if="project.details">
                  <dt
                    class="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-bone"
                  >
                    Current scope
                  </dt>
                  <dd class="font-sans text-sm leading-6 text-smoke">
                    {{ project.details }}
                  </dd>
                </div>
                <div v-if="project.nextSteps">
                  <dt
                    class="mb-1 font-mono text-[9px] uppercase tracking-[.12em] text-bone"
                  >
                    Planned
                  </dt>
                  <dd class="font-sans text-sm leading-6 text-smoke">
                    {{ project.nextSteps }}
                  </dd>
                </div>
              </dl>
              <div
                v-if="project.stack.length"
                class="mt-6 flex flex-wrap gap-2"
              >
                <span
                  v-for="item in project.stack"
                  :key="item"
                  class="rounded-full border border-white/15 px-3 py-1 font-mono text-[8px] uppercase tracking-[.1em]"
                  >{{ item }}</span
                >
              </div>
            </div>
            <div
              class="col-span-10 col-start-3 flex items-start justify-start md:col-span-2 md:col-start-auto md:justify-end"
            >
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noreferrer"
                :aria-label="`View ${project.title}`"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-4 py-3 font-mono text-[9px] uppercase tracking-[.1em] transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-ink"
              >
                <span>Open project</span>
                <ArrowUpRight class="h-5 w-5" />
              </a>
            </div>
            <!-- <div
              v-if="project.image"
              class="col-span-10 col-start-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-8"
            >
              <img
                :src="project.image"
                :alt="`${project.title} workflow comparison`"
                class="h-auto w-full"
                loading="lazy"
              />
            </div> -->
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
              ( 03 / Capabilities → evidence )
            </p>
          </div>
          <div class="col-span-12 md:col-span-9">
            <div
              v-for="(item, index) in [
                { title: 'Customer delivery', evidence: 'Floorsir · client-facing retail catalogue and enquiry flow', href: '#project-floorsir' },
                { title: 'AWS & GenAI', evidence: 'Contexta · Bedrock knowledge assistant and cited answers', href: '#project-contexta' },
                { title: 'Security & data', evidence: 'Contexta and Invoxa · authentication, permissions, and document workflows', href: '#project-contexta' },
                { title: 'Asynchronous workflows', evidence: 'Invoxa · extraction architecture documented separately from verified deployment', href: '#project-invoxa' },
                { title: 'Application development', evidence: 'Zentail, Relay, and Folio · customer and operations interfaces', href: '#project-zentail' },
              ]"
              :key="item.title"
              class="reveal group flex items-center justify-between border-b border-white/15 py-8 md:py-12"
            >
              <div class="flex items-baseline gap-5 md:gap-10">
                <span class="font-mono text-[10px] text-smoke"
                  >0{{ index + 1 }}</span
                >
                <div>
                  <h3
                  class="font-sans text-[clamp(2rem,5vw,5.5rem)] font-semibold tracking-[-.055em] transition-transform duration-500 group-hover:translate-x-3"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="mt-3 max-w-xl font-sans text-sm leading-6 text-smoke">
                    {{ item.evidence }}
                  </p>
                </div>
              </div>
              <a
                :href="item.href"
                :aria-label="`View ${item.title} evidence`"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-acid transition-all duration-300 group-hover:translate-x-1 group-hover:border-acid"
              >
                <MoveRight class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="relative overflow-hidden bg-gradient-to-br from-acid via-acid to-aws-orange px-5 py-24 text-ink md:px-10 md:py-36"
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
            Let’s discuss<br />software<span class="text-white">.</span>
          </h2>
          <div
            class="mt-16 flex flex-col gap-10 border-t border-black/20 pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p
              class="reveal max-w-md font-sans text-sm font-semibold leading-6"
            >
              Let’s discuss software, cloud, and customer problems. I’m seeking
              opportunities in software development and cloud solutions, with a
              particular interest in customer-facing work and generative AI.
            </p>
            <div class="reveal flex flex-wrap gap-3">
              <a
                href="mailto:riswinwork@gmail.com"
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
      class="flex flex-col gap-4 border-t border-aws-orange/45 bg-ink px-5 pb-8 pt-4 font-mono text-[9px] uppercase tracking-[.14em] text-smoke md:flex-row md:items-center md:justify-between md:px-10"
    >
      <span>© {{ year }} Riswin Mohammed</span
      ><span>Designed in Kerala · Built with Nuxt + GSAP</span
      ><a href="#top" class="flex items-center gap-2 text-acid transition-colors hover:text-aws-orange"
        >Back to top <ArrowUpRight class="h-3 w-3"
      /></a>
    </footer>
  </div>
</template>
