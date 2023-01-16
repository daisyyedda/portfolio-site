import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/coop"> Internship </Link>
        <Link to="/project"> Project </Link>
      </div>
    </div>
  );
};
