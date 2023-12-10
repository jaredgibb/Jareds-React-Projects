import SideBar from './SideBar.jsx';
import NewProject from './project_components/NewProject.jsx';
import NoProjectSelected from './NoProjectSelected.jsx';

import { useState } from 'react';
import SelectedProject from './project_components/SelectedProject.jsx';
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  console.log(projectsState);

  function handleAddTask(task) {
    let newTask = {
      taskName: task,
      id: Math.random(),
      projectID: projectsState.selectedProject,
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskID) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskID),
      };
    });
  }

  function handleAddProject(project) {
    setProjectsState((prevState) => {
      let newProject = {
        ...project,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(pID) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleSelectProject(pID) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: pID,
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  let content;

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        deleteProject={handleDeleteProject}
        tasks={projectsState.tasks.filter(task=>task.projectID === selectedProject.id)}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    );
  } else if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancel}
      />
    );
  } else {
    content = <NoProjectSelected onStartAdd={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar
        onStartAdd={handleStartAddProject}
        projects={projectsState.projects}
        onSelect={handleSelectProject}
        selectedProject={projectsState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
