import image from '../assets/no-projects.png'


export default function Header() {
  return (
    <header className='h-15 flex items-center p-3 bg-stone-900 text-stone-50 shadow-md shadow-black'>
      <img
        src={image}
        alt='Dummy Image'
        className='w-9 h-9 mr-5'
      />
      <span className='text-lg'>Jareds Task Management App</span>
    </header>
  );
}
