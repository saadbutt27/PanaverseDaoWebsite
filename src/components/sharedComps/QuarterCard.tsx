const QuarterCard = ({qnum, qrom, qdesc}: {qnum:string, qrom:string, qdesc:string}) => {
  return (
    <div className="flex-1 relative border border-slate-300 rounded-md mx-4 md:mx-4 my-2 px-4 py-12 cursor-pointer select-none group">
      <h3 className="font-bold text-sm md:text-base lg:text-lg py-2">Quarter {qrom}</h3>
      <p className="mt-2 text-slate-600 text-sm md:text-xs lg:text-base">{qdesc}</p>
      <div className="absolute -top-8 md:top-0 right-10 text-blue-200 opacity-40 text-[10rem] md:text-[8rem] lg:text-[12rem] font-extrabold -z-10 group-hover:-translate-y-4 duration-300 ">
        {qnum}
      </div>
    </div>
  );
};

export default QuarterCard;