import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Button from "../sharedComps/Button";
import HeroImage from "../../../public/images/profile.jpg"

const HeroSection = () => {
  return (
    <>
      <section className="px-4">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-blue-700 text-lg font-semibold">
                Presidential Initiative for Artificial Intelligence and
                Computing (PIAIC)
              </h3>
              <h1 className="text-4xl sm:text-6xl leading-snug font-bold">
                Certified Web 3.0 and Metaverse Developer
              </h1>
              <p className="text-lg text-slate-600 mt-4 capitalize">
                A one quarter years panaverse DAO earn as you learn program
                getting ready for the next generation of the internet
              </p>
              <p className="text-lg text-slate-600 mt-4 capitalize">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence(AI),
                cloud, edge, ambient computing/IOT, Network Automation and
                Bioinformatic technoligies
              </p>
              <div className="mt-6">
                <Button text={"Learn more"} type={true} />
              </div>
            </div>
            <div className="flex-1 mx-5">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="rounded-full"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default HeroSection;
