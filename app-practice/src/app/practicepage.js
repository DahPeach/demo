import Post from "@/components/Post";

export default function Home() {
    const posts = [
        {
            title: "My Post",
            author: "Allyson Padilla",
            content: "I am learning code",
            following: false,
        },
        {
            title: "My Post 2",
            author: "Allyson Padilla",
            content: "just testing things out",
            following: true,
        },
        {
            title: "My Post 3",
            author: "Allyson Padilla",
            content: "this is another post",
            following: false,
        },
    ];

    return (
        <>
        {posts.map((content, idx) => {
            return <Post {...content} key={idx} />;
        })}
        </>
    );
}