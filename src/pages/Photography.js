import { Contact } from '../components/Contact'; 
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: require("../gallery/1.jpg"),  width: 1080, height: 780},
    { src: require("../gallery/10.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/2.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/5.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/6.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/18.jpg"), width: 1080, height: 800 },
    { src: require("../gallery/8.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/3.jpg"), width: 1080, height: 1549 },
    { src: require("../gallery/7.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/9.jpg"), width: 1080, height: 694 },
    { src: require("../gallery/11.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/19.jpg"), width: 1080, height: 720 },
    { src: require("../gallery/12.jpg"), width: 1080, height: 1440 },
    { src: require("../gallery/13.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/17.jpg"), width: 1080, height: 900 },
    { src: require("../gallery/14.jpg"), width: 1080, height: 1620 },
    { src: require("../gallery/4.jpg"), width: 1080, height: 810 },
    { src: require("../gallery/16.jpg"), width: 1080, height: 1440 },
];

export const Photography = () => (
  <div style={{marginTop: "40px", marginLeft: "100px", marginRight: "100px", fontFamily: 'Arial',}}>
    <h1>Empower the places where I go.</h1>
    <p style={{fontSize: "20px"}}>Shot&nbsp;&nbsp;|&nbsp;&nbsp;Inspo&nbsp;&nbsp;|&nbsp;&nbsp;Life</p>
    <div class="animate__animated animate__fadeInLeft" >
      <PhotoAlbum  layout="rows" photos={photos}/>
    </div>
    <br/><br/><br/>
    <Contact />
  </div>
);
