const page = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return (
        <div>
            <h2 className="text-2xl">Posts</h2>
            <div className="grid grid-cols-4 gap-2 p-6">
                {data.map((d) => (
                    <div key={d.id} className="bg-emerald-500 rounded-md p-4">
                        <p className="font-bold">
                            {d.id}. {d.title}
                        </p>
                        <p className="font-thin">{d.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
