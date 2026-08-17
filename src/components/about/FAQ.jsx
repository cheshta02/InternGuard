const faqData = [
  {
    question: "What is InternGuard?",
    answer:
      "InternGuard is a platform designed to help students evaluate internships before applying. It provides information and insights that can help identify potentially risky or unreliable opportunities.",
  },
  {
    question: "How does InternGuard analyze an internship?",
    answer:
      "InternGuard looks at different aspects of an internship opportunity and presents the findings in a simple, understandable way so students can make more informed decisions.",
  },
  {
    question: "Can I use InternGuard without creating an account?",
    answer:
      "Yes. You can explore the publicly available parts of InternGuard without an account. Some features may require you to log in or upgrade your plan.",
  },
  {
    question: "Is InternGuard only for students?",
    answer:
      "InternGuard is primarily designed with students and internship seekers in mind, helping them assess opportunities before sharing personal information or committing their time.",
  },
  {
    question: "Does InternGuard guarantee that an internship is safe?",
    answer:
      "No. InternGuard is a decision-support tool, not a guarantee. Its results should be used alongside your own research and judgement before accepting an internship.",
  },
  {
    question: "What do I get with a paid plan?",
    answer:
      "Paid plans provide access to additional InternGuard features and deeper internship insights that are not available on the free plan.",
  },
];

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <div className="faq-head">
        <span className="faq-tag">FAQ</span>
        <p>
          Everything you need to know about InternGuard and how it helps students make safer internship decisions.
        </p>
      </div>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <details className="faq-item" key={index}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;