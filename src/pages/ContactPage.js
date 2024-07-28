import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const messageChange = (e) => setMessage(e.target.value);

  const validate = () => {
    let isValid = true;
    if (name === '') {
      isValid = false;
      setNameErrorMessage('お名前は必須です。');
    } else if (name.length > 30) {
      isValid = false;
      setNameErrorMessage('お名前は30文字以内で入力してください');
    } else {
      setNameErrorMessage('');
    }
    if (email === '') {
      isValid = false;
      setEmailErrorMessage('メールアドレスは必須です。');
    } else if (!email.match(/.+@.+\..+/)) {
      isValid = false;
      setEmailErrorMessage('メールアドレスの形式が正しくありません。');
    } else {
      setEmailErrorMessage('');
    }
    if (message === '') {
      isValid = false;
      setMessageErrorMessage('本文は必須です。');
    } else if (message.length > 500) {
      isValid = false;
      setMessageErrorMessage('本文は500文字以内で入力してください');
    } else {
      setMessageErrorMessage('');
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // バリデーション
    if (validate()) {
      const apiUrl = 'https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      };
      await fetch(apiUrl, requestOptions);
      alert('送信しました');
      handleClear(e);
    }
    setIsSubmitting(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setNameErrorMessage('');
    setEmailErrorMessage('');
    setMessageErrorMessage('');
  };

  return (
    <form className='max-w-3xl w-auto mt-12 mx-auto'>
      <h2 className='text-xl font-bold mb-12'>問合わせフォーム</h2>
      <div className='mb-12 grid gap-6'>
        <div className='flex items-center'>
          <label htmlFor='name' className='w-3/12'>
            お名前
          </label>
          <div className='w-9/12'>
            <input type='text' id='name' name='name' className='w-full border-gray-300 rounded-lg p-4' required value={name} onChange={nameChange} disabled={isSubmitting} />
            <p className='text-sm text-red-700'>{nameErrorMessage}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <label htmlFor='email' className='w-3/12'>
            メールアドレス
          </label>
          <div className='w-9/12'>
            <input type='text' id='email' name='email' className='w-full border-gray-300 rounded-lg p-4' required value={email} onChange={emailChange} disabled={isSubmitting} />
            <p className='text-sm text-red-700'>{emailErrorMessage}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <label htmlFor='message' className='w-3/12'>
            本文
          </label>
          <div className='w-9/12'>
            <textarea rows='8' id='message' name='message' className='w-full border-gray-300 rounded-lg p-4' required value={message} onChange={messageChange} disabled={isSubmitting}></textarea>
            <p className='text-sm text-red-700'>{messageErrorMessage}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-4'>
        <button className='px-4 py-2 rounded-lg font-bold text-white bg-black' onClick={handleSubmit} disabled={isSubmitting}>
          送信
        </button>
        <button className='px-4 py-2 rounded-lg font-bold text-black bg-gray-300' onClick={handleClear} disabled={isSubmitting}>
          クリア
        </button>
      </div>
    </form>
  );
}