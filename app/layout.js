import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Post con nextJS",
    description: "",
    keywords:"NextJs - React"
};

// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
