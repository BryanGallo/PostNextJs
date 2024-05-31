"use client";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
    return (
        <div key={post.id} className="bg-emerald-500 rounded-md p-4">
            <p className="font-bold">
                {post.id}. {post.title}{" "}
                <Link href={`/post/${post.id}`} className="bg-emerald-200 rounded-md p-2"> Ver mas</Link>
            </p>
            <p className="font-thin">{post.body}</p>
            <div>
                <button
                    className="block bg-white p-2 rounded-md mx-auto my-3"
                    onClick={() => {
                        alert(post.title);
                    }}
                >
                    Ver Post
                </button>
            </div>
        </div>
    );
};

export default PostCard;
