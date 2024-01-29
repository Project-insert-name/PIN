
import Link from "next/link";
import {scrollToSection} from "../public/scripts/smoothScroll"

export default function Header() {
  function handleHomeClick(){
    scrollToSection("home")
  }
  function handleContactClick(){
    scrollToSection("contact")
  }
  return (
    <header className="w-[95%] mt-2 rounded-3xl fixed z-20 left-1/2 transform -translate-x-1/2 border-l-2 border-t-2 border-sky-400 border-opacity-25 shadow-[15px_20px_0px_0px_rgba(0,0,0,0.1)] h-[12vh] bg-sky-700 px-6 flex items-center ">
      <section className="w-1/2">
        <h1 className=" text-6xl">{"<PIN/>"}</h1>
      </section>
      <section className="w-1/2">
        <nav>
          <ul className="flex items-center justify-end gap-4">
            <li >
              <button className="flex items-center gap-1" onClick={handleHomeClick}>
                  <div>
                    <img src="/user/home.svg" alt="Home icon" />
                  </div>
                  <span>Home</span>
                </button>
              </li>     
            <li >
              <Link href="">
                <button className="flex items-center gap-1" onClick={handleContactClick}>
                  <div>
                    <img src="/user/contact.svg" alt="Contact icon" />
                  </div>
                  <span>Contact</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/4jUpchPM" target="blank">
                <button  className="group bg-white bg-opacity-25 hover:bg-sky-300 duration-200 flex items-center gap-1 px-6 py-3 rounded-2xl">
                  <div>
                    <img src="/user/discord.svg" alt="Discord icon" />
                  </div>
                  <span className="group-hover:text-blue-950">Join</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
)};