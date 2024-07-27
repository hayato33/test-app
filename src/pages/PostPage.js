import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import parse from 'html-react-parser';

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p['id'] === Number(id));
  if (!post) return <div>記事が存在しません。</div>;
  const { title, thumbnailUrl, createdAt, categories, content } = post;
  const date = new Date(createdAt);

  return (
    <>
      <article className='max-w-3xl mx-auto mt-16'>
        <img src={thumbnailUrl} alt='アイキャッチ画像' />

        <div className='p-4'>
          <div className='flex justify-between mb-2'>
            <time dateTime={date} className='text-sm text-gray-400'>
              {date.toLocaleDateString()}
            </time>
            <ul className='flex'>
              {categories.map((category) => {
                return (
                  <li className='text-blue-600 border border-blue-600 ml-2 p-1 text-sm rounded'>
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
          <h2 className='text-2xl mb-4'>{title}</h2>
          <div>{parse(content)}</div>
        </div>
      </article>
    </>
  );
}
