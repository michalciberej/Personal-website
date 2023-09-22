const Socials = ({ column, black }) => {
  return (
    <>
      <div
        className={`flex ${column ? 'flex-col' : 'flex-row'} gap-4 ${
          black ? 'text-text' : 'text-textD'
        }`}>
        <a
          href='https://github.com/michalciberej'
          target='_blank'
          rel='noreferrer'
          aria-label='Link to my Github account'
          className='outline-none transition-transform hover:scale-150 focus:scale-150 active:scale-150'>
          <i className='devicon-github-original text-4xl'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/michal-ciberej-a1b235247/'
          target='_blank'
          rel='noreferrer'
          aria-label='Link to my Linkedin account'
          className='outline-none transition-transform hover:scale-150 focus:scale-150 active:scale-150'>
          <i className='devicon-linkedin-plain text-4xl'></i>
        </a>
        <a
          href='https://twitter.com/michalciberej'
          target='_blank'
          rel='noreferrer'
          aria-label='Link to my Twitter account'
          className='outline-none transition-transform hover:scale-150 focus:scale-150 active:scale-150'>
          <i className='devicon-twitter-original text-4xl'></i>
        </a>
      </div>
    </>
  );
};

export default Socials;
