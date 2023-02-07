import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Resume from '../Chun Ye Resume.pdf';

export const Contact = () => {
  const toResume = () => {
    return window.open(Resume);
  }
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
  <div className='contactIcon' style={{position:"absolute", left:0, bottom:0, right:0}}>
    <BsGithub onClick={toGitHub}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsLinkedin onClick={toLinkedIn}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsInstagram onClick={toInstagram}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <MdEmail onClick={toEmail}/>
    <p style={{fontSize: "15px", fontWeight: "bold"}}>
      &copy; Chun Ye 2023 
    </p>
  </div>
  );
}
