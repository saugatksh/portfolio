"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSkillsData(data?.educationData?.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>

            {/* Skills Section Only */}
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
              {skillsData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                  >
                    <div className="flex flex-col items-center gap-5">
                      <Image
                        src={getImgPath(value?.icon)}
                        alt="icon"
                        width={70}
                        height={70}
                      />
                      <p className="text-black font-normal">{value?.name}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
