import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    {children}
  </svg>
);

const icons = {
  sourcing: (
    <Icon>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 2.5-6.5 6.5-6.5C18.5 9.5 16 12 12 12Z" />
      <path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5Z" />
    </Icon>
  ),
  quality: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
  ),
  export: (
    <Icon>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M12 13v8" />
    </Icon>
  ),
  shipping: (
    <Icon>
      <path d="M3 17h18l-2 4H5l-2-4Z" />
      <path d="M5 17V11h14v6" />
      <path d="M9 11V7h6v4" />
      <path d="M12 3v4" />
    </Icon>
  ),
  delivery: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
    </Icon>
  ),
};

const leftSteps = [
  { icon: icons.sourcing, title: "Sourcing", desc: "Direct procurement from trusted farmers across India.", offset: "" },
  { icon: icons.quality, title: "Quality & Processing", desc: "Careful grading, quality checks, and compliant packaging.", offset: "lg:translate-x-4" },
  { icon: icons.export, title: "Export & Logistics", desc: "Documentation, customs clearance, and seamless logistics management.", offset: "" },
];

const rightSteps = [
  { icon: icons.shipping, title: "Global Shipping", desc: "Reliable shipping through our global network of partners.", offset: "" },
  { icon: icons.delivery, title: "Delivery to Markets", desc: "Timely delivery to international markets with consistent support.", offset: "" },
];

const StepCard = ({ icon, title, desc, offset }) => (
  <div
    className={`flex w-full items-center gap-4 rounded-[44px] bg-[#fbf7ee]/90 py-4 pl-5 pr-7 shadow-[0_6px_24px_rgba(120,100,60,0.12)] backdrop-blur-sm lg:w-[340px] ${offset}`}
  >
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e3d6b8] bg-[#fffdf7] text-[#0b3d2c]">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <h3
        className="text-lg font-semibold leading-tight text-[#0b3d2c]"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        {title}
      </h3>
      <p className={`${montserrat.className} mt-1 text-[13px] leading-snug text-[#5b5b52]`}>
        {desc}
      </p>
    </div>
  </div>
);

export default function ProcessSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-bottom bg-no-repeat px-6 pb-28 pt-24 md:px-12 lg:min-h-[1100px] lg:pt-28"
      style={{ backgroundImage: "url('/process-bg.png')" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-5">
            <span className="h-px w-20 bg-[#8a8a7a]" />
            <span className={`${montserrat.className} text-xs font-semibold uppercase tracking-[0.3em] text-[#5b5b52]`}>
              Our Process
            </span>
            <span className="h-px w-20 bg-[#8a8a7a]" />
          </div>

          <h2
            className="mt-8 text-5xl leading-[1.15] md:text-7xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            <span className="block text-[#0b3d2c]">How We Deliver</span>
            <span className="mt-1 block text-[#a98a52]">Excellence.</span>
          </h2>
        </div>

        {/* Gap between heading and globe */}
        <div className="h-12 lg:h-28" aria-hidden="true" />

        {/* Steps + globe space */}
        <div className="mx-auto grid max-w-none items-center gap-6 lg:grid-cols-[340px_minmax(0,1fr)_340px] lg:gap-86">
          <div className="flex flex-col gap-5 lg:justify-self-start lg:-translate-x-12 xl:-translate-x-18">
            {leftSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>

          {/* Globe sits here via the bg image */}
          <div className="hidden h-[480px] lg:block" aria-hidden="true" />

          <div className="flex flex-col gap-7 lg:pt-10">
            {rightSteps.map((s) => (
              <StepCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}