import { Link } from "react-router-dom";

export const Navbar = () => {
  const underLine = (e) => {
    const links = document.querySelectorAll(".links a");
    links.forEach((link) => {
      link.style.borderBottom = "none";
    });
    e.target.style.borderBottom = "2px solid white";
  }
  return (  
    <div className="navbar">
      <div className="links">
        <Link to="/" style={{color: "white", textDecoration: "none"}} onClick={underLine}> Home </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/coop" style={{color: "white", textDecoration: "none"}} onClick={underLine}> Internships </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/project" style={{color: "white", textDecoration: "none"}} onClick={underLine}> Projects </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/mathie" style={{color: "white", textDecoration: "none"}} onClick={underLine}> Mathie? </Link>
      </div>
    </div>
  );
};
