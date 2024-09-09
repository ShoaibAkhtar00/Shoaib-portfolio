import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Android Application Development"
            subTitle="Udemy (JAN 2024 - APR 2024)"
            result="ONLINE"
            des="Successfully completed a 8 weeks online certified training on Android 14 & Kotlin Development Masterclass. "
          />
          <ResumeCard
            title="Internship & Job Preparation"
            subTitle="Internshala (AUG 2023 - SEP 2023)"
            result="ONLINE"
            des=" Successfully completed a 4 weeks online certified training on Internship & Job Preparation. The training consisted ofGetting Started with the Job Hunt, Building up your Gears, Going at the Front, and The Final Project modules. I scored 100% in the final assessment and was a top performer in the training."
          />
          <ResumeCard
            title="Data Structure with JAVA"
            subTitle="Apna College (JAN 2023 - JAN 2024)"
            result="ONLINE"
            des="Proficient in data structures (Arrays, Linked Lists, Stack, Queue, Heaps, Graphs, Trees) and algorithmic problem-solving. Skilled in optimizing time and space complexity, dynamic programming, and graph algorithms, with practical experience in real-world applications."
          />
          <ResumeCard
            title="Data Structures"
            subTitle="Campus Connection (SEP 2023 - OCT 2023)"
            result="BHILAI"
            des=" In this training i have learn about all the basics to the intermediate level so far and completed some of the data structure and solved about 60 questions so and it is increasing my level of knowledge and understanding."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
