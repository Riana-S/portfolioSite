import "./RandomAbout.css";
import { likes, type About } from "../data/AboutData";
import { useState, useEffect } from "react";

export default function RandomAbout() {
    const [oddAbout, setOddAbout] = useState<About | null>(null);
    const [evenAbout, setEvenAbout] = useState<About | null>(null);

    useEffect(() => {
        // Separate odd and even IDs
        const oddItems = likes.filter(item => item.id % 2 !== 0);
        const evenItems = likes.filter(item => item.id % 2 === 0);

        // Helper to pick random item
        const getRandom = (arr: About[]) =>
        arr[Math.floor(Math.random() * arr.length)];

        setOddAbout(getRandom(oddItems));
        setEvenAbout(getRandom(evenItems));
    }, []);

    return (
        <div id="generateAbout">
            <div>
                <h3>Creative Inspirations</h3>
                {oddAbout && (
                <>
                    <img src={oddAbout.image} />
                    <h4>{oddAbout.title}</h4>
                    <p>{oddAbout.description}</p>
                </>
                )}
            </div>
            <div>
                <h3>Random Fandoms</h3>
                {evenAbout && (
                <>
                    <img src={evenAbout.image} alt={evenAbout.title} />
                    <h4>{evenAbout.title}</h4>
                    <p>{evenAbout.description}</p>
                </>
                )}
            </div>
        </div>
    );
}