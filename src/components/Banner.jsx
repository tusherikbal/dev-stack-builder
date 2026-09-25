import heroImg from '../assets/hero.png';

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 mt-5 md:mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 px-4 md:px-8">
        
        <img
          src={heroImg} 
          className="max-w-[15rem] sm:max-w-sm md:max-w-md"
          alt="Dev Stack Workspace"
        />
        
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            Build Your Ideal <br /> 
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="py-6 text-gray-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <button className="btn text-white border-none rounded-lg px-8 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 shadow-lg shadow-pink-200">
            Start Building
          </button>  
          <button className="btn text-black border border-gray-300 rounded-lg px-8 hover:bg-gray-100 ml-3">
            Learn More
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;