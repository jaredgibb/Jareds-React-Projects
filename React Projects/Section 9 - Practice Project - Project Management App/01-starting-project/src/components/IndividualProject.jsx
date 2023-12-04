import IndividualProject_Fields from './IndividualProject_Fields';

export default function IndividualProject({
  project,
  updateProject,
  deleteProject,
  addTask,
  deleteTask,
  markTaskComplete,
  updateTaskName,

}) {
  const listItems = <></>;
  return (
    <div className='block max-w-4lg p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 '>
      <div className='flex  w-full flex-row-reverse'>
       {project && <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            deleteProject(project);
          }}>
          Delete Project
        </button>}
      </div>
      <dl className='max-w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>
        <IndividualProject_Fields
          title='Project'
          activeProject={project}
          updateProject={updateProject}
          text={project ? project.project : 'No Project Selected'}
        />

        <IndividualProject_Fields
          title='Description'
          activeProject={project}
          updateProject={updateProject}
          text={
            project && project.description !== ''
              ? project.description
              : 'No Description'
          }
        />
        <IndividualProject_Fields
          title='Tasks'
          activeProject={project}
          tasks={project ? project.tasks : []}
          addTask={addTask}
          markTaskComplete={markTaskComplete}
          deleteTask={deleteTask}
          updateTaskName={updateTaskName}

        >
          
          </IndividualProject_Fields>
      </dl>
    </div>
  );
}
