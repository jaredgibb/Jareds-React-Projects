export default function Sidebar({ projects, addProject, selectProject }) {
  return (
    <aside
      id='default-sidebar'
      className=' h-full px-8 py-8 bg-stone-900 text-stone-50'
      aria-label='Sidebar'>
      <h1 className='text-3xl text-left'>Your Projects</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4'
        onClick={addProject}>
        + Add Project
      </button>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className='text-left p-2 bg-slate-300 hover:bg-slate-500 my-3 mr-3 rounded text-gray-800'>
            <button
              className='w-full min-h-full text-left'
                          onClick={() => {
                selectProject(project);
              }}>
              {project.project}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
