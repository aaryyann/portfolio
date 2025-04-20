"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Img from 'next/image';

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
      
      <div className="mt-2 md:mx-40 space-y-12">

        {/* Mind Stack */}
        <SlideUp delay={0}>
          <CardContainer className="inter-var w-[100%]">
            <CardBody className="hover:shadow-cyan-500/[0.2] relative group/card hover:shadow-2xl hover:shadow-red-500/[0.28] w-auto md:w-[100%] h-auto rounded-xl p-4 md:flex md:justify-around">
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-white">Mind Stack</CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-md font-normal max-w-sm mt-2">
                  Developed a full-stack web application that allows users to securely sign up, log in, and manage embedded social media posts via a personalized dashboard.
                </CardItem>
                <div className="flex justify-between items-center mt-15">
                  <CardItem translateZ={20} as="a" href="https://github.com/aaryyann/mindStack" target="__blank" className="px-4 text-white py-2 rounded-xl text-xs font-bold">
                    Source Code →
                  </CardItem>
                  <CardItem translateZ={20} as="a" href="https://mind-stack-psi.vercel.app/" className="px-4 py-2 rounded-xl bg-white text-red-600 text-xs font-bold">
                    Live Link
                  </CardItem>
                </div>
              </div>
              <div>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Img
                    src="/mindstack.png"
                    height="1000"
                    width="1000"
                    className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl hover:shadow-red-500/[0.15]"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </SlideUp>

        {/* Waste Watchers */}
        <SlideUp delay={0.2}>
          <CardContainer className="inter-var w-[100%]">
            <CardBody className="hover:shadow-cyan-500/[0.2] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.28] w-auto md:w-[100%] h-auto rounded-xl p-4 md:flex md:justify-around">
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-white">Waste Watchers</CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-md font-normal max-w-sm mt-2">
                  Built a decentralized waste management platform enabling users to report, track, and manage waste disposal using a secure and transparent system with Web3 authentication.
                </CardItem>
                <div className="flex justify-between items-center mt-15">
                  <CardItem translateZ={20} as="a" href="https://github.com/aaryyann/Wastewatchers" target="__blank" className="px-4 text-white py-2 rounded-xl text-xs font-bold">
                    Source Code →
                  </CardItem>
                  <CardItem translateZ={20} as="a" href="https://github.com/aaryyann/Wastewatchers" className="px-4 py-2 rounded-xl bg-white text-green-600 text-xs font-bold">
                    Live Link
                  </CardItem>
                </div>
              </div>
              <div>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Img
                    src="/wastewatchers.png"
                    height="1000"
                    width="1000"
                    className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl hover:shadow-emerald-500/[0.25]"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </SlideUp>

        {/* Report Crime */}
        <SlideUp delay={0.4}>
          <CardContainer className="inter-var w-[100%]">
            <CardBody className="hover:shadow-cyan-500/[0.2] relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.28] w-auto md:w-[100%] h-auto rounded-xl p-6 md:flex md:justify-around">
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-white">Report Crime</CardItem>
                <CardItem as="p" translateZ="60" className="text-white text-md font-normal max-w-sm mt-2">
                  Developed a full-stack application that allows users to report crimes securely, with role-based access and real-time tracking of submitted cases through a user-friendly dashboard.
                </CardItem>
                <div className="flex justify-between items-center mt-15">
                  <CardItem translateZ={20} as="a" href="https://github.com/aaryyann/report-crime" target="__blank" className="px-4 py-2 text-white rounded-xl text-xs font-bold">
                    Source Code →
                  </CardItem>
                  <CardItem translateZ={20} as="a" href="https://github.com/aaryyann/report-crime" className="px-4 py-2 rounded-xl bg-white text-blue-600 text-xs font-bold">
                    Live Link
                  </CardItem>
                </div>
              </div>
              <div>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Img
                    src="/wastewatchers.png"
                    height="1000"
                    width="1000"
                    className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl hover:shadow-blue-500/[0.25]"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </SlideUp>

      </div>
    </div>
  );
}
