const Hero = () => {
    return (
        <section className = "flex h-screen bg-sky-800">

        <div className = "w-1/2 h-[112%] flex flex-col justify-center pl-[7rem]">

        <div>
          <h2 className = "text-6xl text-white">
            Test
          </h2>
        </div>
        <div className = "text-xl pl-[0.25rem]">
          <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetu iudfjidbgdjbgj ijdngjbdgbjgbpa gjboadnjkabpjgbpdaffjnjdn gapjngajefddnanvjkbad
          </p>
        </div>

        <div className="flex items-center h-[20%]">
        <button className="h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl text-white hover:text-black duration-200">
          Join Discord!
        </button>
        </div>


        </div>



        <div className = "h-[112%] w-1/2 flex items-center justify-end pr-8">
          <img src="/public/user/coding.png" alt="Coding illustrasion"/>
        </div>

      </section>
        );
    };
    
    export default Hero;