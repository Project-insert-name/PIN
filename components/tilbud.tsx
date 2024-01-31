export default function Tilbud() {
  return (


    <section id="tilbud" className = "relative md:flex h-screen bg-sky-700 pt-[8%]">

      <div className = "h-[30%] md:h-full w-[90%] md:w-1/2 flex items-center justify-center m-auto md:ml-20 md:pr-8">
         <img src="/user/group-coding.png" alt="Coding illustrasion"/> 
      </div>

      <div className = "w-[90%] md:w-1/2 h-[100%] flex flex-col md:justify-center pl-8 pt-10 md:pt-0 md:pl-[7rem]">

        <div className="opacity-40">
          <span>
            Hva du får
          </span>
        </div>

        <div>
          <h2 className ="text-xl">
             <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              Join
              </span> 
              {" nå og se for deg selv"}
          </h2>
        </div>

        <div className = "w-[90%] text-xl mb-5">
          <p>
            Ingenting bedre enn å jobbe i grupper eller alene og få hjelp til personale prosjekter man holder på med!
          </p>
        </div>

        <div>
          <ul className="tilbud">
            <li className="mb-4">
              Lære å kode ved å kode selv
            </li>
            <li className="mb-4">
              Ha et trygt sted å gjøre feil
            </li>
            <li className="mb-4">
              Helt gratis
            </li>
          </ul>
        </div>


        <div className="relative flex items-center h-[20%]">
          <button className="absolute z-10 h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl  hover:text-black duration-200">
            Join Discord!
          </button>
        </div>


      </div>

      <div className="w-full absolute top-[25%] left-0 overflow-x-hidden">
        <svg width="1695" height="2105" viewBox="0 0 1695 2105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3" filter="url(#filter0_f_792_77)">
            <ellipse cx="238.5" cy="1052.5" rx="1256.5" ry="852.5" fill="url(#paint0_radial_792_77)"/>
            </g>
            <defs>
            <filter id="filter0_f_792_77" x="-1218" y="0" width="2913" height="2105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_792_77"/>
            </filter>
            <radialGradient id="paint0_radial_792_77" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.192 1041.54) rotate(84.916) scale(736.283 1080.95)">
            <stop stop-color="#023450"/>
            <stop offset="1" stop-color="#035E90" stop-opacity="0.03"/>
            </radialGradient>
            </defs>
        </svg>
       </div>
    </section>
  );

  };