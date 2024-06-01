import PostCard from "@/components/PostCard";

const PostsPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    //simular carga para probar loading
    await new Promise((resolve, reject) => {
        return setTimeout(resolve, 3000);
    });
    const data = await response.json();

    return (
        <div>
            <h2 className="text-2xl">Posts</h2>
            <div className="grid grid-cols-4 gap-2 p-6">
                {data.map((d) => (
                    <PostCard key={d.id} post={d} />
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
