

const NumberSection = () => {
  const stats = [
    { value: '2.5M+', label: 'Jobs available' },
    { value: '189k+', label: 'New jobs this week!' },
    { value: '289k+', label: 'Companies Hiring' },
    { value: '5M+', label: 'Candidates' },
  ];

  return (
    <div className="flex justify-around items-center py-4 border-b border-gray-300 mx-32">
      {stats?.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-blue-600 text-3xl font-semibold">{stat.value}</p>
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberSection;
