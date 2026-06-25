import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are highly recommended to ensure availability.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Walk-ins are accepted based on availability.",
  },
  {
    q: "How do I book?",
    a: "Bookings can be made via WhatsApp, Instagram or phone.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, transfer and POS payments.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-16">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-yellow-500/10"
            >
              <AccordionTrigger className="text-left text-white">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-zinc-400">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}