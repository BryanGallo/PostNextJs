"use client";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
    return (
        <div key={post.id} className="bg-emerald-500 rounded-md p-4">
            <p className="font-bold">
                {post.id}. {post.title}{" "}
            </p>
            <p className="font-thin">{post.body}</p>
            <div className="flex flex-col lg:flex-row">
                <button
                    className="block bg-white p-2 rounded-md mx-auto my-3"
                    onClick={() => {
                        alert(post.title);
                    }}
                >
                    Previsualizar Post
                </button>
                <button className="block bg-white p-2 rounded-md mx-auto my-3">
                    <Link href={`/post/${post.id}`}> Ver mas</Link>
                </button>
            </div>
        </div>
    );
};

export default PostCard;
