"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Video {
  title: string;
  url: string;
}

const MyVideos = () => {
  const [videoData, setVideoData] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/video-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setVideoData(data?.videoData || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 xl:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            My Videos
          </h2>
          <p className="text-lg md:text-xl text-orange-500 font-semibold tracking-wide">
            ({videoData.length.toString().padStart(2, "0")})
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, index) => {
            const embedUrl = video.url?.replace("watch?v=", "embed/");

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Video */}
                <div className="relative aspect-video">
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-t-2xl"
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-5 flex flex-col gap-4">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {video.title}
                  </h5>
                  <div className="flex justify-end">
                    <Image
                      src={getImgPath("/images/icon/right-arrow-icon.svg")}
                      alt="right-arrow-icon"
                      width={28}
                      height={28}
                      className="group-hover:rotate-45 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyVideos;
