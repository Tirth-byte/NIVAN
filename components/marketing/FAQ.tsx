import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What platforms does Vantage support?",
    answer: "Vantage currently supports all major competitive titles including League of Legends, Valorant, Dota 2, and CS2, with custom integrations available for Enterprise clients.",
  },
  {
    question: "How does the automated workflow system work?",
    answer: "Our engine connects directly to game APIs and tournament providers to trigger actions based on performance data, roster changes, or match results automatically.",
  },
  {
    question: "Can we migrate our existing data to Vantage?",
    answer: "Yes, our team provides comprehensive migration tools and white-glove service for organizations moving from legacy systems or spreadsheets.",
  },
  {
    question: "Is there a limit on the number of team members?",
    answer: "Starter plans include up to 5 members, while Pro and Enterprise plans offer unlimited seats to accommodate growing organizations.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding container border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col max-w-sm shrink-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Frequently asked questions.</h2>
          <p className="text-muted-foreground/80 leading-relaxed font-medium">
            Everything you need to know about the platform and our services. Can't find the answer? 
            <a href="#" className="text-white hover:text-white/80 transition-colors underline underline-offset-4 ml-1">Reach out to our team.</a>
          </p>
        </div>
        
        <div className="flex-1">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 first:border-t-0 last:border-b">
                <AccordionTrigger className="text-[17px] font-bold py-8 hover:no-underline transition-all hover:text-white/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/70 leading-relaxed text-[15px] pb-8 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
