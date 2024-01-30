export default function Info () {
    return (
        <footer className="h-[40vh] md:h-[10vh] w-full bg-sky-900">
                
            <div className="h-[60%] md:h-full flex flex-col md:flex-row justify-center md:items-center gap-8 md:gap-0"> 
                <div className="w-[40%] md:w-1/3 flex justify-center">
                    <nav>
                        <ul className="text-xl md:text-[unset] flex flex-col md:flex-row gap-4 md:gap-6 pl-5 md:pl-0">
                            <li> <span className="md:hidden">○</span> Om oss</li>
                            <li> <span className="md:hidden">○</span> Kontakt oss</li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:flex w-1/3 justify-center pl-5 md:pl-0">
                    Copyright © 2024
                </div>
                
                <div className="hidden w-full md:w-1/3 md:flex justify-center">
                    <ul className="flex flex-column items-center gap-6 md:gap-4">
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
            </div>

                <div className="md:hidden h-[40%]">
                    <div className="h-1/2 w-full flex justify-center items-center">
                        <ul className="flex items-center gap-6">
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

                    <div className="md:hidden w-full flex justify-center">
                        Copyright © 2024
                    </div>
                </div>

        </footer>
    );
};