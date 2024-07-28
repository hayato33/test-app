import './output.css';
import { Link, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import PostPage from './pages/PostPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <header className='p-6 flex justify-between bg-gray-900 text-white font-bold'>
        <h1>
          <Link to='/'>Blog</Link>
        </h1>
        <Link to='/contact'>お問い合わせ</Link>
      </header>

      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/posts/:id' element={<PostPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}
