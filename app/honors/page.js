"use client";

import AppLayout from '../AppLayout';
import { useState } from 'react';

export default function Honors() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const honors = [
    {
      id: 1,
      name: "Sarah Johnson",
      award: "Environmental Law Excellence Award",
      year: "2024",
      category: "Academic Excellence",
      achievement: "Outstanding research on Climate Change Law",
      details: "Achieved highest marks in Environmental Law courses and published research paper",
      cgpa: "3.95"
    },
    {
      id: 2,
      name: "Mohammed Rahman",
      award: "Dean's Merit List",
      year: "2024",
      category: "Academic Excellence",
      achievement: "Consistent academic performance",
      details: "Maintained exceptional academic standing throughout the year",
      cgpa: "3.90"
    },
    {
      id: 3,
      name: "Aisha Khan",
      award: "Best Moot Court Advocate",
      year: "2023",
      category: "Advocacy",
      achievement: "Winner of National Environmental Law Moot Court",
      details: "Led team to victory in national competition",
      cgpa: "3.85"
    },
    {
      id: 4,
      name: "John Smith",
      award: "Research Excellence Award",
      year: "2023",
      category: "Research",
      achievement: "Outstanding research contribution",
      details: "Published paper in International Environmental Law Journal",
      cgpa: "3.88"
    },
    {
      id: 5,
      name: "Fatima Hassan",
      award: "Community Service Award",
      year: "2024",
      category: "Leadership",
      achievement: "Environmental awareness campaign leadership",
      details: "Led successful community outreach programs",
      cgpa: "3.82"
    },
    {
      id: 6,
      name: "David Chen",
      award: "Innovation in Environmental Law",
      year: "2023",
      category: "Innovation",
      achievement: "Developed new environmental law database",
      details: "Created digital resource for environmental law students",
      cgpa: "3.87"
    }
  ];

  const years = ['all', '2024', '2023'];
  const categories = ['all', 'Academic Excellence', 'Advocacy', 'Research', 'Leadership', 'Innovation'];

  const filteredHonors = honors.filter(honor => {
    const yearMatch = selectedYear === 'all' || honor.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || honor.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <AppLayout>
      <div className="min-h-screen p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Honor List</h1>
            <p className="text-lg text-gray-600">Celebrating Excellence in Environmental Law</p>
          </div>

          {/* Filters */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Honor List Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHonors.map((honor) => (
              <div 
                key={honor.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-900 text-white p-4">
                  <h2 className="text-xl font-semibold mb-1">{honor.name}</h2>
                  <p className="text-sm opacity-90">CGPA: {honor.cgpa}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm mb-2">
                      {honor.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-2 ml-2">
                      {honor.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {honor.award}
                  </h3>

                  <div className="text-gray-600 space-y-2">
                    <p><strong>Achievement:</strong> {honor.achievement}</p>
                    <p className="text-sm">{honor.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredHonors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No honors found for the selected filters.</p>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-600">
            <p>* Honor list is updated at the end of each academic year.</p>
            <p>Students must maintain a minimum CGPA of 3.80 to be eligible for the honor list.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
