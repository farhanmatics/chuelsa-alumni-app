"use client";

import AppLayout from '../AppLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Showcase() {
  const partners = [
    {
      id: 1,
      name: "Environmental Law Alliance",
      category: "Legal Organization",
      description: "Leading organization in environmental law advocacy and research, partnering with us on major policy initiatives.",
      website: "#",
      collaboration: "Research Partner",
      projects: ["Policy Development", "Legal Research", "Advocacy"]
    },
    {
      id: 2,
      name: "Green Earth Foundation",
      category: "NGO",
      description: "International environmental organization working on conservation and sustainability projects worldwide.",
      website: "#",
      collaboration: "Project Partner",
      projects: ["Community Outreach", "Environmental Education"]
    },
    {
      id: 3,
      name: "Global Climate Institute",
      category: "Research Institute",
      description: "Premier research institution focused on climate change and environmental policy research.",
      website: "#",
      collaboration: "Academic Partner",
      projects: ["Climate Research", "Policy Analysis"]
    },
    {
      id: 4,
      name: "Legal Aid Society",
      category: "Legal Organization",
      description: "Providing pro-bono legal services and support for environmental cases and advocacy.",
      website: "#",
      collaboration: "Legal Partner",
      projects: ["Legal Aid", "Case Studies"]
    },
    {
      id: 5,
      name: "Sustainable Future Network",
      category: "Network Organization",
      description: "Network of organizations working towards sustainable development and environmental protection.",
      website: "#",
      collaboration: "Network Partner",
      projects: ["Networking Events", "Resource Sharing"]
    },
    {
      id: 6,
      name: "Environmental Policy Center",
      category: "Think Tank",
      description: "Think tank dedicated to developing innovative environmental policy solutions.",
      website: "#",
      collaboration: "Policy Partner",
      projects: ["Policy Research", "Advocacy"]
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Partners</h1>
            <p className="text-lg text-gray-600">Collaborating for a sustainable future</p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Logo Area */}
                <div className="bg-gray-50 p-6 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/logo.png"
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-blue-900">{partner.name}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                      {partner.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{partner.description}</p>

                  {/* Collaboration Details */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-blue-900 mb-2">
                      {partner.collaboration}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.projects.map((project, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-900 rounded text-sm"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Website Button */}
                  <Link 
                    href={partner.website}
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                  >
                    Visit Website
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join our network of partners and contribute to advancing environmental law and sustainability. 
              We welcome collaborations with organizations sharing our vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Contact Us for Partnership
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center text-gray-600">
            <p>* Partner information is updated regularly. Please check individual partner websites for the most current information.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
