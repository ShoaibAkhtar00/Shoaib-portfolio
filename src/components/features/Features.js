import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaGamepad, FaAndroid } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I build responsive, user-friendly websites, combining clean code with modern design to deliver optimized, accessible, and visually appealing websites."
          icon={<AiFillAppstore />}
          onClick={() => window.location.href = 'https://www.google.com'}
        />
        <Card
          title="Android Development"
          des="I develop intuitive and dynamic Android applications, focusing on user-friendly interfaces, and innovative features that deliver a seamless and engaging mobile experience."
          icon={<FaAndroid />}
        />
        <Card
          title="3D Animation"
          des="I create detailed 3D animations, combining smooth movement with realistic models to deliver visually engaging and stunning experiences."
          icon={<SiProgress />}
        />
        <Card
          title="Product Designing"
          des="I design simple yet effective products, focusing on user needs and clean design to create practical, visually pleasing solutions."
          icon={<FaMobile />}
        />
        <Card
          title="UI Design"
          des="I design intuitive and visually appealing user interfaces, focusing on ease of use and a clean look to enhance the overall user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Blogging"
          des="I write engaging and informative blog posts, sharing insights and tips on various topics to connect with readers and spark meaningful discussions."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features