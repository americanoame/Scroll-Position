import { FaHandPointRight } from "react-icons/fa";

const ScrollIcon = ({ scrollPosition }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center p-4 mb-[100px]  relative">
      <div className="max-w-xs max-h-40 flex items-center justify-center transition-transform ease-in-out duration-200 sticky top-72">
        <FaHandPointRight
          className={`w-24 h-24 text-yellow-950 shadow-2xl animate-pulse rounded-full p-2 ${
            scrollPosition > 50 ? "scale-110" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
};

export default ScrollIcon;
