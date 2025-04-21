"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedPinDemo } from "./AnimatedPin";

// SlideUp component
const SlideUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export function ThreeDCardDemo() {
  return (
    <div className="bg-black py-12 px-6">
      <div className="text-6xl text-white font-bold max-w-5xl mx-auto md:mx-40 md:max-w-full text-center">
        Featured Projects
      </div>
      <p className="mx-auto mt-10 md:mx-40 md:max-w-full text-center text-md text-white">Building Scalable and Impactful Projects with Cutting-Edge Technologies</p>

      <div className="mt-2 md:mx-40 flex">

        {/* Mind Stack */}
        <SlideUp delay={0}>
          <AnimatedPinDemo
            href={"https://github.com/aaryyann/mindstack"}
            title={"Mind Stack"}
            desc={"Developed a full-stack web application that allows users to securely sign up, log in, and manage embedded social media posts via a personalized dashboard."}
            src="/mindstack.png"
          />
        </SlideUp>

        {/* Waste Watchers */}
        <SlideUp delay={0.2}>
          <AnimatedPinDemo
            href={"https://github.com/aaryyann/Wastewatchers"}
            title={"Waste Watcher"}
            desc={"Built a decentralized waste management app enabling users to report, track, and manage waste disposal using a secure system with Web3 authentication."}
            src="/wastewatchers.png"
          />
        </SlideUp>

        {/* Report Crime */}
        <SlideUp delay={0.4}>
          <AnimatedPinDemo
            href={"https://github.com/aaryyann/report-crime"}
            title={"Report Crime"}
            desc={"Developed a full-stack application that allows users to report crimes securely, with role-based access and real-time tracking of submitted cases through a user-friendly dashboard."}
            src="/wastewatchers.png"
          />
        </SlideUp>
      </div>
    </div>
  );
}
