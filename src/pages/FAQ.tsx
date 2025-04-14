import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What industries do you serve?</AccordionTrigger>
            <AccordionContent>
              We serve a wide range of industries, including but not limited to
              technology, healthcare, finance, education, e-commerce, and
              non-profit organizations. Our adaptable approach allows us to tailor
              our services to meet the specific needs of each industry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does a typical project take?
            </AccordionTrigger>
            <AccordionContent>
              The duration of a project varies depending on its complexity and
              scope. A simple website might take a few weeks, while a complex
              web application could take several months. We provide detailed
              timelines during the project planning phase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer post-launch support?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer post-launch support and maintenance services to
              ensure your project continues to run smoothly. We offer various
              support packages to suit your needs, including technical support,
              updates, and enhancements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I get a custom quote for my project?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We encourage you to contact us for a custom quote.
              During our initial consultation, we'll discuss your requirements
              in detail and provide you with a tailored proposal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What is your pricing model?</AccordionTrigger>
            <AccordionContent>
              We offer flexible pricing models tailored to fit various project
              scopes and client budgets. Our pricing options include fixed-price,
              time and materials, and retainer models. We will determine the
              most suitable pricing structure based on your project requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;