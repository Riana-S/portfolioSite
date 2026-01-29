export interface Project {
    id: number;
    title: string;
    date: string;
    description: string;
    images: string;
    techStack: { name: string; logo: string }[];
    github?: string;
    link?: string;
}

import tt1 from "/projectPics/tt1.png";
import pmm1 from "/projectPics/pmm1.png";
import vlp1 from "/projectPics/vlp1.png";
import itf1 from "/projectPics/itf1.png";
import va1 from "/projectPics/va1.png";
import gw1 from "/projectPics/gw1.png";

import reactLogo from "/techStack/react.png";
import tsLogo from "/techStack/Typescript_logo.png";
import viteLogo from "/techStack/vite.svg";
import figmaLogo from "/techStack/figma.png";
import vscodeLogo from "/techStack/vscode.png";
import xcodeLogo from "/techStack/Xcode_icon.png";
import swiftLogo from "/techStack/swift.png";
import gitLogo from "/techStack/git.png";
import asLogo from "/techStack/androidStudio.png";
import flutterLogo from "/techStack/flutter.png";
import unityLogo from "/techStack/unity.png";
import cSharpLogo from "/techStack/cSharp.png";

export const projects: Project[] = [
    {
        id: 1,
        title: "TripTime",
        date: "Sep 2025 - Oct 2025",
        description: "TripTime is a 3D spatial travel guide built with ByteDance’s WebSpatial SDK for Apple Vision Pro. Explore Gen Z recommendations for Seoul, Honolulu, and Tokyo!",
        images: tt1,
        techStack: [
            { name: "React", logo: reactLogo },
            { name: "TypeScript", logo: tsLogo },
            { name: "Vite", logo: viteLogo },
            { name: "Figma", logo: figmaLogo },
            { name: "VSCode", logo: vscodeLogo },
            { name: "XCode", logo: xcodeLogo },
            { name: "Git", logo: gitLogo },
        ],
        github: "https://github.com/izzygperez/TripTime",
        link: "https://apps.apple.com/us/app/triptime/id6753330494",
    },
    {
        id: 2,
        title: "Portuguese for Mozambican Mothers",
        date: "May 2024 - Jun 2025",
        description: "Android app teaching nonliterate moms Portuguese to improve their quality of life, in partnership with nonprofit DIFF Education and SCU Frugal Innovation Hub for thesis senior design project.",
        images: pmm1,
        techStack: [
            { name: "VSCode", logo: vscodeLogo },
            { name: "Android Studio", logo: asLogo },
            { name: "Flutter", logo: flutterLogo },
            { name: "Git", logo: gitLogo },
        ],
        link: "https://scholarcommons.scu.edu/cseng_senior/330/",
    },
    {
        id: 3,
        title: "SCU visionOS Learning Projects",
        date: "May 2025 - Jun 2025",
        description: "Beginner mini projects that create experiences for the Apple Vision Pro, as part of small student-led exploration group.",
        images: vlp1,
        techStack: [
            { name: "VSCode", logo: vscodeLogo },
            { name: "XCode", logo: xcodeLogo },
            { name: "Swift", logo: swiftLogo },
            { name: "Git", logo: gitLogo },
        ],
        github: "https://github.com/riana-s",
        link: "https://youtu.be/xYhHwDPCifI",
    },
    {
        id: 4,
        title: "In the Fridge",
        date: "Apr 2024 - Jun 2024",
        description: "COMM 170: VR Design Final Project aiming to evoke empathy by highlighting food insecurity through environmental contrast.",
        images: itf1,
        techStack: [
            { name: "VSCode", logo: vscodeLogo },
            { name: "Unity", logo: unityLogo },
            { name: "Git", logo: gitLogo },
        ],
        github: "https://github.com/Riana-S/Final-COMM170_RS",
        link: "https://youtu.be/EZJc6ZIXxUI",
    },
    {
        id: 5,
        title: "VitAlz",
        date: "Feb 2024",
        description: "iOS app with helpful features for Alzheimer's patients and caregivers, created for SCU Hack for Humanity 24hr hackathon.",
        images: va1,
        techStack: [
            { name: "VSCode", logo: vscodeLogo },
            { name: "XCode", logo: xcodeLogo },
            { name: "Swift", logo: swiftLogo },
            { name: "Git", logo: gitLogo },
        ],
        github: "https://github.com/Riana-S/VitAlz",
        link: "https://devpost.com/software/vitalz",
    },
    {
        id: 6,
        title: "Get Wasted",
        date: "Feb 2023",
        description: "2D RPG educational game that teaches proper waste management by fighting trash mobs, created for SCU Hack for Humanity 24hr hackathon.",
        images: gw1,
        techStack: [
            { name: "Unity", logo: unityLogo },
            { name: "CSharp", logo: cSharpLogo },
            { name: "Git", logo: gitLogo },
        ],
        link: "https://devpost.com/software/get-wasted-6p0fca",
    },
];