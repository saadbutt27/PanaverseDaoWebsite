import Wrapper from "../Wrapper";
import Button from "../sharedComps/Button";
import QuarterCard from "../sharedComps/QuarterCard";

const Courses = () => {
  return (
    <>
      <section className="mt-16 lg:mt-28">
        <Wrapper>
          <div className="max-w-screen-md px-3 mb-16">
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
              <Button text={"Enroll Now"} type={true} />
            </div>
          </div>
          {/* <svg
            className="h-full w-full "
            width="1071"
            height="470"
            viewBox="0 0 1071 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M27 332C75 367 186.8 433 250 417C329 397 348.5 294 470.5 270C592.5 246 682 329.5 776.5 209C871 88.5002 912 26.5002 1044 26.5002"
                stroke="url(#paint0_linear_0_1)"
                stroke-opacity="0.8"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                shape-rendering="crispEdges"
              ></path>
            </g>
            <rect
              x="151.5"
              y="374.996"
              width="64"
              height="64"
              rx="20"
              fill="white"
            ></rect>
            <rect
              x="171.5"
              y="394.996"
              width="23"
              height="23"
              rx="10"
              fill="#C4C4C4"
            ></rect>
            <rect
              x="618.5"
              y="242.999"
              width="64"
              height="64"
              rx="20"
              fill="white"
            ></rect>
            <rect
              x="638.5"
              y="262.999"
              width="23"
              height="23"
              rx="10"
              fill="#C4C4C4"
            ></rect>
            <rect x="955" width="64" height="64" rx="20" fill="white"></rect>
            <rect
              x="975"
              y="20"
              width="23"
              height="23"
              rx="10"
              fill="#C4C4C4"
            ></rect>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0.499878"
                y="24.0002"
                width="1070"
                height="445.959"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="24"></feOffset>
                <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_0_1"
                x1="535.5"
                y1="26.5002"
                x2="535.5"
                y2="419.459"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00E5FF"></stop>
                <stop offset="1" stop-color="#0B4DD0"></stop>
              </linearGradient>
            </defs>
          </svg> */}
          <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-2 flex-wrap mt-10">
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
