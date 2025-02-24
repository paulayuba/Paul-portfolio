"use client";
import CountUp from "react-countup";

const stats = [
  { num: 10, text: "Years of experience" },
  { num: 26, text: "Projects complete" },
  { num: 5, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="mb-20 xl:mb-32">
      <div className="container mx-auto mb-72">
        <div className="flex flex-wrap gap-6 xl:gap-x-12 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp 
                end={item.num} 
                duration={5} 
                delay={1}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`leading-snug text-white/80 ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
