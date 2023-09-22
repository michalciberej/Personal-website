import { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import env from 'react-dotenv';
import StyledButton from './StyledButton';

const Form = () => {
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const form = useRef();

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleChangeMessage = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setSucces(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <>
      <form
        action='#'
        method='POST'
        id='form'
        onSubmit={handleSubmit}
        ref={form}
        className='flex flex-col gap-4 w-full max-w-[35rem] xl:max-w-[40rem]'>
        <input
          type='name'
          name='from_name'
          onChange={handleChangeName}
          placeholder='Name'
          className='p-2 border-[1px] border-backgroundD bg-transparent outline-none placeholder:italic placeholder:text-text focus:bg-backgroundD/10 focus:pl-4 hover:bg-backgroundD/10 hover:pl-4'
        />
        <input
          type='email'
          name='user_email'
          onChange={handleChangeEmail}
          placeholder='Email'
          className='p-2 border-[1px] border-backgroundD bg-transparent outline-none placeholder:italic placeholder:text-text focus:bg-backgroundD/10 focus:pl-4 hover:bg-backgroundD/10 hover:pl-4'
        />
        <textarea
          type='text'
          name='message'
          onChange={handleChangeMessage}
          placeholder='Message'
          className='p-2 border-[1px] border-backgroundD bg-transparent outline-none resize-none placeholder:italic placeholder:text-text focus:bg-backgroundD/10 focus:pl-4 hover:bg-backgroundD/10 hover:pl-4 min-h-[8rem]'
        />
        <StyledButton
          submit={true}
          border={'backgroundD'}>
          Send
        </StyledButton>
        {error === true ? (
          <h5 className='text-xl text-red-500'>
            Error has ocoured, try it again.
          </h5>
        ) : null}
        {succes === true ? <Navigate to='/thankyou' /> : null}
      </form>
    </>
  );
};

export default Form;
