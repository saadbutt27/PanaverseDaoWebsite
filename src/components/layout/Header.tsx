import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Logo from "../../../public/images/panaverse-logo.webp";

const Header = () => {
  return (
    <>
      <header className="py-4 h-auto sticky top-0 z-50 backdrop-blur-md bg-white bg-opacity-90">
        <Wrapper>
          <div className="flex justify-between items-center px-3">
            {/* Logo */}
            <div>
              <Link href={"#"}>
                <Image
                  src={Logo}
                  alt="panaverse-dao-logo"
                  height={120}
                  width={120}
                />
              </Link>
            </div>
            {/* Navbar */}
            <nav>
              <ul className="relative flex space-x-8 sm:space-x-12 text-lg font-medium text-gray-700">
                <li className="hover:text-blue-500 duration-200 select-none">
                  <Link href={"#"}>Home</Link>
                </li>
                <li className="group relative cursor-pointer select-none">
                  <div className="flex gap-x-1 items-center hover:text-blue-500">
                    <Link href={"/"}>Courses</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 hover:text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="sm:min-w-0 absolute right-0">
                    <ul
                      className="flex flex-col group-hover:max-h-max group-hover:py-2 max-h-0 w-64 md:w-80 overflow-hidden 
                       duration-500 bg-white text-xs sm:text-base font-normal rounded-md
                       group-hover:shadow-md px-1 group-hover:border border-transparent group-hover:border-slate-200 cursor-pointer"
                    >
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300 duration-200">
                        Web 3.0 and Metaverse Developer
                      </li>
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300 duration-200">
                        Cloud Native Computing
                      </li>
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300  duration-200">
                        Artificial Intelligence
                      </li>
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300  duration-200">
                        Ambient Computing and IoT
                      </li>
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300  duration-200">
                        Genomics and Bioinformatics
                      </li>
                      <li className="px-1 py-2 shrink-0 hover:bg-slate-300  duration-200">
                        Network Programmability and Automation
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
