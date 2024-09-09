import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import {ProjectsCardOne,ProjectsCardTwo,ProjectsCardThree,ProjectsCardFour,ProjectsCardFive,ProjectsCardSix} from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND SUBMIT YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCardOne
          title="PG-LIFE"
          des="A website that helps you find available rooms near your location or a selected area, making it easier to discover and choose the perfect living space."
          src={projectOne}
        />
        <ProjectsCardTwo
          title="Java Algorithm Visualizer"
          des=" Developed in Java, this project helps users visualize and understand a variety of algorithms, including shortest path, sorting algorithms, graph algorithms, and more. It’s an educational tool designed to simplify complex concepts through interactive visualizations."
          src={projectTwo}
        />
        <ProjectsCardThree
          title="WebChat"
          des=" WebChat is a modern web-based messaging platform that connects users through instant text, image, audio, and file exchanges. The application includes secure login and registration processes, supports engaging group chats, and utilizes strong encryption to ensure all communications are private and secure."
          src={projectThree}
        />
        {/* <ProjectsCardFour
          title="Shooting Game"
          des="An action-packed game featuring high-quality graphics, where players aim and shoot targets within a set time limit for an immersive and challenging experience."
          src={projectFour}
        /> */}
        <ProjectsCardFive
          title="Web Store"
          des="An online local store platform offering a user-friendly shopping experience with product listings, a shopping cart, and seamless checkout options."
          src={projectFive}
        />
        <ProjectsCardSix
          title="Web Extension"
          des="A Chrome extension that accurately measures your internet speed, providing real-time insights into your download and upload performance."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects