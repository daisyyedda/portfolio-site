import { Contact } from '../components/Contact'; 
import PhotoAlbum from "react-photo-album";
import "animate.css";

const photos = [
    { src: require("../gallery/1.jpg"),  width: 1080, height: 780},
    { src: require("../gallery/10.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/2.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/5.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/6.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/18.jpg"), width: 1080, height: 800 },
    { src: require("../gallery/8.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/22.jpg"), width: 1080, height: 1549 },
    { src: require("../gallery/7.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/9.jpg"), width: 1080, height: 694 },
    { src: require("../gallery/11.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/19.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/20.jpg"), width: 1080, height: 1440 },
    { src: require("../gallery/13.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/17.jpg"), width: 1080, height: 900 },
    { src: require("../gallery/14.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/21.jpg"), width: 1080, height: 810 },
    { src: require("../gallery/3.jpg"), width: 1080, height: 1440 },
];

export const Photography = () => (
  <div style={{marginTop: "5%", fontFamily: 'Arial',}}>
    <h1>Empower the places where I go.</h1>
    <p style={{fontSize: "20px"}}>Shot&nbsp;&nbsp;|&nbsp;&nbsp;Inspo&nbsp;&nbsp;|&nbsp;&nbsp;Life</p>
    <div class="animate__animated animate__fadeInLeft" style={{paddingTop: "5%", marginRight: "15%", marginLeft: "15%", fontFamily: 'Arial',}} >
      <PhotoAlbum  layout="rows" photos={photos}/>
      <br/><br/><br/><br/><br/>
    </div>
    <div><Contact /></div> 
  </div>
);