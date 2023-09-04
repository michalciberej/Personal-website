import { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import env from 'react-dotenv';

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

  const handleChangeSubject = (e) => {
    setFormData({ ...formData, subject: e.target.value });
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
        className='grid grid-cols-4 grid-rows-2 gap-8 container mx-auto mb-4 max-w-2xl'>
        <section className='flex flex-col col-span-2'>
          <label
            htmlFor='name'
            className='mb-2 text-xl font-normal tracking-tight'>
            Name
          </label>
          <input
            type='name'
            id='text'
            name='from_name'
            onChange={handleChangeName}
            className='p-2 text-lg outline-none rounded-lg bg-slate-300 dark:bg-slate-300/10 text-text/70 dark:text-textD/70 border-slate-500 border-2 dark:border-slate-100/40 focus:border-primary dark:focus:text-textD focus:text-text dark:focus:border-primary'
          />
        </section>
        <section className='flex flex-col col-span-2'>
          <label
            htmlFor='email'
            className='mb-2 text-xl font-normal tracking-tight'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='user_email'
            onChange={handleChangeEmail}
            className='p-2 text-lg outline-none rounded-lg bg-slate-300 dark:bg-slate-300/10 text-text/70 dark:text-textD/70 border-slate-500 border-2 dark:border-slate-100/40 focus:border-primary dark:focus:text-textD focus:text-text dark:focus:border-primary'
          />
        </section>
        <section className='flex flex-col col-span-4'>
          <label
            htmlFor='subject'
            className='mb-2 text-xl font-normal tracking-tight'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            onChange={handleChangeSubject}
            className='p-2 text-lg outline-none rounded-lg bg-slate-300 dark:bg-slate-300/10 text-text/70 dark:text-textD/70 border-slate-500 border-2 dark:border-slate-100/40 focus:border-primary dark:focus:text-textD focus:text-text dark:focus:border-primary'
          />
        </section>
        <section className='col-span-4 flex flex-col'>
          <label
            htmlFor='message'
            className='mb-2 text-xl font-normal tracking-tight'>
            Message
          </label>
          <textarea
            type='text'
            id='message'
            name='message'
            onChange={handleChangeMessage}
            className='h-20 max-h-40 p-2 text-lg outline-none rounded-lg bg-slate-300 dark:bg-slate-300/10 text-text/70 dark:text-textD/70 border-slate-500 border-2 dark:border-slate-100/40 focus:border-primary dark:focus:text-textD focus:text-text dark:focus:border-primary'
          />
        </section>
        <button
          type='submit'
          className='button border-2 border-text dark:border-textD hover:text-textD hover:bg-text dark:hover:bg-textD dark:hover:text-text text-xl col-span-3 max-w- col-start-2 col-end-4'>
          Send
        </button>
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
