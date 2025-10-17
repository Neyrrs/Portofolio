import React from "react";
import SplitText from "@/components/fragments/split-text";

const timelineData = [
  {
    title: "SMPN 3 Cibinong",
    period: "2020 - 2023",
    description:
      "Fokus pada jurusan RPL dan mulai mendalami pengembangan web menggunakan JavaScript.",
  },
  {
    title: "SMKN 1 CIBINONG",
    period: "2023",
    description:
      "Menguasai dasar-dasar React dan Node.js untuk memahami alur front-end dan back-end.",
  },
  {
    title: "Membangun Project Portfolio",
    period: "2024",
    description:
      "Mengerjakan project pribadi menggunakan React, Tailwind, dan Express untuk memperdalam skill.",
  },
];

const Skills = () => {
  return (
    <div className="flex justify-between w-screen min-h-screen">
      <div className="w-full h-full">
        adasd
      </div>
      <section className="w-full px-5 bg-primary py-10 flex flex-col items-start text-primary-foreground">
        <SplitText
          text="My Career Journey"
          className="text-5xl font-bold mb-12 text-center"
          delay={40}
          duration={0.4}
          ease="easepower3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        <div className="relative w-full max-w-2xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-primary-foreground/30"></div>

          <div className="flex flex-col gap-5">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-foreground rounded-full border-4 border-primary"></div>

                <div
                  className={`flex flex-col gap-2 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 w-[calc(50%-1rem)] ${
                    index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm opacity-70">{item.period}</span>
                  <p className="text-sm opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
