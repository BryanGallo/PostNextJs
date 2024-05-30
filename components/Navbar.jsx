import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center font-semibold bg-emerald-300 h-10 text-xl p-8">
            <Link href="/">Posts</Link>
            <ul className="flex">
                <Link href="/" className="ml-2">
                    Home
                </Link>
                <Link href="/post" className="ml-2">
                    Post
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
