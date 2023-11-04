import './Header.css'
//when using assets from the project  folder, they should be imported as an object, otherwise they may get lost during compilation/deploy
import reactImg from '../../assets/react-core-concepts.png'

const reactDescriptions = [
    "Declarative",
    "Component-Based",
    "Learn Once, Write Anywhere",
  ];
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max );
  }

const Header = () => {
    return (
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(reactDescriptions.length)]} concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}

export default Header
