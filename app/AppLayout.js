"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function AppLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex justify-between items-center px-4 z-10">
        <h1 className="text-xl font-bold text-blue-900">CHUELSA</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-blue-900"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="absolute left-0 top-0 w-64 bg-white h-full shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed h-screen">
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>
      
      <main className="flex-1 lg:ml-64 mt-16 lg:mt-0">
        {children}
        <Footer />
      </main>
    </div>
  );
} 