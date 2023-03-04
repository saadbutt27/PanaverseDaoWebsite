import Image, { StaticImageData } from "next/image";

const SpecializedTrack = ({image, title}: {image:StaticImageData, title:string}) => {
  return (
    <div className="flex items-center group border-b-2 border-slate-300 py-8">
      <div className="bg-gradient-to-b from-blue-600 to-cyan-400 rounded">
        <div className="w-40 h-24 relative">
          <Image
            src={image}
            alt="Web 3.0"
            width={0}
            height={0}
            className="rounded object-cover w-full h-full group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 absolute inset-0"
          />
        </div>
      </div>
      <div className="max-w-max mx-4">
        <h4 className="text-blue-700 text-xs md:text-base font-semibold">
          Specialized Track
        </h4>
        <h2 className="text-base md:text-xl font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SpecializedTrack;
