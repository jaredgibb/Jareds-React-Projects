import { useState } from 'react';

export default function NewTask({ addTask, ...props }) {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    addTask(task);
    setTask('');
  }

  return (
    <>
      <div className='flex items-center gap-4 mb-4'>
        <input
          type='text'
          className='w-64 px-2 py-1 rounded-sm bg-stone-200'
          onChange={handleChange}
          value={task}
        />
        <button onClick={() => handleClick()}>Save</button>
      </div>
    </>
  );
}
