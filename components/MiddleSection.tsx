"use client"; // Add this directive to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  { name: "Stopwatch", link: "/services/stopwatch" },
  { name: "File Share", link: "/services/file-share" },
  { name: "Restaurant", link: "/services/restaurant" },
  { name: "Whiteboard", link: "/services/whiteboard" },
  { name: "Notes", link: "/services/notes" },
  { name: "Blogs", link: "/services/blogs" },
  { name: "Media", link: "/services/media" },
  { name: "PDF to Word", link: "/services/pdf-to-word" },
  { name: "Word to PDF", link: "/services/word-to-pdf" },
];

export const MiddleSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevents mismatch between server and client rendering
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Available Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:bg-gray-100 transition-all cursor-pointer">
              <h2 className="text-lg font-semibold">{service.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
