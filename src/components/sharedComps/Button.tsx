const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button
        className="bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300 border-2 text-white text-lg rounded-full px-6 py-3 font-semibold shadow-2xl"
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
