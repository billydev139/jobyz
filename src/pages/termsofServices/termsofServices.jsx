
import DefaultLayout from "../../layouts/defaultLayout";

const TermsofServices = () => {
  const termsData = [
    {
      title: "1. Introduction",
      content:
        "This website is owned and operated by Jobyz. These Terms and Conditions apply to all users of the site, including job seekers, employers, and visitors.",
    },
    {
      title: "2. Use of the Website",
      content:
        "You agree to use the website for lawful purposes only. You must not misuse the website in any way that may cause damage, disruption, or impair the functionality of the website. Unauthorized use may result in legal action.",
    },
    {
      title: "3. Eligibility",
      content:
        "By using our website, you represent that you are at least 18 years old and have the legal authority to enter into this agreement.",
    },
    {
      title: "4. User Accounts",
      //   content: "Users may need to create an account to access certain features of the site.",
      bullets: [
        "Users may need to create an account to access certain features of the site.",
        "You are responsible for maintaining the confidentiality of your account details, including your password.",
        "You agree to notify us immediately of any unauthorized access or use of your account.",
      ],
    },
    {
      title: "5. Job Listings and Applications",
      //   content: "Employers are responsible for the accuracy of the job listings they post.",
      bullets: [
        "Employers are responsible for the accuracy of the job listings they post.",
        "We do not guarantee the accuracy or availability of any job listing or employment opportunity.",
        "Job seekers should verify the legitimacy of job offers before taking any action.",
        "We are not responsible for any employment decisions made by employers or job seekers.",
      ],
    },
    {
      title: "6. User-Generated Content",
      //   content: "You retain ownership of any content you upload to the site (such as resumes or job postings).",
      bullets: [
        "You retain ownership of any content you upload to the site (such as resumes or job postings).",
        "By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display the content for the purposes of providing the website’s services.",
        "We are not responsible for any employment decisions made by employers or job seekers.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      //   content: "We strive to provide accurate and reliable services, but we do not guarantee that the website will be error-free or uninterrupted. We are not liable for:",
      bullets: [
        "We strive to provide accurate and reliable services, but we do not guarantee that the website will be error-free or uninterrupted. We are not liable for:",
        "Any direct, indirect, or incidental damages resulting from the use or inability to use our website.",
        "Any employment decisions made based on information obtained through the website.",
      ],
    },
    {
      title: "7. Contact Information",
      content:
        "If you have any questions or concerns about these Terms and Conditions, please contact us at:",
      bullets: [
        "Email: Jobyz@gmail.com",
        "Address: Santa Fe, New Mexico, USA; New York",
      ],
    },
  ];

  return (
    <DefaultLayout heading={"Terms of service"}>
      <div className="container mx-auto p-6 px-12">
        <h2 className="text-[32px] font-semibold mb-4 text-primaryBlue">
          Terms & Services
        </h2>
        <p className="mb-8 text-lg text-[#696969]">
          Are you familiar with our job portal? Sign up or log in today to find
          the best job opportunities on our platform! If you have any questions,
          feel free to check out our FAQ for solutions to your concerns.
        </p>

        <div className="">
          {termsData.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
              {section.bullets && (
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TermsofServices;
