import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const toGitHub = () => {
    return window.open('https://github.com/daisyyedda');
  }
  const toLinkedIn = () => {
    return window.open('https://www.linkedin.com/in/chun-ye-5766ba18b/');
  }

  const toInstagram = () => {
    return window.open('https://www.instagram.com/wizmyphone/');
  }

  const toEmail = () => {
    return window.open('mailto:c42ye@uwaterloo.ca');
  }

  return (
  <div className='contactIcon' style={{paddingTop: "30px"}}>
    <BsGithub onClick={toGitHub} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsLinkedin onClick={toLinkedIn} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsInstagram onClick={toInstagram} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <MdEmail onClick={toEmail} style={{fontSize: "20px"}}/>
    <p style={{fontSize: "14px"}}>
      &copy; Chun Ye 2023
    </p>
  </div>
  );
}