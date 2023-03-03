import Wrapper from "../Wrapper";
import Button from "../sharedComps/Button";
import QuarterCard from "../sharedComps/QuarterCard";

const SpecializedTracks = () => {
  return (
        <Wrapper>
            <section>
                <div>
                    <h1 className="text-6xl font-bold mb-6">Specialized Tracks</h1>
                    <p className="text-lg text-slate-600 mt-4 capitalize mb-6">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                    <div className="border-2 border-black">
                        <h4 className="text-blue-700 text-base font-semibold">Specialized Track</h4>
                        <h2 className="text-3xl font-bold">Web 3.0 (Blockchain) and Metaverse  Specialization</h2>
                        <p className="text-lg text-slate-600 mt-4 capitalize">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
                        <Button text={"Learn more"}/>
                        <QuarterCard qnum={"4"} qrom={"IV"} qdesc={"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"}/>
                        <QuarterCard qnum={"5"} qrom={"V"} qdesc={"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"}/>
                    </div>
                </div>
            </section>
        </Wrapper>
  )
}

export default SpecializedTracks