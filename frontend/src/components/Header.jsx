const Header = () => {
    return (
      <div className="bg-black pb-4 w-full fixed flex flex-col justify-center items-center">
        <h1
          className="text-transparent mt-7 bg-clip-text bg-gradient-to-r from-blue-700 
          to-purple-500 font-extrabold text-6xl italic  decoration-wavy decoration-pink-500 drop-shadow-2xl animate-pulse"
        >
          Trusted by over 1 million
        </h1>
  
        <div className="w-full text-[20px] flex justify-center items-center mt-10">
          <p className="text-white font-thin">
            Unite teams across the globe to efficiently manage and collaborate on
            projects with{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 
          to-purple-500 font-extrabold italic decoration-wavy decoration-pink-500 drop-shadow-2xl animate-pulse"
            >
              Computing NvM
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;
  