import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    //validate input
    if (!title || !description || !date) {
      modalRef.current.open();
      return;
    }

    onAdd({ title, description, date });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption='Close' >
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-500 mb-4'>Oops... looks like you didnt enter a value</p>
        <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            label='Project Name'
            type='text'
            ref={titleRef}
          />
          <Input
            label='Project Description'
            textArea
            ref={descriptionRef}
          />
          <Input
            label='Project Date'
            type='date'
            ref={dateRef}
          />
        </div>
      </div>
    </>
  );
}
