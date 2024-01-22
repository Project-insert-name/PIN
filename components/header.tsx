export default function Header() {
  return (
    <header className="w-[95%] mt-2 rounded-3xl fixed z-10 left-1/2 transform -translate-x-1/2 border-l-2 border-t-2 border-sky-400 border-opacity-25 shadow-[15px_20px_0px_0px_rgba(0,0,0,0.1)] h-[12vh] bg-sky-700 px-6 flex items-center ">
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
                <img src="/user/contact4.svg" alt="Contact icon" />
              </div>
              <span>Contact</span>
            </li>
            <li className="bg-white bg-opacity-25 flex items-center gap-2 px-6 py-3 rounded-2xl">
              <div>
                <img src="/user/discord.svg" alt="Discord icon" />
              </div>
              <span>Join</span>
            </li>
          </ul>
        </nav>
      </section>
    </header>
)};