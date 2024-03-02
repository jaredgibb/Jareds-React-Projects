import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ProductDetails from "./pages/ProductDetails";
import Error from "./pages/Error";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> }, // instead couldbe path: ""
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
    errorElement: <Error />,
  },
]);

/*
// old syntax for creating routes

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

const BrowserRouter2 = createBrowserRouter(routes);
*/

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
