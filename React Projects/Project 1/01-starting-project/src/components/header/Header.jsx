
//when using assets from the project  folder, they should be imported as an object, otherwise they may get lost during compilation/deploy
import reactImg from '../../assets/react-core-concepts.png'


const Header = ({description}) => {
    return (
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}

export default Header
