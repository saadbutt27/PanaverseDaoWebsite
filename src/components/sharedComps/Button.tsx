const Button = ({ text, type }: { text: string; type: boolean }) => {
  if (type) {
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
  } else {
    return (
      <>
        <button
          className="flex items-center group text-blue-500 hover:bg-gray-100 duration-300 border-[1px] border-blue-500 text-lg rounded-md px-4 py-2 font-semibold shadow-2xl"
          type="submit"
        >
          {text}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-1 mt-1 group-hover:translate-x-1 duration-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </button>
      </>
    );
  }
};

export default Button;
