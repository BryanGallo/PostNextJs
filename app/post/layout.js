import React from "react";
import NavbarCategories from "@/components/NavBarCategories";

const PostLayout = ({ children }) => (
    <>
        <div>
            <NavbarCategories />
        </div>
        <div>{children}</div>
    </>
);

export default PostLayout;
