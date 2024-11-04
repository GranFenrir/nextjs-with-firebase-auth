import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../constants/routes";
import Link from "next/link";


const Header = () => {
    const isLogin = false;
    return (
        <header className="h-20 bg-zinc-500 flex px-10 drop-shadow-md md:drop-shadow-xl">
            <nav className="w-full flex justify-between items-center">
                <div>Logo</div>
                <ul className="flex gap-4">
                    {!isLogin &&
                        <>
                            <li>
                                <Link href={HOME_ROUTE}>Home</Link>
                            </li>
                            <li>
                                <Link href={REGISTER_ROUTE}>Register</Link>
                            </li>
                            <li>
                                <Link href={LOGIN_ROUTE}>Login</Link>
                            </li>
                        </>
                    }

                    {isLogin &&
                        <>
                            <li>
                                <a href="/profile">Profile</a>
                            </li>
                            <li>
                                <a href="/logout">Logout</a>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;