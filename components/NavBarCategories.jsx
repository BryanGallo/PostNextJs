import Link from "next/link";

const NavbarCategories = () => {
    return (
        <nav className="font-semibold text-xl p-8">
            <span className="font-bold">Categorias</span>
            <ul className="list-disc">
                <li>
                    <Link href="/post/categories/computer" className="ml-2">
                        Computadoras
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarCategories;
