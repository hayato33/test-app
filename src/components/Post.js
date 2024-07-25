import parse from 'html-react-parser';

export default function Post({ post }) {
  const { title, createdAt, categories, content } = post;
  const date = new Date(createdAt);
  return (
    <li className='border border-gray-400'>
      <a href='' className='block p-4 pr-12'>
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
        <div className='line-clamp-2'>{parse(content)}</div>
      </a>
    </li>
  );
}
