import { Link } from "react-router-dom";
import Resume from '../Chun Ye Resume.pdf';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'

export const Navbar = () => {
  const underLine = (e) => {
    const links = document.querySelectorAll(".links a");
    links.forEach((link) => {
      link.style.borderBottom = "none";
    });
    e.target.style.borderBottom = "2px solid black";
  }

  const toResume = () => {
    return window.open('https://pdfhost.io/v/CHvvfaEc0_Chun_Ye_Resume');
  }

  const toPortfolio = () => {
    return window.open('https://github.com/daisyyedda/portfolio-site');
  }

  return (  
    <div className="navbar">
      <div className="links" style={{fontFamily: 'Arial'}}>
        <Link to="/" style={{textDecoration: "none", color: "black"}} onClick={underLine}> Home </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/coop" style={{textDecoration: "none", color: "black"}} onClick={underLine}> Experience </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/photo" style={{textDecoration: "none", color: "black"}} onClick={underLine}> Photography </Link>
        &nbsp;&nbsp;&nbsp;
        <Link onClick={toResume} style={{textDecoration: "none", color: "black"}}> Resume </Link>
        <UseAnimations animation={github} size={35} wrapperStyle={{position: "absolute", right: 25, top: 18}} onClick={toPortfolio} />
      </div>
    </div>
  );
};
