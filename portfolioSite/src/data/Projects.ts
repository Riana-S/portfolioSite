export interface Project {
    id: number;
    title: string;
    date: string;
    description: string;
    images: string[];
    techStack: string[];
    github?: string;
    link?: string;
}