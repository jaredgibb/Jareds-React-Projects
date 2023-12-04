import { useState, useRef } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import IndividualProject from './components/IndividualProject';
function App() {
  const [projects, setProjects] = useState([]);
  const selectedProject = projects.find((p) => p.selected);

  function addProject(project) {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: parseInt((Math.random() * 10000).toFixed(0)),
        project: 'project',
        selected: false,
        tasks: [],
        notes: [],
        description: '',
      },
    ]);
  }

  function selectProject(project) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((p) => {
        if (p.id === project.id) {
          p.selected = true;
        } else {
          p.selected = false;
        }
        return p;
      });
      return updatedProjects;
    }
    );
  }

  function deleteProject(project) {
    const updatedProjects = projects.filter((p) => p.id !== project.id);
    selectedProject.current = undefined;
    setProjects(updatedProjects);
  }

  function savedProjectUpdate(project) {
    console.log('savedProjectUpdate', project)
    const updatedProjects = projects.map((p) => {
      if (p.id === project.id) {
        return project;
      }
      return p;
    });
    setProjects(updatedProjects);
  }


  //functions for tasks

  function addTask() {
    const selectedProject = projects.find((p) => p.selected);
    const blankTask = {
      id: parseInt((Math.random() * 10000).toFixed(0)),
      task: 'Task Name',
      completed: false,
    };
    selectedProject.tasks.push(blankTask);
    savedProjectUpdate(selectedProject);
  }

  function deleteTask(task) {
    const selectedProject = projects.find((p) => p.selected);
   
    const updatedTasks = selectedProject.tasks.filter(
      (t) => t.id !== task.id
    );
    selectedProject.tasks = updatedTasks;
    savedProjectUpdate(selectedProject);
  }

  function markTaskComplete(task) {
    const selectedProject = projects.find((p) => p.selected);
    const updatedTasks = selectedProject.tasks.map((t) => {
      if (t.id === task.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    selectedProject.tasks = updatedTasks;
    savedProjectUpdate(selectedProject);
  }

  function updateTaskName(task, name) {
    console.log(task,name)
    const selectedProject = projects.find((p) => p.selected);
    const updatedTasks = selectedProject.tasks.map((t) => {
      console.log(t.id, task)
      if (t.id === task) {
        t.task = name;
      }
      return t;
    });
    selectedProject.tasks = updatedTasks;
    savedProjectUpdate(selectedProject);
  }

  return (
    <>
      <Header />
      <div
        id='mainBody'
        className='flex-grow flex flex-row'>
        <div
          id='sidebar'
          className='w-1/3  md:w-72 '>
          <Sidebar
            projects={projects}
            addProject={addProject}
            selectProject={selectProject}
          />
        </div>
        <div
          id='individualProject'
          className='w-2/3 py-5 pl-5'>
          <IndividualProject
            project={projects.find((p) => p.selected)}
            deleteProject={deleteProject}
            addTask={addTask}
            deleteTask={deleteTask}
            markTaskComplete={markTaskComplete}
            updateTaskName={updateTaskName}
            updateProject={savedProjectUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
