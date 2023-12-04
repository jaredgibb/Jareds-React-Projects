import EditButton from './EditButton';
import { useState, useRef } from 'react';
import Modal from './Modal';
export default function TaskListItem({
  task,
  deleteTask,
  markTaskComplete,
  updateTaskName,
}) {
  const [editing, setEditing] = useState(false);
  const nameEditor = useRef();
  const modalRef = useRef();
  const thisTask = useRef(task.task);


  function handleInputChange() {
    thisTask.current = nameEditor.current.value;
  }

  function handleClick(p) {
    console.log('here');
    if (editing) {
      updateTaskName(task.id, thisTask.current);
    }
    setEditing((editing) => !editing);
  }

  function divClick() {
    modalRef.current.openModal();
  }

  

  return (
    <>
      <Modal
        task={task}
        ref={modalRef}
      />

      <div
        
        className='flex flex-row justify-between m-1 hover:bg-slate-700 cursor-pointer p-2 rounded-lg'
        onClick={divClick}>
        {editing && (
          <input
            ref={nameEditor}
            onClick={(e) => {
              e.stopPropagation();
            }}
            defaultValue={task.task}
            onChange={handleInputChange}
            className='input h-12 border-gray-300 border-2 input-primary text-gray-600 w-full max-w-xs px-2 rounded-md'></input>
        )}
        {!editing && (
          <div className='flex flex-row items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-gray-600'
              checked={task.completed}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                markTaskComplete(task);
              }}
            />
            <span className='text-lg font-semibold ml-2'>{task.task}</span>
          </div>
        )}
        <div className='flex flex-row items-center'>
          <EditButton
            clickHandler={handleClick}
            other={'a'}
          />
          <button
            className='flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white w-[44px]  h-[44px] items-center justify-center  text-xl'
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task);
            }}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
