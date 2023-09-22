const SectionHeading = ({ black, num, children }) => {
  return (
    <>
      <h2
        className={`flex gap-2 items-end justify-center mb-16 mt-16 ${
          black ? 'text-text' : 'text-textD'
        }`}>
        <span className={`text-xl ${black ? 'text-text' : 'text-primary'}`}>
          {num}.
        </span>
        <span className='text-4xl'>{children}</span>
      </h2>
    </>
  );
};

export default SectionHeading;
