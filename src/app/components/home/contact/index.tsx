"use client";
import { getDataPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactInfo {
  type: string;
  label: string;
  link: string;
}

interface SocialLink {
  title: string;
  href: string;
}

interface ContactLinks {
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactLinks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 md:py-36">
      {/* Decorative background blur circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-black/20 pb-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-orange-500 font-semibold">
            ( 05 )
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side: message */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Want to collaborate or just say hello?
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              I’m always open to new projects, creative ideas, or opportunities
              to be part of your vision. Drop me a message or connect through my
              social channels.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="mailto:boharasaugat23@gmail.com"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Say Hello 👋
              </Link>
            </div>
          </div>

          {/* Right side: social & contact info */}
          <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-10 md:gap-16 items-center md:items-end">
            {/* Social Links */}
            <div className="flex flex-wrap flex-row md:flex-col items-center md:items-end gap-4 md:gap-6">
              {contactData?.socialLinks?.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="text-lg font-medium text-gray-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-300"
                >
                  {social.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
