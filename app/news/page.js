"use client";

import AppLayout from '../AppLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  // Sample news data - replace with your actual data
  const newsItems = [
    {
      id: 1,
      title: "Environmental Law Workshop 2024",
      date: "March 15, 2024",
      excerpt: "Join us for a comprehensive workshop on current environmental law trends and practices, featuring distinguished speakers from across the country.",
      category: "Events"
    },
    {
      id: 2,
      title: "New Environmental Policy Guidelines",
      date: "March 10, 2024",
      excerpt: "CUELSA releases new guidelines for environmental policy implementation in collaboration with leading environmental organizations.",
      category: "Announcements"
    },
    {
      id: 3,
      title: "Student Achievement Award",
      date: "March 5, 2024",
      excerpt: "Congratulations to our members who received recognition for their outstanding contributions to environmental law research.",
      category: "Awards"
    },
    {
      id: 4,
      title: "Upcoming Conference",
      date: "March 1, 2024",
      excerpt: "Save the date for our annual Environmental Law Conference, featuring keynote speakers and networking opportunities.",
      category: "Events"
    },
    {
      id: 5,
      title: "Community Outreach Program",
      date: "February 28, 2024",
      excerpt: "CUELSA launches new initiative to promote environmental awareness in local communities through legal education.",
      category: "Programs"
    },
    {
      id: 6,
      title: "Research Publication",
      date: "February 25, 2024",
      excerpt: "New research paper on environmental law practices published by CUELSA members in international journal.",
      category: "Publications"
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">News & Updates</h1>
            <p className="text-lg text-gray-600">Stay informed about our latest activities and announcements</p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src="/news.jpg"
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h2 className="text-xl font-semibold text-blue-900 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                  >
                    Read more
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button - Optional */}
          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Load More News
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
