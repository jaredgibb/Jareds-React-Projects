export default function EditButton({clickHandler, editing = false}){
  const SaveSVG = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        width='24px'
        height='24px'>
        <path d='M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z' />
      </svg>
    );
  };

  const EditSVG = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
                strokeWidth='2'
                width='24px'
                height='24px'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
        />
      </svg>
    );
  };

  return (
    <div className='m-1'>
              
              <button
                    onClick={(e) => { e.stopPropagation(); clickHandler()}}
                    className='flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white'>
                   {editing ? <SaveSVG /> : <EditSVG />}
        </button>
        </div>
  );
}
