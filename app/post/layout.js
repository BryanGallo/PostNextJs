import React from "react";
import NavbarCategories from "@/components/NavBarCategories";

//no solo se usa en layout tambien podemos colocarle en los page
export const metadata = {
    title: "Categorias Nextjs",
    description: "",
    keywords:"NextJs - React"
};

const PostLayout = ({ children }) => (
    <>
        <div>
            <NavbarCategories />
        </div>
        <div>{children}</div>
    </>
);

export default PostLayout;
