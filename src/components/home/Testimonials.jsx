const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Computer Science Student",
    text: "InternGuard helped me quickly identify suspicious internship postings and avoid wasting time on unreliable opportunities.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Final Year Student",
    text: "The risk analysis feature makes it much easier to understand whether an internship opportunity looks trustworthy before applying.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Software Engineering Student",
    text: "I like how simple the platform is. Instead of manually checking every detail, I can get a quick overview of the potential risks.",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">

        <div className="testimonial-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2> What Students <span>Say</span></h2>
          <p> Discover how InternGuard helps students identify potential risks, avoid unverified listings, and navigate their career decisions with complete confidence.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>

              <div className="testimonial-rating"> {"★".repeat(testimonial.rating)} </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>

                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;