import { BsGithub, BsLinkedin, BsFileEarmarkMedicalFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const toGitHub = () => {
    return window.open('https://github.com/daisyyedda');
  }
  const toLinkedIn = () => {
    return window.open('https://www.linkedin.com/in/chun-ye-5766ba18b/');
  }

  const toEmail = () => {
    return window.open('mailto:c42ye@uwaterloo.ca');
  }

  const toResume = () => {
    return window.open('https://pdfhost.io/v/K.MsdXpod_Chun_Ye_resume');
  }

  return (
  <div className='contactIcon' style={{paddingTop: "30px"}}>
    <MdEmail onClick={toEmail} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsGithub onClick={toGitHub} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsLinkedin onClick={toLinkedIn} style={{fontSize: "20px"}}/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <BsFileEarmarkMedicalFill onClick={toResume} style={{fontSize: "20px"}}/>
    <p style={{fontSize: "14px"}}>
      &copy; Chun Ye 2023
    </p>
  </div>
  );
}