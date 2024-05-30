'use client'
import React from "react";

const PostCard = ({ post }) => {
    return (
        <div key={post.id} className="bg-emerald-500 rounded-md p-4">
            <post className="font-bold">
                {post.id}. {post.title}
            </post>
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
