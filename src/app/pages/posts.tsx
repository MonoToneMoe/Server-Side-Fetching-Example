import { GetServerSideProps } from 'next';
import { Post } from '../types';
import { fetchData } from '../lib/api';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchData();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;