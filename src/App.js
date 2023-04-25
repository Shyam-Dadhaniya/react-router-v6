import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Contact, { contactAction } from "./Components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} action={contactAction} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
