import Head from "next/head";
import Hero from "../components/hero";

const MainRoot = () => {
  return (
    <>
      <Head>
        <style>{`
          * {
            font-family: "Inter", sans-serif !important;
          }
         `}</style>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,400;0,600;0,700;1,700&family=Poppins:wght@400;600;700&display=swap" />
        <title>{"<PIN/>"}</title>
       </Head>
      <header className="w-[95%] mt-2 rounded-3xl fixed left-1/2 transform -translate-x-1/2 border-l-2 border-t-2 border-sky-400 border-opacity-25 shadow-[15px_20px_0px_0px_rgba(0,0,0,0.1)] h-[12vh] bg-sky-700 px-6 flex items-center ">
        <section className="w-1/2">
          <h1 className=" text-6xl">{"<PIN/>"}</h1>
        </section>
        <section className="w-1/2">
          <nav>
            <ul className="flex justify-end gap-4">
              <li className="flex items-center gap-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span>Home</span>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <img src="/public/user/contact4.svg" alt="Contact icon" />
                </div>
                <span>Contact</span>
              </li>
              <li className="bg-white bg-opacity-25 flex items-center gap-2 px-6 py-3 rounded-2xl">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span>Join</span>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <Hero />
      <section className="h-screen bg-sky-700 mt-[-10%]">

          <div className="h-[50vh] flex flex-col justify-center items-center">
            <h2>
              Undergruppe av Rootsassasdasdsd
            </h2>
            <p>
              Vi ønsker å samles minst syfbssj dsiofios odspfkdsopjfisfds
            </p>
          </div>

          <div className="h-[50vh] flex gap-[3%] justify-center items-center ">

            <div className="h-[40%] w-[25%] flex flex-col justify-center items-center border border-solid rounded-3xl p-6">
              <h2 className="text-2xl">
                Lage prosjekt
              </h2>
              <p>
                ijbhaiu balala blaaaa
              </p>
            </div>

            <div className="h-[40%] w-[25%] flex flex-col  justify-center items-center border border-solid rounded-3xl p-6 ">
              <h2 className="text-2xl">
                Lage prosjekt
              </h2>
              <p>
                ijbhaiu balala blaaaa
              </p>
            </div> 

            <div className="h-[40%] w-[25%] flex flex-col  justify-center items-center border border-solid rounded-3xl p-6 ">
              <h2 className="text-2xl">
                Lage prosjekt
              </h2>
              <p>
                ijbhaiu balala blaaaa
              </p>
            </div>
            
            

          </div>

          

      </section>
    </>
  );
};

export default MainRoot;
