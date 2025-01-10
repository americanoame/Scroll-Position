import { useRef, useState } from "react";
import ScrollIcon from "../components/ScrollIcon";
import { content } from "../../contentData";


const ScrollSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRefs = useRef([]);

  const handleScroll = (e) => {
    console.log("Scroll event triggered");
    setScrollPosition(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollTop);
  };

  return (
    <div className=" flex items-start justify-center ">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] h-full">

      <ScrollIcon  scrollPosition={scrollPosition} />

        <div
          className="w-full mt-72 md:w-1/2 overflow-y-auto bg-white"
          onScroll={handleScroll}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="mb-24  pb-4"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <h2 className="text-[45px]  font-bold mb-4 ">{item.title}</h2>
              <p className="text-[18px] leading-loose text-gray-700">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
