"use client";

import AppLayout from '../AppLayout';
import Link from 'next/link';

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Environmental Law Summit 2025",
      date: "January 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, University of Chittagong",
      description: "Annual summit featuring keynote speakers, panel discussions, and networking opportunities focused on current environmental law challenges.",
      category: "Conference",
      registrationOpen: true
    },
    {
      id: 2,
      title: "Climate Policy Workshop",
      date: "March 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Law Faculty Building, Room 201",
      description: "Interactive workshop on climate policy development and implementation strategies.",
      category: "Workshop",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Environmental Moot Court Competition",
      date: "May 5-7, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "University Moot Court Room",
      description: "Annual moot court competition focusing on environmental law cases and advocacy skills.",
      category: "Competition",
      registrationOpen: false
    },
    {
      id: 4,
      title: "Green Law Symposium",
      date: "July 12, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Conference Center",
      description: "A symposium dedicated to exploring sustainable legal practices and environmental justice.",
      category: "Symposium",
      registrationOpen: true
    },
    {
      id: 5,
      title: "Environmental Rights Conference",
      date: "September 25-26, 2025",
      time: "9:30 AM - 5:30 PM",
      location: "Main Campus Hall",
      description: "Two-day conference on environmental rights, featuring international speakers and workshops.",
      category: "Conference",
      registrationOpen: false
    },
    {
      id: 6,
      title: "Legal Research Workshop",
      date: "November 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Law Library",
      description: "Workshop on environmental legal research methodologies and resources.",
      category: "Workshop",
      registrationOpen: true
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Events Calendar 2025</h1>
            <p className="text-lg text-gray-600">Join us for our upcoming events and activities</p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Event Header */}
                <div className="bg-blue-900 text-white p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-800 text-sm mb-2">
                    {event.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">{event.date}</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Registration Button */}
                  {event.registrationOpen ? (
                    <Link 
                      href="/register" 
                      className="block w-full text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Register Now
                    </Link>
                  ) : (
                    <button 
                      disabled 
                      className="block w-full text-center bg-gray-300 text-gray-500 py-2 rounded-md cursor-not-allowed"
                    >
                      Registration Closed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Note */}
          <div className="mt-12 text-center text-gray-600">
            <p>* Events calendar is subject to change. Please check back regularly for updates.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
