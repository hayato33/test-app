import { posts } from '../data/posts';
import Post from '../components/Post';

export default function TopPage() {
  return (
    <>
      <ul className='grid gap-6 max-w-3xl mt-8 mx-auto'>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </>
  );
}
