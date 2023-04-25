import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Data, { dataLoader } from "./Components/Data";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} loader={dataLoader} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* <h1>Hello React Router v6.4+</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <RouterProvider router={router} />
    </div>
  );
}
