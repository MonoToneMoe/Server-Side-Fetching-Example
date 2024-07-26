import StocksComponent from "@/components/StocksComponent";
import { fetchData } from "./lib/api";
import { Post } from "./types";

const HomePage = async () => {
  const posts: Post[] = await fetchData();

  return (
    <div>
      <StocksComponent />
      <StocksComponent />
      <h1>Posts</h1>
      <ul className="flex flex-col gap-4 px-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="text-lg">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage