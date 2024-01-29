export default function Info () {
    return (
        <footer className="absolute bottom-0 z-20 h-[10vh] w-full bg-sky-900 flex justify-center items-center ">
            <div className="w-1/3 flex justify-center">
                <nav>
                    <ul className="flex gap-6">
                        <li>Om oss</li>
                        <li>Kontakt oss</li>
                    </ul>
                </nav>
            </div>
            <div className="w-1/3 flex justify-center">
                Copyright © 2024
            </div>
            <div className="w-1/3 flex justify-center">
                <ul className="flex flex-column items-center gap-4">
                    <li>
                        <a 
                            target="_blank"
                            href="https://www.facebook.com/RootLinjeforening">
                            <img src="/user/facebook.svg" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a 
                            target="_blank"
                            href="">
                            <img src="/user/twitter.svg" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a 
                            target="_blank"
                            href="https://www.instagram.com/linjeforeningenroot/">
                            <img src="/user/insta.svg" alt="Insta" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};