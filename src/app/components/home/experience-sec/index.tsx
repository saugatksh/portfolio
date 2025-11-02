import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2022",
            title: "Webpage Designer",
            company: "Free Lancing",
            type: "Fulltime",
            description: "I started my career as a freelance webpage designer, crafting visually appealing and user-friendly websites for various clients."
        },
        {
            year: "2023-2025",
            title: "Python and Odoo Developer",
            company: "Shangrila Informatics",
            type: "Fulltime",
            description: "I worked as a Python and Odoo Developer at Shangrila Informatics, where I developed and customized Odoo applications to meet client needs."
        },
        {
            year: "2025-Present",
            title: "Developer",
            company: "Free Lancing",
            type: "Fulltime",
            description: "I am currently working as a freelance developer, focusing on web development projects using modern technologies to deliver high-quality solutions."
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                {/* Year and Title */}
                                <div>
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                {/* Timeline Line and Circle */}
                                <div className="relative">
                                    {/* Vertical Line */}
                                    {index < experiences.length - 1 && (
                                        <div className="absolute left-0 top-3 w-px h-40 bg-softGray"></div>
                                    )}

                                    {/* Circle */}
                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 flex items-center justify-center ${index === experiences.length - 1 ? 'bg-primary border-primary' : 'bg-white border-black'}`}>
                                            {index === experiences.length - 1 && (
                                                <div className="w-3.5 h-3.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company and Type */}
                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
