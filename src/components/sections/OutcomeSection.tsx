import Wrapper from "../Wrapper";
import Image from "next/image";
import OutcomePoster from "../../../public/images/outcome-poster.webp";

const OutcomeSection = () => {
  return (
    <section className="mt-24 lg:mt-40">
      <Wrapper>
        <div className="flex flex-col md:flex-row mx-4">
          <div className="flex-1 order-last md:order-first mt-8">
            <Image src={OutcomePoster} alt="Outcome-Poster" />
          </div>
          <div className="flex-1 relative">
            <div className="absolute right-0 md:h-80 md:w-80 bg-blue-300 blur-[150px] -z-20"></div>
            <h1 className="text-3xl sm:text-6xl leading-snug font-bold">
              The Outcome for Participants of the Program
            </h1>
            <p className="text-sm md:text-lg text-slate-600 mt-4 capitalize">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistans software exports.
            </p>
            <div className="flex mt-4">
              <div className="flex-1 flex flex-col gap-y-4 justify-between">
                <div className="flex items-center gap-x-4 max-w-sm">
                  <div className="p-1 rounded-md bg-gradient-to-t from-blue-600 to-cyan-300 rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-white w-4 md:wd-5 h-4 md:h-5 -rotate-45"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="flex-1 font-semibold text-sm md:text-lg">
                    Product Ownership
                  </p>
                </div>
                <div className="flex items-center gap-x-4 max-w-sm">
                  <div className="p-1 rounded-md bg-gradient-to-t from-blue-600 to-cyan-300 rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-white w-4 md:wd-5 h-4 md:h5 -rotate-45"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="flex-1 font-semibold text-sm md:text-lg">
                    Global Marketing by Panaverse DAO
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-x-4 max-w-sm">
                  <div className="p-1 rounded-md bg-gradient-to-t from-blue-600 to-cyan-300 rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-white w-4 md:wd-5 h-4 md:h5 -rotate-45"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="flex-1 font-semibold text-sm md:text-lg">
                    Freelancing
                  </p>
                </div>
                <div className="flex items-center gap-x-4 max-w-sm">
                  <div className="p-1 rounded-md bg-gradient-to-t from-blue-600 to-cyan-300 rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-white w-4 md:wd-5 h-4 md:h5 -rotate-45"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="flex-1 font-semibold text-sm md:text-lg">
                    Boosting Economy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OutcomeSection;
