const ScamData = [
  {
    id: 1,
    company: "TechNova Solutions",
    role: "Software Development Intern",
    location: "Remote",
    type: "Internship",
    risk: "High",
    category: "Internship Scam",
    reported: 28,
    date: "12 Aug 2026",
    description:
      "Applicants reported being asked to pay a registration fee before receiving an internship offer.",
    warningSigns: [
      "Upfront registration fee",
      "Offer received without an interview",
      "Unverified company email",
      "Pressure to pay immediately",
    ],
    source: "User Reports",
  },

  {
    id: 2,
    company: "NextGen Infotech",
    role: "Data Analyst Intern",
    location: "Delhi",
    type: "Internship",
    risk: "Medium",
    category: "Suspicious Offer",
    reported: 14,
    date: "10 Aug 2026",
    description:
      "The internship offer contained unclear responsibilities and requested personal documents before proper verification.",
    warningSigns: [
      "Unclear job description",
      "Requests personal documents early",
      "Limited company information",
    ],
    source: "Community Reports",
  },

  {
    id: 3,
    company: "CodeBridge Careers",
    role: "Frontend Developer Intern",
    location: "Remote",
    type: "Internship",
    risk: "Low",
    category: "Reported Listing",
    reported: 6,
    date: "08 Aug 2026",
    description:
      "Several users reported that the company stopped responding after collecting applications.",
    warningSigns: [
      "No response after application",
      "Incomplete company profile",
      "No clear hiring process",
    ],
    source: "User Reports",
  },

  {
    id: 4,
    company: "Global Career Hub",
    role: "AI/ML Internship",
    location: "Mumbai",
    type: "Internship",
    risk: "High",
    category: "Payment Scam",
    reported: 41,
    date: "05 Aug 2026",
    description:
      "Applicants reported being asked to purchase a mandatory training package after receiving a selection message.",
    warningSigns: [
      "Mandatory paid training",
      "Selection without proper interview",
      "Payment required to continue",
      "Urgent payment deadline",
    ],
    source: "Community Reports",
  },

  {
    id: 5,
    company: "BrightPath Technologies",
    role: "Python Developer Intern",
    location: "Bangalore",
    type: "Internship",
    risk: "Medium",
    category: "Suspicious Recruiter",
    reported: 11,
    date: "02 Aug 2026",
    description:
      "The recruiter contacted applicants through an unofficial email address and requested sensitive information.",
    warningSigns: [
      "Unofficial recruiter email",
      "Requests sensitive information",
      "No verified company profile",
    ],
    source: "User Reports",
  },

  {
    id: 6,
    company: "SkillRise Academy",
    role: "Web Development Internship",
    location: "Remote",
    type: "Training + Internship",
    risk: "High",
    category: "Fee Scam",
    reported: 33,
    date: "30 Jul 2026",
    description:
      "Applicants reported that an internship advertised as free later required a large payment for certification.",
    warningSigns: [
      "Unexpected certification fee",
      "Different terms after selection",
      "Payment requested after acceptance",
    ],
    source: "Community Reports",
  },

  {
    id: 7,
    company: "FutureEdge Technologies",
    role: "Machine Learning Intern",
    location: "Pune",
    type: "Internship",
    risk: "Medium",
    category: "Suspicious Listing",
    reported: 17,
    date: "28 Jul 2026",
    description:
      "The listing promised unusually high earnings for beginners and provided very limited information about the actual work.",
    warningSigns: [
      "Unusually high salary promise",
      "Vague responsibilities",
      "No clear company information",
      "Immediate selection claims",
    ],
    source: "User Reports",
  },

  {
    id: 8,
    company: "DigitalSpark Labs",
    role: "UI/UX Design Intern",
    location: "Chandigarh",
    type: "Internship",
    risk: "Low",
    category: "Reported Listing",
    reported: 5,
    date: "25 Jul 2026",
    description:
      "Users reported that the internship listing had incomplete contact information and an unclear application process.",
    warningSigns: [
      "Incomplete contact information",
      "Unclear application process",
    ],
    source: "Community Reports",
  },

  {
    id: 9,
    company: "CareerBoost India",
    role: "Full Stack Developer Intern",
    location: "Delhi",
    type: "Training + Internship",
    risk: "High",
    category: "Payment Scam",
    reported: 36,
    date: "22 Jul 2026",
    description:
      "Applicants reported being asked to pay for a course before being allowed to start the advertised internship.",
    warningSigns: [
      "Course payment required",
      "Internship linked to paid training",
      "No proper interview",
      "Pressure to make payment",
    ],
    source: "Community Reports",
  },

  {
    id: 10,
    company: "InnovateWorks Pvt. Ltd.",
    role: "Cybersecurity Intern",
    location: "Hyderabad",
    type: "Internship",
    risk: "Medium",
    category: "Identity Risk",
    reported: 13,
    date: "19 Jul 2026",
    description:
      "Applicants reported that the recruiter requested identity documents before providing a formal offer or interview.",
    warningSigns: [
      "Identity documents requested early",
      "No formal offer letter",
      "Unverified recruiter",
    ],
    source: "User Reports",
  },

  {
    id: 11,
    company: "WebCore Technologies",
    role: "React Developer Intern",
    location: "Remote",
    type: "Internship",
    risk: "Low",
    category: "Reported Listing",
    reported: 4,
    date: "15 Jul 2026",
    description:
      "A small number of applicants reported poor communication and inconsistent information in the internship listing.",
    warningSigns: [
      "Inconsistent job information",
      "Poor recruiter communication",
    ],
    source: "Community Reports",
  },

  {
    id: 12,
    company: "Elite Career Network",
    role: "Business Analyst Intern",
    location: "Bangalore",
    type: "Training + Internship",
    risk: "High",
    category: "Job Scam",
    reported: 45,
    date: "11 Jul 2026",
    description:
      "Multiple applicants reported receiving selection messages without interviews followed by requests for processing fees.",
    warningSigns: [
      "Selection without interview",
      "Processing fee",
      "Urgent payment request",
      "Unverified recruiter contact",
    ],
    source: "Community Reports",
  },

    {
    id: 13,
    company: "CloudMatrix Systems",
    role: "Cloud Computing Intern",
    location: "Chennai",
    type: "Internship",
    risk: "Medium",
    category: "Suspicious Recruiter",
    reported: 9,
    date: "08 Jul 2026",
    description:
      "Applicants reported receiving internship messages from an unverified recruiter using a personal email account.",
    warningSigns: [
      "Personal email used for recruitment",
      "No verified company profile",
      "Limited information about the internship",
    ],
    source: "User Reports",
  },

  {
    id: 14,
    company: "DataSphere Analytics",
    role: "Data Science Intern",
    location: "Remote",
    type: "Internship",
    risk: "High",
    category: "Payment Scam",
    reported: 31,
    date: "05 Jul 2026",
    description:
      "Applicants reported being asked to pay a refundable security deposit before joining the internship.",
    warningSigns: [
      "Security deposit requested",
      "Refund promise used to encourage payment",
      "No formal offer process",
      "Pressure to pay quickly",
    ],
    source: "Community Reports",
  },

  {
    id: 15,
    company: "AppCraft Studios",
    role: "Android Development Intern",
    location: "Pune",
    type: "Internship",
    risk: "Low",
    category: "Reported Listing",
    reported: 7,
    date: "01 Jul 2026",
    description:
      "Users reported that the internship listing contained limited information about the team and project.",
    warningSigns: [
      "Limited company information",
      "Unclear project details",
      "Incomplete recruiter profile",
    ],
    source: "User Reports",
  },

  {
    id: 16,
    company: "CareerFirst Solutions",
    role: "Human Resources Intern",
    location: "Noida",
    type: "Training + Internship",
    risk: "High",
    category: "Fee Scam",
    reported: 38,
    date: "28 Jun 2026",
    description:
      "Applicants reported being told to purchase a paid career package before they could access the internship.",
    warningSigns: [
      "Paid career package",
      "Internship access linked to payment",
      "No proper selection process",
      "Unclear refund policy",
    ],
    source: "Community Reports",
  },

  {
    id: 17,
    company: "PixelForge Digital",
    role: "Graphic Design Intern",
    location: "Kolkata",
    type: "Internship",
    risk: "Medium",
    category: "Suspicious Listing",
    reported: 12,
    date: "24 Jun 2026",
    description:
      "The listing promised flexible work and quick selection but provided very little information about the actual organization.",
    warningSigns: [
      "Very quick selection",
      "Unclear company details",
      "Generic job description",
    ],
    source: "User Reports",
  },

  {
    id: 18,
    company: "FinTech Career Point",
    role: "Finance Technology Intern",
    location: "Gurugram",
    type: "Internship",
    risk: "High",
    category: "Identity Risk",
    reported: 26,
    date: "20 Jun 2026",
    description:
      "Applicants reported being asked to submit banking and identity information before receiving a formal interview.",
    warningSigns: [
      "Banking information requested",
      "Identity documents requested early",
      "No formal interview",
      "Unverified recruiter",
    ],
    source: "Community Reports",
  },

  {
    id: 19,
    company: "DevLaunch Academy",
    role: "Java Developer Intern",
    location: "Remote",
    type: "Training + Internship",
    risk: "Medium",
    category: "Training Scam",
    reported: 19,
    date: "16 Jun 2026",
    description:
      "Applicants reported that the advertised internship was later presented as a paid training program.",
    warningSigns: [
      "Internship changed into paid training",
      "Unexpected course charges",
      "Different terms after selection",
    ],
    source: "User Reports",
  },

  {
    id: 20,
    company: "NextStep Careers",
    role: "Product Management Intern",
    location: "Ahmedabad",
    type: "Internship",
    risk: "Low",
    category: "Reported Listing",
    reported: 3,
    date: "12 Jun 2026",
    description:
      "A few users reported that the internship listing had outdated contact information and limited details about the hiring team.",
    warningSigns: [
      "Outdated contact information",
      "Limited recruiter information",
      "Incomplete company profile",
    ],
    source: "Community Reports",
  },
];

export default ScamData;