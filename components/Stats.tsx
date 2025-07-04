"use client";

import Countup from "react-countup";

const stats = [
  { id: 1, value: 2, label: "Years of Experience" },
  { id: 2, value: 15, label: "Projects Completed" },
  { id: 4, value: 10, label: "Techlogies Mastered" },
  { id: 3, value: 34, label: "Contributions" },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 maz-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start "
            >
              <Countup
                className="text-4xl xl:text-6xl font-extrabold"
                end={stat.value}
                duration={5}
                delay={2}
              />

              <p
                className={`${
                  stat.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
