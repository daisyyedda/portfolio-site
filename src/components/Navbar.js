import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [textDecoration, setTextDecoration] = useState("none");

  const handleClick = () => {
    setTextDecoration("underline");
  }

  return (  
    <div className="navbar">
      <div className="links">
        <Link to="/" style={{color: "white", textDecoration: "none"}}> Home </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/coop" style={{color: "white", textDecoration: "none"}}> Internships </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/project" style={{color: "white", textDecoration: "none"}}> Projects </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/mathie" style={{color: "white", textDecoration: "none"}}> Mathie? </Link>
      </div>
    </div>
  );
};
