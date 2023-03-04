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

const SpecializedTracks = () => {
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
          <div className="flex flex-col lg:flex-row">
            <div className="border-2 shadow-xl basis-3/5 mx-4 p-6">
              <h4 className="text-blue-700 text-base font-semibold">
                Specialized Track
              </h4>
              <h2 className="text-3xl font-bold max-w-xl leading-8 mt-2">
                Web 3.0 (Blockchain) and Metaverse Specialization
              </h2>
              <p className="text-lg text-slate-600 mt-4 capitalize">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <div className="my-4">
                <Button text={"Learn more"} />
              </div>
              <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-2 flex-wrap mt-10 -mx-4">
                <QuarterCard
                  qnum={"4"}
                  qrom={"IV"}
                  qdesc={
                    "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                  }
                />
                <QuarterCard
                  qnum={"5"}
                  qrom={"V"}
                  qdesc={
                    "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                  }
                />
              </div>
            </div>
            <div className="basis-2/5 ml-6 mt-4 lg:-mt-4 mr-4">
              <SpecializedTrack image={Metaverse} title={"Web 3.0 (Blockchain) and Metaverse Specialization"} />
              <SpecializedTrack image={AI} title={"Artificial Intelligence (AI) and Deep Learning Specialization"} />
              <SpecializedTrack image={Cloud} title={"Cloud-Native Computing Specialization"} />
              <SpecializedTrack image={Ambient} title={"Ambient Computing and IoT Specialization"} />
              <SpecializedTrack image={Genomics} title={"Genomics and Bioinformatics Specialization"} />
              <SpecializedTrack image={Network} title={"Network Programmability and Automation Specialization"} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
