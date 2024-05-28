import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "Post con nextJS",
    description: "",
    keywords: "NextJs - React",
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    styles: ["normal", "italic"],
    variable: "--font-roboto",
});

// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${roboto.className}`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
