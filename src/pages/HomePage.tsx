import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Setujui</p>
      <Link to="/term">Menuju term page</Link>
    </div>
  );
};

export default HomePage;
