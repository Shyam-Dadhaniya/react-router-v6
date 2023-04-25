import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="contact">Go to Contact</Link>
    </>
  );
};

export default Home;
