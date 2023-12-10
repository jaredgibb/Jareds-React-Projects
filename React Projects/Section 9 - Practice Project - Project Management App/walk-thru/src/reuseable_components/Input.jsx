import { forwardRef } from 'react';
const Input = forwardRef(function Input(
  { label, type, textArea, ...props },
  ref
) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm uppercase font-bold text-stone-500'>
        {label}
      </label>
      {textArea ? (
        <textarea
          ref={ref}
          className={classes}
          {...props}
        />
      ) : (
        <input
          className={classes}
          type={type}
          {...props}
          ref={ref}
        />
      )}
    </p>
  );
});


export default Input;