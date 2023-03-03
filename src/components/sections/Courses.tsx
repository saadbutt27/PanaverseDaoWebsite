import Wrapper from "../Wrapper";
import Button from "../sharedComps/Button";
import QuarterCard from "../sharedComps/QuarterCard";

const Courses = () => {
  return (
    <>
      <section className="mt-16 lg:mt-28">
        <Wrapper>
          <div className="max-w-screen-lg px-3 mb-16">
            <h4 className="text-blue-700 text-lg font-semibold">
              Program of Studies
            </h4>
            <h1 className="text-4xl sm:text-6xl leading-snug font-bold">
              Core Courses <br /> (Common In All Specializations)
            </h1>
            <p className="text-lg text-slate-600 mt-4">
              Every participant of the program will start by completing the
              following three core courses.
            </p>
            <div className="mt-6">
              <Button text={"Enroll Now"} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-evenly flex-wrap mt-10">
            <QuarterCard
              qnum={"1"}
              qrom={"I"}
              qdesc={"CS-101: Object Oriented Programming using Typescript"}
            />
            <QuarterCard
              qnum={"2"}
              qrom={"II"}
              qdesc={
                "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              }
            />
            <QuarterCard
              qnum={"3"}
              qrom={"III"}
              qdesc={
                "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
              }
            />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Courses;
