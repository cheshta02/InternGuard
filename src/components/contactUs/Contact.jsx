import { useState } from "react";

const contactInfo = [
  {
    id: 1,
    icon: "@",
    title: "Email Support",
    email: "support@internguard.com",
    description: "Send us your questions about InternGuard, your account, or our features.",
  },
  {
    id: 2,
    icon: "?",
    title: "Need Help?",
    description: "Get help understanding an analysis, company information, or an opportunity.",
  },
  {
    id: 3,
    icon: "!",
    title: "Report a Scam",
    description: "Found an internship that looks suspicious? Tell us what you found so we can review it.",
  },
];

const subjectOptions = [
  {
    value: "suspicious-opportunity",
    label: "Report a Suspicious Opportunity",
  },
  {
    value: "analysis",
    label: "Help With a Trust Scan",
  },
  {
    value: "scam-library",
    label: "Question About the Scam Library",
  },
  {
    value: "safe-opportunities",
    label: "Question About Safe Opportunities",
  },
  {
    value: "account",
    label: "Account Support",
  },
  {
    value: "feedback",
    label: "Feedback or Suggestion",
  },
  {
    value: "other",
    label: "Other"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main id="contact-page" className="contact-page">
      {/* Hero */}
      <section id="contact-hero" className="contact-hero">
        <p className="contact-hero-label">INTERNGUARD SUPPORT</p>
        <h1>We're Here to Help</h1>
        <p>
          Questions, concerns, or something that doesn't look right? We're here to help you make safer internship decisions.
        </p>
      </section>

      {/* Contact Information */}
      <section id="contact-information" className="contact-information">
        <p className="section-label">NEED SUPPORT?</p>

        <h2>How Can We Help?</h2>

        <div id="contact-info-list" className="contact-info-list">
          {contactInfo.map((info) => (
            <div className="contact-info-card" key={info.id}>
              <div className="contact-icon">{info.icon}</div>

              <h3>{info.title}</h3>

              {info.email && (
                <a href={`mailto:${info.email}`}>
                  {info.email}
                </a>
              )}

              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form-section" className="contact-form-section">
        <div id="contact-form-intro" className="contact-form-intro">
          <p className="section-label">SEND A MESSAGE</p>
          <h2>Get in Touch</h2>
          <p>
            Tell us what you need help with. Whether you have found a suspicious internship, need help with an analysis, or simply want to share feedback, your message matters.
          </p>

          <div className="contact-note">
            <strong>Before you apply:</strong>
            <span>If you believe an internship may be unsafe, avoid sharing sensitive information until you have checked it. Never share passwords, banking details, OTPs, or identity documents without verifying the employer first. Be cautious of requests for upfront payments, unusual fees, or pressure to make quick decisions. When in doubt, research the company and verify the opportunity through trusted sources.</span>
          </div>
        </div>

        <div id="contact-form-box" className="contact-form-box">
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange=     {handleChange} required/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
            </div>

            <div className="form-group">
              <label htmlFor="subject">What Can We Help With?</label>

              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required >
                <option value="">Select a topic</option>

                {subjectOptions.map((option) => (
                  <option value={option.value} key={option.value}> {option.label} </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea id="message" name="message" rows="6" placeholder="Tell us what happened or how we can help..." 
              value={formData.message} onChange={handleChange} required/>
            </div>

            <button id="contact-submit" className="contact-submit" type="submit">Send Message </button>
          </form>
        </div>
      </section>

      {/* Safety Section */}
      <section id="contact-safety" className="contact-safety">
        <p className="section-label">STAY PROTECTED</p>
        <h2>Think Before You Trust an Internship</h2>
        <p>
          Never send money, sensitive documents, passwords, or personal financial information to an employer before verifying that the opportunity is legitimate.
        </p>
      </section>
    </main>
  );
}

export default Contact;