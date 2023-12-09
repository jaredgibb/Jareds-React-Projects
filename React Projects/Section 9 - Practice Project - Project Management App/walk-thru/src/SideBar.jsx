import Button from './Button.jsx';

export default function SideBar({
  onStartAdd,
  projects,
  onSelect,
  selectedProject,
}) {
  function handleProjectSelect(id) {
    onSelect(id);
  }

  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>

      <Button onClick={onStartAdd}>+ Add project</Button>
      <ul>
        {projects.map((project) => {
          let classes = 'text-left w-full p-2 rounded-md hover:bg-gray-800';
          classes += selectedProject === project.id ? ' bg-gray-500' : '';

          return (
            <li
              key={project.id}
              className='mt-4 '>
              <button
                onClick={() => handleProjectSelect(project.id)}
                className={classes}>
                <h3 className='font-bold uppercase text-stone-200'>
                  {project.title}
                </h3>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
