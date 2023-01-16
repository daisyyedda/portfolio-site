import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/coop"> Internship </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/project"> Project </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/mathie"> Mathie? </Link>
      </div>
    </div>
  );
};
