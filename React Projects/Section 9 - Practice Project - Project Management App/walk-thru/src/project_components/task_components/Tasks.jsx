import NewTask from './NewTask';

export default function Task({ tasks, handleDeleteTask, addTask }) {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-800 mb-4'>Tasks</h2>
      <NewTask addTask={addTask} className='mb-4' />

      {tasks.length == 0 ? (
        <p className='text-stone-800 my-3'>No Tasks Yet</p>
      ) : (
        tasks.map((task, i) => {
          let divClasses = 'flex items-center justify-between p-4';
          if (i % 2 == 0) {
            divClasses += ' bg-stone-200';
          }
          return (
            <div
              key={task.id}
              className={divClasses}>
              <div className='flex items-center gap-4'>
                <p
                  className={`text-stone-800 ${
                    task.completed ? 'line-through' : ''
                  }`}>
                  {task.taskName}
                </p>
              </div>
              <button
                className='text-stone-800 hover:text-stone-950'
                onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          );
        })
      )}
      <ul></ul>
    </section>
  );
}
