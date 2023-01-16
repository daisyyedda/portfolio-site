import { BsGithub, BsLinkedin, BsFileEarmarkTextFill, BsFillCameraFill } from "react-icons/bs";
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

  return (
  <div className='content' class='animate__animated animate__bounceInUp' style={{color: "#754E4E"}}>
    <button className="btn" onClick={toResume}> <BsFileEarmarkTextFill /> Resume </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn"  onClick={toGitHub}> <BsGithub /> GitHub </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn" onClick={toLinkedIn}><BsLinkedin /> LinkedIn </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn" onClick={toInstagram}><BsFillCameraFill /> Photography </button>
  </div>
  );
}
