const QuarterCard = ({qnum, qrom, qdesc}: {qnum:string, qrom:string, qdesc:string}) => {
  return (
    <div className="flex-1 relative border-2 border-slate-300 rounded-md mx-6 my-4 px-6 pt-32 pb-8 -z-10">
      <span className="font-bold text-[200px] md:text-[250px] text-blue-200 opacity-40 absolute top-[-40px] right-14 cursor-pointer transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none ">
        {qnum}
      </span>
      <h3 className="font-bold text-lg py-2">Quarter {qrom}</h3>
      <p>{qdesc}</p>
    </div>
  );
};

export default QuarterCard;
