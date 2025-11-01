export interface About {
    id: number;
    title: string;
    description: string;
    image: string;
}

import dprIan from "/aboutPics/dprian.jpeg";
import kny from "/aboutPics/tanjiro.jpg";
import leehama from "/aboutPics/leehama.png";
import ladybug from "/aboutPics/ml.png";
import pinterest from "/aboutPics/pinterest.png";
import heartstopper from "/aboutPics/heartstopper.png";

export const likes: About[] = [
    {
        id: 1,
        title: "DPR IAN",
        description: "His music videos help respark my art hobbies",
        image: dprIan,
    },
    {
        id: 2,
        title: "Demon Slayer",
        description: "All-time favorite anime",
        image: kny,
    },
    {
        id: 3,
        title: "Leehama",
        description: "Adore the diverse representation in all of her Webtoon series",
        image: leehama,
    },
    {
        id: 4,
        title: "Miraculous Ladybug",
        description: "I still can't believe this show has been going on since I was in MS...",
        image: ladybug,
    },
    {
        id: 5,
        title: "Pinterest",
        description: "My current graphic design & fanart go-to platform",
        image: pinterest,
    },
    {
        id: 6,
        title: "Heartstopper",
        description: "Love both the Webtoon and the Netflix show versions!",
        image: heartstopper,
    },
];