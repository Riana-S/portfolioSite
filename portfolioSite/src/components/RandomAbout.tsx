import "./RandomAbout.css";
import { likes, type About } from "../data/AboutData";
import { useState } from "react";

export default function RandomAbout() {
    const [oddAbout, setOddAbout] = useState<About | null>(null);
    const [evenAbout, setEvenAbout] = useState<About | null>(null);
    const getRandomItems = () => {
        const oddItems = likes.filter(item => item.id % 2 !== 0);
        const evenItems = likes.filter(item => item.id % 2 === 0);
    
        const getRandom = (arr: About[]) =>
          arr[Math.floor(Math.random() * arr.length)];
    
        setOddAbout(getRandom(oddItems));
        setEvenAbout(getRandom(evenItems));
      };

    return (
        <div id="generateAbout" onClick={getRandomItems}>
            <div>
                <h3>Creative Inspirations</h3>
                {oddAbout ? (
                <>
                    <img src={oddAbout.image} alt={oddAbout.title} />
                    <h4>{oddAbout.title}</h4>
                    <p>{oddAbout.description}</p>
                </>
                ) : (
                <p className="placeholder">Click to generate!</p>
                )}
            </div>
            <div>
                <h3>Random Fandoms</h3>
                {evenAbout ? (
                <>
                    <img src={evenAbout.image} alt={evenAbout.title} />
                    <h4>{evenAbout.title}</h4>
                    <p>{evenAbout.description}</p>
                </>
                ) : (
                <p className="placeholder">Click to generate!</p>
                )}
            </div>
        </div>
    );
}