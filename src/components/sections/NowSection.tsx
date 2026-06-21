import SectionHeader from "@/components/SectionHeader";

export default function NowSection() {
  return (
    <section id="now" className="section" data-reveal>
      <SectionHeader
        label="Now"
        title="Currently"
        subtitle="A small snapshot of what I am working on right now."
      />

      <div className="card now-card">
        <p>
          I am turning manual regression checks into cleaner Playwright-friendly
          test flows, with a focus on the cases that usually slip through
          demos.
        </p>
        <p>
          I am also tightening this portfolio around real project notes, fewer
          effects, and clearer proof of how I think through quality.
        </p>
      </div>
    </section>
  );
}
