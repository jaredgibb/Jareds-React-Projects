import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  //something cute. a nice hero image, maybe with a saying

  const navigate = useNavigate();

  function handleClick() {
    navigate('/products');
  }



  return(
    <main>
      <h1>Home</h1>
      <Link to="/products">Products</Link>
        <p>Welcome to our cute Home page!</p>
        <button onClick={handleClick}>Products</button>
    </main>
  );
}
