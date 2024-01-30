export default function Info () {
  return (
      <section className="h-[70vh] md:h-[90vh] bg-sky-800">
        <div className="h-[50%] md:h-[60%] flex flex-col justify-center items-center">
          <h2 className="text-5xl bg-gradient-to-r from-amber-200 to-cyan-300 text-transparent bg-clip-text">
            Join nå!
          </h2>
          <p className="text-xl mt-8 px-6">
            Les mer om Root eller join oss på Discord!
          </p>
        </div>
        <div className="h-[45%] md:h-[100px] flex flex-col md:flex-row gap-[8%] md:gap-[3%] justify-center items-center ">
          <div className="h-[35%] md:h-[90%] w-[70%] md:w-[22%] flex justify-center items-center bg-gradient-to-r from-amber-200 to-cyan-300 rounded-xl">

          <div className="flex h-[95%] w-[98%] items-center justify-center bg-sky-700 back rounded-xl">

            <div className="w-[35%]">
              <img className="m-auto" src="/user/browser.svg" alt="bildet av discord" />
            </div>

            <div className="w-[65%]">
              <h2 className="text-xs text-amber-300">
                Nettsiden til
              </h2>
              <p className="text-2xl text-amber-300">
                Root
              </p>
            </div>
          </div>

          </div>
          <div className="h-[35%] md:h-[90%] w-[70%] md:w-[22%] flex justify-center items-center bg-sky-900 bg-opacity-80 border-2 border-solid border-sky-900 border-opacity-80 rounded-xl p-6">
          
          <div className="w-[35%]">
            <img className="m-auto" src="/user/discord.svg" alt="bildet av discord" />
          </div>

          <div className="w-[65%]">
            <h2 className="text-xs">
                Joins oss på
            </h2>
            <p className="text-2xl">
              Discord
            </p>
          </div>

        </div>
        </div>
      </section>
  );
};