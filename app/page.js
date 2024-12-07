"use client";

import AppLayout from './AppLayout';
import Image from "next/image";

export default function Home() {
  return (
    <AppLayout>
      {/* Header Image */}
      <div className="relative h-64 w-full p-4">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <Image
            src="/banner.jpg"
            alt="CHUELSA Meetup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30">
            <h1 className="text-4xl text-white font-bold absolute bottom-8 left-8">
              #CHUELSAMeetup2
            </h1>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-900">Welcome to CHUELSA!</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Register Now
            </button>
          </div>
          <p className="text-gray-600">
            Chittagong University Ex-Law Students&apos; Association [CUELSA] is an organization for the ex students of law who have passed at least their hons&apos; course from the law faculty of Chittagong University.
            It is our pleasure to inform you that the first initiative for the formation of an Association was taken on October 17, 2006 where an Iftar party was arranged at the Hilltop Restaurant,Court Building premise,Chittagong. Representatives from the first ten batches of the University attend the party.It was the collective decision of all the participants to form an Association.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
