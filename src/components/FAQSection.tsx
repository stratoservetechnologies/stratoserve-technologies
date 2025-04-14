
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Stratoserve Technologies offer?",
      answer:
        "We offer a comprehensive range of technology services including web development, mobile app development, UI/UX design, AI integration, cloud services, and IT consulting. Each service is tailored to meet the specific needs of your business.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on the scope, complexity, and requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology that emphasizes collaboration, flexibility, and iterative development. This includes discovery, planning, design, development, testing, deployment, and ongoing support. You'll be involved throughout the process with regular updates and opportunities for feedback.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price, time and materials, and retainer-based options. During our initial consultation, we'll discuss your project requirements and recommend the most suitable pricing model. We provide transparent quotes with no hidden costs.",
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your solution continues to perform optimally. These can include regular updates, security patches, performance monitoring, and technical support. We'll work with you to determine the level of support that best meets your needs.",
    },
    {
      question: "Can you work with our existing technology stack?",
      answer:
        "Absolutely! We have experience working with a wide range of technologies and can adapt to your existing systems. We can also provide recommendations for technologies that would best suit your project needs if you're starting from scratch.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and how we work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 ">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
                <AccordionTrigger className="text-left font-medium text-gray-900 py-4 px-6 hover:bg-gray-50 transition-colors duration-200">
                    <span className="font-semibold text-gray-800">
                       {faq.question}
                    </span>
                 </AccordionTrigger>
                 <AccordionContent className="text-gray-600 px-6 pb-4 space-y-2">
                    <p className="text-sm text-gray-700">
                       {faq.answer}
                     </p>
                 </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
