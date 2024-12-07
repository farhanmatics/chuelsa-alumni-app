"use client";

import AppLayout from '../AppLayout';
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const inputClasses = "w-full p-2 border border-blue-900 rounded-md text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900";
  const selectClasses = "w-full p-2 border border-blue-900 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900";

  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <Image
                src="/logo.png"
                alt="CUELSA Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputClasses}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className={inputClasses}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Under Graduate ID"
                  className={inputClasses}
                  required
                />
              </div>
              <div>
                <select className={selectClasses}>
                  <option value="">--Faculty--</option>
                  <option value="law">Law</option>
                  {/* Add more faculty options */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Post Graduate ID"
                  className={inputClasses}
                />
              </div>
              <div>
                <select className={selectClasses}>
                  <option value="">--Faculty--</option>
                  <option value="law">Law</option>
                  {/* Add more faculty options */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <select className={selectClasses}>
                  <option value="880">Bangladesh(880)</option>
                  {/* Add more country codes */}
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            <div className="text-sm">
              <label className="flex items-center">
                <input type="checkbox" required className="mr-2 text-blue-900 border-blue-900" />
                <span className="text-blue-900">
                  I have read and agree to the{" "}
                  <Link href="/terms" className="text-blue-900 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-900 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/login"
                className="w-full p-2 text-center bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Back to login
              </Link>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
