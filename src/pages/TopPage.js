import Post from '../components/Post';
import { useEffect, useState } from 'react';

export default function TopPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        'https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts'
      );
      const { posts } = await res.json();
      setPosts(posts);
    };

    fetcher();
  }, []);

  return (
    <>
      <ul className='grid gap-6 max-w-3xl mt-8 mx-auto'>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
