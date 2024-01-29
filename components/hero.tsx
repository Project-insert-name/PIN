const Hero = () => {
    return (
        <section className = "flex h-screen bg-sky-700 pt-[12%]">

        <div className = "w-1/2 h-[100%] flex flex-col justify-center pl-[7rem]">

        <div>
        <h2 
          className="w-max text-6xl bg-gradient-to-r from-cyan-200 to-blue-300 text-transparent bg-clip-text">
            Welkommen!
        </h2>
        </div>
        <div className = "text-xl pl-[0.25rem] mt-4">
          <p>
            {"Vi samles for å diskutere og lage kule ting sammen! Vi er en undergruppe av Root linjeforening og vi er helt åpne for å få flere inn!"}
          </p>
        </div>

        <div className="relative h-[20%] flex items-center mt-4">
        <button className="absolute z-10 h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl hover:text-blue-950 duration-200">
          Join Discord!
        </button>
        </div>


        </div>



        <div className = "h-[100%] w-1/2 flex items-center justify-end pr-8 relative">
          <img 
            className="absolute z-10"
            src="/user/coding.png" alt="Coding illustrasion"/>
        </div>

      </section>
        );
    };
    
    export default Hero;