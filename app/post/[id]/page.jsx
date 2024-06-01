import { Suspense } from "react";
import PostsPage from "../page";
import Spinner from "@/components/Spinner";
async function loadPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
}

async function PostPage({ params }) {
    const { id } = params;
    const post = await loadPost(id);
    console.log(post);
    return (
        <>
            <div
                key={post.id}
                className="bg-emerald-500 rounded-md p-4 w-1/2 mx-auto mt-3"
            >
                <p className="font-bold">
                    {post.id}. {post.title}
                </p>
                <p className="font-thin">{post.body}</p>
            </div>
            <p>Post adicionales</p>
            <Suspense fallback={<Spinner />}>
                <PostsPage />
            </Suspense>
        </>
    );
}

export default PostPage;
