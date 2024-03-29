import { Link } from "react-router-dom";

export const Navbar = () => {
  const underLine = (e) => {
    const links = document.querySelectorAll(".links a");
    links.forEach((link) => {
      link.style.borderBottom = "none";
    });
    e.target.style.borderBottom = "2px solid black";
  }

  return (  
    <div className="navbar">
      <div className="links" style={{fontFamily: 'Arial'}}>
        <Link to="/" style={{textDecoration: "none", color: "black"}} onClick={underLine}>Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/coop" style={{textDecoration: "none", color: "black"}} onClick={underLine}>Experience</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/photo" style={{textDecoration: "none", color: "black"}} onClick={underLine}>Gallery</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pieces" style={{textDecoration: "none", color: "black"}} onClick={underLine}>Pieces</Link>
      </div>
    </div>
  );
};
