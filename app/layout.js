import Link from "next/link";

export const metadata = {
    title: "Post con nextJS",
    description: "",
};

// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <nav className="flex justify-around items-center font-semibold bg-emerald-300 h-10 text-xl p-8">
                    <Link href="/">Post</Link>
                    <ul className="flex">
                        <Link href="/" className="ml-2">
                            Home
                        </Link>
                        <Link href="/post/categories" className="ml-2">
                            Categoría
                        </Link>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}
