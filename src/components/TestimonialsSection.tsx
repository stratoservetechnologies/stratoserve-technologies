
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Working with Stratoserve Technologies has been a game-changer for our business. Their team delivered our project on time and exceeded our expectations. The custom solution they built has significantly improved our operational efficiency.",
      name: "Anita Desai",
      title: "CTO",
      company: "GlobalTech Solutions",
    },
    {
      quote:
        "Stratoserve's team demonstrated exceptional technical expertise and a deep understanding of our industry. They were responsive, communicative, and dedicated to our project's success from start to finish.",
      name: "Karan Mehra",
      title: "Operations Director",
      company: "InnovateCorp",
    },
    {
      quote:
        "The mobile application developed by Stratoserve has received outstanding feedback from our users. Their attention to detail in UI/UX design and commitment to quality is impressive. We look forward to working with them again.",
      name: "Sonia Shah",
      title: "Product Manager",
      company: "MobileSphere",
    },
    {
      quote:
        "We've worked with several tech partners in the past, but Stratoserve Technologies stands out for their professionalism, technical expertise, and client-focused approach. They truly became an extension of our team.",
      name: "Rahul Kapoor",
      title: "CEO",
      company: "NextGen Retail",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
