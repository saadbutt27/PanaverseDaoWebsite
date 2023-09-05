"use client"

import Wrapper from "../Wrapper";
import Button from "../sharedComps/Button";
import QuarterCard from "../sharedComps/QuarterCard";
import SpecializedTrack from "../sharedComps/SpecializedTrack";
import Metaverse from "../../../public/images/metaverse.webp";
import AI from "../../../public/images/ai.webp";
import Cloud from "../../../public/images/cloud.webp";
import Ambient from "../../../public/images/ambient.webp";
import Genomics from "../../../public/images/genomics.webp";
import Network from "../../../public/images/network.webp";
import React, { useState } from 'react';
import Link from "next/link";

const SpecializedTracks = () => {
  const [data, setData] = useState({
    title:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    q4: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    q5: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
  });

  const handleChange = (title:string, description:string, q4:string, q5:string) => {
    let updatedValue = {};
    updatedValue = {title, description, q4, q5};
    setData(data => ({
         ...data,
         ...updatedValue
       }));
     }
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div>
          <div className="mx-4">
            <h1 className="text-6xl font-bold mb-6">Specialized Tracks</h1>
            <p className="text-lg text-slate-600 mt-4 capitalize mb-6">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row scroll-mt-24 md:h-screen">
            <div className="border-2 shadow-xl basis-3/5 mx-4 p-6">
              <h4 className="text-blue-700 text-base font-semibold">
                Specialized Track
              </h4>
              <h2 className="text-3xl font-bold max-w-xl leading-8 mt-2">
                {data.title}
              </h2>
              <p className="text-lg text-slate-600 mt-4 capitalize">
                {data.description}
              </p>
              <div className="my-4">
                <Button text={"Learn more"} type={false} />
              </div>
              <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-2 flex-wrap mt-10 -mx-4">
                <QuarterCard
                  qnum={"4"}
                  qrom={"IV"}
                  qdesc={
                    data.q4
                  }
                />
                <QuarterCard
                  qnum={"5"}
                  qrom={"V"}
                  qdesc={
                    data.q5
                  }
                />
              </div>
            </div>
            <div className="md:basis-2/5 ml-6 mt-4 lg:-mt-4 mr-4 md:overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-100 scrollbar-rounded-">
              <Link href={"#course-box"} onClick={() => handleChange("Web 3.0 (Blockchain) and Metaverse Specialization", "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.", "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps", "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences")} >
                <SpecializedTrack image={Metaverse} title={"Web 3.0 (Blockchain) and Metaverse Specialization"} />
              </Link>
              <Link href={"#course-box"} onClick={() => handleChange("Artificial Intelligence (AI) and Deep Learning Specialization", "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.", "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming", "AI-361: Deep Learning and MLOps")} > 
                <SpecializedTrack image={AI} title={"Artificial Intelligence (AI) and Deep Learning Specialization"} />
              </Link>
              <Link href={"#course-box"} onClick={() => handleChange("Cloud-Native Computing Specialization", "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.", "CN-351: Certified Kubernetes Application Developer (CKAD)", "CN-361: Developing Multi-Cloud Apps using CDK for Terraform")} >
                <SpecializedTrack image={Cloud} title={"Cloud-Native Computing Specialization"} />
              </Link>
              <Link href={"#course-box"} onClick={() => handleChange("Ambient Computing and IoT Specialization", "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.", "AC-351: Ambient Computing with Voice Assistants and Matter Devices", "AC-361: Embedded Programming using C and Rust")} >
                <SpecializedTrack image={Ambient} title={"Ambient Computing and IoT Specialization"} />
              </Link>
              <Link href={"#course-box"} onClick={() => handleChange("Genomics and Bioinformatics Specialization", "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.", "Bio-351: Python for Biologists", "Bio-361: Bioinformatics with Python")} >
                <SpecializedTrack image={Genomics} title={"Genomics and Bioinformatics Specialization"} />
              </Link>
              <Link href={"#course-box"} onClick={() => handleChange("Network Programmability and Automation Specialization", "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.", "NPA-351: CCNA 200-301 Certification", "NPA-361: Network Programmability and Automation")} >
                <SpecializedTrack image={Network} title={"Network Programmability and Automation Specialization"} />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
