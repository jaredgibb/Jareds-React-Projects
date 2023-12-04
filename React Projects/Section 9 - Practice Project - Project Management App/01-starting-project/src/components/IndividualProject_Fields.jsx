import IndivdualProject_TaskListItem from './IndividualProject_TaskListItem';
import EditButton from './EditButton';
import { useState, useRef } from 'react';
export default function ({
  title,
  text,
  children,
  addTask,
  tasks,
  markTaskComplete,
  activeProject ,
  updateProject,
  deleteTask,
  updateTaskName,
}) {
  const [editing, setEditing] = useState(false);
  const nameEditor = useRef();
  const thisEditableText = useRef();

  //if project is not null, set thisEditableText to project.project
  if (activeProject) {
    if (title == 'Project') {
      thisEditableText.current = activeProject.project;
    } else if (title == 'Description') {
      thisEditableText.current = activeProject.description || '';
    }
  }

  function handleButtonClick() {
    if (editing) {
      const updatedProject = { ...activeProject };
      
      if (title == 'Project') {
        updatedProject.project = thisEditableText.current;  
      } else if (title == 'Description') {
        updatedProject.description = thisEditableText.current;
      } 
      updateProject(updatedProject);
    }
    setEditing((editing) => !editing);
  }

  function handleInputChange() {
    thisEditableText.current = nameEditor.current.value;
  }

  let classes = 'input border-gray-300 border-2 input-primary text-gray-600 w-full max-w-xs';
  classes += editing ? ' h-12' : ' min-h-12';
  
  return (
    <div className='flex flex-col mb-3 min-w-full'>
      <div className='flex flex-row justify-between items-center'>
        <dt className='mb-1 text-gray-500  text-2xl dark:text-gray-400'>
          {title}
        </dt>
        {title != 'Tasks' && activeProject && (
          <EditButton
            clickHandler={handleButtonClick}
            editing={editing}
          />
        )}

        {title == 'Tasks' && activeProject ? (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1'
            onClick={addTask}>
            + Add Task
          </button>
        ) : null}
      </div>
      <dd className='text-lg font-semibold'>
        {editing ? (
          <input
            onSubmit={handleButtonClick}
            type='text'
            name={title}
            defaultValue={thisEditableText.current}
            ref={nameEditor}
            onChange={handleInputChange}
            placeholder='Type here'
            className={classes}
          />
        ) : (
          text
        )}
      </dd>
      {tasks &&
        tasks.map((task) => (
          <IndivdualProject_TaskListItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            markTaskComplete={markTaskComplete}
            updateTaskName={updateTaskName}
          />
        ))}
    </div>
  );
}
