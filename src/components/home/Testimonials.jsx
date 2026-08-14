function Testimonials() {
  const testimonials = [
    {
      quote:
        "InternGuard gives me a simple way to check an internship before I share my personal information or spend time applying.",
      title: "Student Perspective",
      role: "Internship Safety",
    },
    {
      quote:
        "The red flags are easier to understand when they are explained clearly. It helps me slow down and look at an offer more carefully.",
      title: "Student Perspective",
      role: "Scam Awareness",
    },
    {
      quote:
        "Having safer internship listings in one place makes searching less stressful and gives me more confidence about where I apply.",
      title: "Student Perspective",
      role: "Opportunity Search",
    },
    {
      quote:
        "Instead of accepting an internship offer immediately, I can use InternGuard to verify the details and make a more informed decision.",
      title: "Student Perspective",
      role: "Decision Support",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">

      <div id="testimonials-header" className="testimonials-header">
        <p className="testimonials-label">
          STUDENT VOICES
        </p>

        <h2>
          Making Internship Search Safer
        </h2>
      </div>

      <div id="testimonials-list" className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
          >
            <span className="testimonial-quote">“</span>

            <p className="testimonial-text">
            </p>

            <div className="testimonial-user">
              <div className="testimonial-initial">
                IG
              </div>

              <div>
                <h4>{testimonial.title}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;