const Hero = () => {
    return (
        <section id="home" className = "relative flex flex-col-reverse md:flex-row h-screen bg-sky-700 pt-[5%] md:pt-[12%]">

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
          <button className="absolute z-10 h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl hover:text-blue-950 duration-200">
            Join Discord!
          </button>
          </div>


          </div>

          <div className = "relative h-[40%] md:h-[100%] w-full md:w-1/2 flex items-center justify-center md:justify-end md:pr-8 ">
            <img 
              className="absolute z-10 h-full md:h-[unset]"
              src="/user/coding.png" alt="Coding illustrasion"/>
          </div>

          
          <div className="w-full absolute top-0 overflow-x-hidden">
            <svg 
                 width="1610" height="1852" viewBox="0 0 1610 1852" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_799_80)">
                    <ellipse cx="1346.5" cy="528" rx="1146.5" ry="1124" fill="url(#paint0_radial_799_80)" />
                </g>
                <defs>
                    <filter id="filter0_f_799_80" x="0" y="-796" width="2693" height="2648"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_799_80" />
                    </filter>
                    <radialGradient id="paint0_radial_799_80" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(1283.26 513.548) rotate(86.4768) scale(968.783 988.346)">
                        <stop stop-color="#035E90" />
                        <stop offset="1" stop-color="#9AC3D9" stop-opacity="0.03" />
                    </radialGradient>
                </defs>
            </svg>
          </div>

          <div className="hidden md:block">
          <div className="absolute w-6 h-6 rounded-full bg-white bg-opacity-60 top-[5%] md:top-[22%] left-[10%] md:left-[60%]"></div>
          <div className="absolute w-12 h-12 rounded-full bg-amber-200 top-[90%] md:top-[80%] left-[70%] md:left-[45%]"></div>
          <div className="absolute w-7 h-7 rounded-full bg-amber-300 top-[15%] md:top-[18%] left-[10%] md:left-[10%]"></div>
          <div className="absolute w-8 h-8 rounded-full bg-blue-200 bg-opacity-60 top-[90%] md:top-[80%] left-[23%]"></div>
        </div>
        </section>
    )};
export default Hero;