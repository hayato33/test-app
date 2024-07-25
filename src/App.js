import './output.css';
import { posts } from './data/posts';
import Post from './components/Post';

export default function App() {
  console.log(posts);
  return (
    <>
      <header className='p-6 flex justify-between bg-gray-900 text-white font-bold'>
        <h1>
          <a href=''>Blog</a>
        </h1>
        <a href=''>お問い合わせ</a>
      </header>
      <ul className='grid gap-6 max-w-3xl mt-8 mx-auto'>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </>
  );
}
