import DefaultLayout from "../../layouts/defaultLayout";

const PrivacyPolicy = () => {
  const termsData = [
    {
      title: "1. Information We Collect",
      bullets: [
        "Personal Information: Name, email address, phone number, resume/CV details, employment history, education background, and any other details you submit through the job portal.",
        "Technical Information: IP address, browser type, operating system, cookies, and usage data to improve our website performance.",
        "Third-Party Information: We may receive information about you from third-party sources, such as employers or social networks, if you integrate your profile with third-party services.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      bullets: [
        "Job Matching: To match you with suitable job opportunities based on your profile and preferences.",
        "Communication: To send job alerts, newsletters, or other updates via email or SMS.",
        "Account Management: To help you manage your profile, applications, and job searches.",
        "Improving Services: To analyze site usage, improve website functionality, and enhance your experience.",
      ],
    },
    {
      title: "3. Security",
      content:
        "We use industry-standard measures to protect your information, but no website or online service is completely secure. We encourage you to take steps to safeguard your account and personal information.",
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to enhance user experience, gather website analytics, and provide personalized content. You can modify your browser settings to reject cookies, but this may limit your use of certain website features.",
    },
    {
      title: "5. Third-Party Links",
      content:
        "Our site may contain links to third-party websites, such as employers’ websites or social networks. We are not responsible for the privacy practices or content of these third-party sites.",
    },
    {
      title: "6. Children's Privacy",
      content:
        "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have inadvertently collected such data, we will take steps to delete it.",
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this page periodically for any changes.",
    },
    {
      title: "8. Contact Information",
      content:
        "We strive to provide accurate and reliable services, but we do not guarantee that the website will be error-free or uninterrupted. We are not liable for:",
      bullets: [
        "If you have any questions or concerns about these Terms and Conditions, please contact us at:",
        "Email: Jobyz@gmail.com",
        "Address: Santa Fe, New Mexico, USA; New York",
      ],
    },
  ];

  return (
    <DefaultLayout heading={"Privacy Policy"}>
      <div className="container mx-auto p-6 px-12">
        <h2 className="text-[32px] font-semibold mb-4 text-primaryBlue">
          Privacy Policy
        </h2>
        <p className="mb-8 text-lg text-[#696969]">
          At Jobyz, we are committed to protecting your personal information and
          your right to privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website www.jobyz.com use our mobile application, or engage with our
          services. Please read this privacy policy carefully.
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

export default PrivacyPolicy;
