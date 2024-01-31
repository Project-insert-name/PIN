
import Link from "next/link";
const Hero = () => {
    return (
        <section id="home" className = "flex flex-col-reverse md:flex-row h-screen bg-sky-700 pt-[5%] md:pt-[12%]">

          <div className = "w-[95%] md:w-1/2 h-[45%] md:h-[100%] flex flex-col justify-center p-4 md:pl-[7rem]">
          <div>
            <h2 
              className="w-max text-5xl md:text-6xl bg-gradient-to-r from-amber-200 to-cyan-300 text-transparent bg-clip-text">
                Welkommen!
            </h2>
          </div>
          <div className = "text-xl pl-[0.25rem] mt-4">
            <p>
              {"Vi samles for å diskutere og lage kule ting sammen! Vi er en undergruppe av Root linjeforening og vi er helt åpne for å få flere inn!"}
            </p>
          </div>

          <div className="relative h-[20%] flex items-center mt-4">
          <Link className="absolute z-10 h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl hover:text-blue-950 duration-200" href="https://discord.gg/4jUpchPM" target="_blank">
            <button>
              Join Discord!
            </button>
          </Link>
          </div>


          </div>

          <div className = "relative h-[40%] md:h-[100%] w-full md:w-1/2 flex items-center justify-center md:justify-end md:pr-8 ">
            <img 
              className="absolute z-10 h-full md:h-[unset]"
              src="/user/coding.png" alt="Coding illustrasion"/>
          </div>

        </section>
    )};
export default Hero;