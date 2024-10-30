import { useState } from 'react';
import DefaultLayout from '../../layouts/defaultLayout';

const faqs = [
  {
    category: "Job search and application",
    questions: [
      { question: "How do I search for jobs?", answer: "Use the search bar on the homepage to look for jobs by keyword, job title, or location. You can also filter jobs by industry, salary range, and job type: full-time, part-time, freelance." },
      { question: "How do I apply for a job?", answer: "To apply for a job, click on the job title and follow the application instructions provided on the page." },
      { question: "Can I save job listings for later?", answer: "Yes, you can save job listings to access them later by clicking the 'Save' button." },
      { question: "How do I know if my application was received?", answer: "You will receive a confirmation email once your application is submitted successfully." },
    ],
  },
  {
    category: "Resume and profile building",
    questions: [
      { question: "Do I need to upload a resume to apply for jobs?", answer: "Yes, uploading a resume is generally required to apply for jobs on our platform." },
      { question: "Can I create a resume on the website?", answer: "Yes, you can use our resume builder tool to create and store a resume." },
      { question: "How do I update my resume?", answer: "Go to your profile and click on 'Edit Resume' to make updates." },
    ],
  },
  {
    category: "Technical support",
    questions: [
      { question: "I’m having trouble with the website. Who can I contact?", answer: "You can contact our support team via the 'Help' section at the bottom of the page." },
      { question: "Why am I not receiving email notifications?", answer: "Check your spam folder or verify that your email address is correctly updated in your profile settings." },
      { question: "How can I change my email preferences?", answer: "Navigate to the 'Email Preferences' section in your account settings to make changes." },
    ],
  },
];

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`],
    }));
  };

  return (
    <DefaultLayout heading={"FAQS"}>
      <div className="max-w-[60%] mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <p className="mb-8 text-gray-600">Are you familiar with our job portal? Sign up or log in today to find the best job opportunities on our platform! If you have any questions, feel free to check out our FAQ for solutions to your concerns.</p>
        
        {faqs.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{section.category}</h3>
            <div className="bg-white p-4">
              {section.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="border border-gray-300 rounded-md mb-2">
                  <button
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    className="w-full text-left py-3 p-2 flex justify-between items-center"
                  >
                    <span>{item.question}</span>
                    <span>{openQuestions[`${categoryIndex}-${questionIndex}`] ? '-' : '+'}</span>
                  </button>
                  {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                    <div className="border-t border-gray-300">
                      <p className="text-gray-600 pl-4 py-4">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default FAQ;
