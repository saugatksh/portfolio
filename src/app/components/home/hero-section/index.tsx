"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const Index = () => {
  const titles = ["Developer", "Singer", "Guitarist", "Video Editor"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // fade in new title
      }, 300); // match transition duration
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative hero-section overflow-hidden pt-36 md:pt-40 pb-12 lg:pb-28 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8 items-center">
          <div className="flex flex-col gap-6 md:gap-8 max-w-2xl relative z-10">
            <div>
              <div className="flex items-center gap-4 md:gap-6">
                <h3 className="text-xl md:text-5xl font-semibold text-gray-700">
                  I'm Saugat Bohara
                </h3>
                <div className="wave animate-bounce">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              {/* Rotating titles */}
              <h1
                className={`text-4xl md:text-6xl font-bold mt-2 md:mt-4 transition-opacity duration-300 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                } bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500`}
              >
                {titles[currentTitleIndex]}
              </h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Hi, I’m Saugat Bohara.
              I’m a passionate web developer with hands-on experience in HTML, CSS, JavaScript, React, and Odoo. Over the years, I’ve worked on numerous web development and Odoo-based projects, creating user-friendly, efficient, and visually appealing solutions. I enjoy turning ideas into functional digital experiences and continuously strive to improve my skills and deliver high-quality results.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-img.jpg")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/banner-img.jpg")}
          alt="banner-img"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default Index;
