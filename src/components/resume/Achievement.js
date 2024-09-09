import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Top Performer in Web Development Training"
            subTitle="Internshala Training"
            result="Success"
            des="Recognized as the top performer in an intensive web development training program, where I achieved a perfect score of 100. This accomplishment reflects my deep understanding of web technologies, dedication to learning, and ability to apply complex concepts in practical scenarios. The training covered a broad range of topics, including front-end and back-end development, responsive design, and web optimization techniques, all of which I mastered to secure this top distinction."
          /> */}
          <ResumeCard
            title="Completed AICTE APP Development virual Internship"
            subTitle="Google Developer, Online"
            result="Success"
            des="Completed a prestigious app development internship with Google Developers, where I honed my skills in creating robust, user-friendly applications using the latest tools and technologies"
          />
          <ResumeCard
            title="Data Science Master Virtual Intership"
            subTitle="ALTAIR, Online"
            result="Success"
            des="Successfully completed an in-depth virtual internship in data science, gaining hands-on experience in data analysis, machine learning, and statistical modeling while mastering the latest tools and techniques for deriving actionable insights from complex datasets."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
