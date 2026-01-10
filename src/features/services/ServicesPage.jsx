import { ChevronDown } from "lucide-react";
import Seo from "@/components/Seo.jsx";
import {
  serviceDetails,
  serviceFaqs,
  servicePillars,
  serviceProcess,
} from "@/shared/content/services.js";

const ServicesPage = () => {
  return (
    <div className="bg-background route-motion">
      <Seo
        title="Services"
        description="Construction support, steel & hardware supply, and earthmoving equipment delivered by Gramlex Investments."
      />

      <section className="section border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="eyebrow">Services</span>
          <h1 className="mt-6 text-4xl font-bold text-steel-dark md:text-5xl">
            Integrated delivery across construction, steel, and earthmoving
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            One coordinated team managing procurement, fabrication, fleet mobilisation, and on-site execution.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {servicePillars.map(({ id, icon: Icon, title, description, highlights }) => (
              <div key={id} className="card card-muted card-interactive">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-steel-dark">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  What you get
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {highlights.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="eyebrow">Our Process</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              How we deliver across every pillar
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {serviceProcess.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card card-compact">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-steel-dark">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-8">
            {serviceDetails.map(({ id, icon: Icon, title, summary, whatWeDo, deliverables, process }) => (
              <div key={id} className="card card-muted">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold text-steel-dark">{title}</h2>
                      <p className="text-sm text-muted-foreground">{summary}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      What we do
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {whatWeDo.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Typical deliverables
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Process
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {process.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-steel-dark md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {serviceFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-muted/30 px-5 py-4">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-steel-dark">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
