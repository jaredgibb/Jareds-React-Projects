import noProjectImage from './assets/no-projects.png';
import Button from './reuseable_components/Button.jsx';

export default function NoProjectSelected({ onStartAdd }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={noProjectImage}
        alt='an empty task list'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        Let's get started!
      </h2>
      <p className='text-stone-400 mb-4'>Select a project or start a new one</p>
      <p>
        <Button onClick={onStartAdd}>Create new project</Button>
      </p>
    </div>
  );
}
