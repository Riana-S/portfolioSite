import Navbar from '../components/navbar';
import DarkVeil from '../components/DarkVeil';
import Stack from '../components/Stack';
import './About.css';
import { useState } from 'react';

const images = [
  { id: 1, img: "./aboutPics/duckface.jpg" },
  { id: 2, img: "./aboutPics/marshmallow.jpg" },
  { id: 3, img: "./aboutPics/JPNlibrary.jpg" },
];

export default function About() {
    const [topCardId, setTopCardId] = useState<number>(3);
    return (
        <>
        <div id="background-veil">
        <DarkVeil />
        </div>
        <div id="top-veil">
            <header id="headerAbout">
                <Navbar />
            </header>
            <article id="articleAbout">
                <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 450, height: 700 }}
                cardsData={images}
                onTopCardChange={setTopCardId}
                />
                <section id="proAbout" className={`about-section ${topCardId === 3 ? "visible" : "hidden"}`}>
                    <h2>Hi, I'm Riana!!</h2>
                    <p>I’m a <span>new grad who is currently open to work</span> and looking for her next opportunity. I’d love to collaborate and create something cool together.</p>
                    <div id="siteAbout">
                        <div id="siteAboutTitle">
                            <h3>About the Site</h3>
                            <p>Last Updated: Oct 2025</p>
                        </div>
                        <hr></hr>
                        <p><span>Tech Stack :</span> TypeScript, HTML, CSS, React, Vite, Vercel, Git, GitHub, VSCode</p>
                        <p>*Some graphics from <a href="https://reactbits.dev/">React Bits</a> & <a href="https://pixelsafari.neocities.org/">Pixel Safari</a>*</p>
                        <p><span>Why :</span> Showcase my work & express myself!</p>
                    </div>
                    <div id="contactAbout">
                        <h3>Contact Info:</h3>
                        <h3><a href= "mailto:riana.san808@gmail.com">riana.san808@gmail.com</a></h3>
                    </div>
                    <div id="linksAbout">
                        <h3><a href="https://www.linkedin.com/in/riana-santos/">LinkedIn</a></h3>
                        <h3><a href="https://drive.google.com/file/d/1xB7PxCUvQ7tgiEm-xKZjFdLgti1t_6J3/view?usp=sharing">Resume</a></h3>
                    </div>
                </section>
                <section id="realAbout" className={`about-section ${topCardId === 2 ? "visible" : "hidden"}`}>
                    <h2>Actually, who is Riana?</h2>
                    <p>Get to know me beyond corporate vibes!!</p>
                    <h3>Can’t Leave the House w/o Earbuds:</h3>
                    <div id="cdsAbout">
                        <a href="https://open.spotify.com/album/2hPHncbZRuWiCBauEUJxyA?si=eY_51RSlTEu4g3CnSrKhMg"><img className="cd" src="./aboutPics/mito.jpeg"></img></a>
                        <a href="https://open.spotify.com/album/2VeUxfOnzVKks0UEX681m2?si=ktEWoceMSmqN_iyXzCGy9A"><img className="cd" src="./aboutPics/brb.jpeg"></img></a>
                        <a href="https://open.spotify.com/album/4NIqCxqP9o8Tp6tGLBqd8O?si=e2MH53fVQZierQyVh3hA8g"><img className="cd" src="./aboutPics/lys2.jpeg"></img></a>
                        <a href="https://open.spotify.com/album/03guxdOi12XJbnvxvxbpwG?si=8jTVTOtAS1qDc9CDVF-UgQ"><img className="cd" src="./aboutPics/submarine.jpeg"></img></a>
                        <a href="https://open.spotify.com/album/1hM5xkleU8wr2yOaY2gCMB?si=vnEriCt4TE2kG3XBmpZmNQ"><img className="cd" src="./aboutPics/reaper.jpeg"></img></a>
                    </div>
                    <p><span>Fun fact :</span> My Spotify Wrapped is always 100k+ mins every year</p>
                    <h3>Hobbies:</h3>
                    <div id="hobbiesAbout">
                        <div className="hobby">
                            <img src="/aboutPics/kj.png"></img>
                            <p>Gaming</p>
                        </div>
                        <div className="hobby">
                            <img src="/aboutPics/buildKit.png"></img>
                            <p>Build Kits</p>
                        </div>
                        <div className="hobby">
                            <img src="/aboutPics/travel.png"></img>
                            <p>Travel</p>
                        </div>
                        <div className="hobby">
                            <img src="/aboutPics/art.jpg"></img>
                            <p>Art</p>
                        </div>
                    </div>
                </section>
                <section id="moreAbout" className={`about-section ${topCardId === 1 ? "visible" : "hidden"}`}>
                    <h2>Tell me more!</h2>
                    <p>Okok, here are some other things I like :3</p>
                </section>
            </article>
        </div>
        </>
    );
}