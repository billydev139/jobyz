import { useState } from 'react';
const AnotherJobSearch = () => {
  const [activeTab, setActiveTab] = useState('fields');
  const tabs = [
    { name: 'Jobs by occupational fields', key: 'fields' },
    { name: 'Jobs by region', key: 'region' },
    { name: 'Most searches', key: 'searches' },
    { name: 'Top cities', key: 'cities' },
  ];
  const jobCategories = [
    { title: 'Admin / HR / Consulting / CEO', count: 1550 },
    { title: 'Banking / Insurance', count: 1250 },
    { title: 'Catering / Food / Tourism', count: 1250 },
    { title: 'Chemical / Pharma / Biotech', count: 900 },
    { title: 'Electronics / Engineering', count: 1650 },
    { title: 'Finance / Trusts / Real Estate', count: 1230 },
    { title: 'Graphic art / Typography', count: 1550 },
    { title: 'Information tech / Telecom', count: 1550 },
    { title: 'Information tech / Telecom', count: 1350 },
    { title: 'Medicine / Care / Therapy', count: 1350 },
    { title: 'Public admin / Education / Social', count: 700 },
    { title: 'Public admin / Education / Social', count: 1920 },
    { title: 'Sales / Customer service / Admin', count: 1920 },
    { title: 'Sports / Spa & Wellness / Culture', count: 1920 },
    { title: 'Marketing / Communications', count: 1920 },
  ];
  return (
    <div className="w-[85%] mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">Another way to start your job search</h2>
      <p className="text-gray-600 mb-6">Explore your opportunities using occupational fields or select your preferred region.</p>
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 ${
              activeTab === tab.key
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Job Categories */}
      {activeTab === 'fields' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {jobCategories?.map((category, index) => (
            <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
              <span className="text-gray-700">{category.title}</span>
              <span className="bg-black text-white px-3 py-1 rounded-full">{category.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AnotherJobSearch;