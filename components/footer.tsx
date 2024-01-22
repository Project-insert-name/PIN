export default function Info () {
    return (
        <footer className="h-[10vh] bg-sky-900 flex justify-center items-center ">

            <div className="w-1/3 flex justify-center">
                <nav>
                    <ul className="flex gap-6">
                        <li>Blah blah</li>
                        <li>Kontaks oss</li>
                    </ul>
                </nav>
            </div>

            <div className="w-1/3 flex justify-center">
                Copyright © 2024
            </div>

            <div className="w-1/3 flex justify-center">
                <ul className="flex flex-column items-center gap-4">

                    <li>
                        <img src="/user/facebook.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img src="/user/twitter.svg" alt="Twitter" />
                    </li>
                    <li>
                        <img src="/user/insta.svg" alt="Insta" />
                    </li>

                </ul>
            </div>

        </footer>
    );
};