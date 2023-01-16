import { BsGithub, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";
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

  return (
  <div className='content' class='animate__animated animate__bounceInUp' style={{color: "#754E4E"}}>
    <button className="btn" onClick={toResume}> <BsFileEarmarkTextFill style={{size: "large"}}/>Resume</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn"  onClick={toGitHub}> <BsGithub style={{size: "large"}}/> GitHub </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn" onClick={toLinkedIn}><BsLinkedin style={{size: "large"}}/> LinkedIn </button>
  </div>
  );
}
