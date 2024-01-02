export type Badge = {
    name: string;
    imageUrl: string;
    href: string;
    alt: string;
};

export type ProjectType = {
    type: string;
    projects: Project[];
};

export type Project = {
    id: string;
    title: string;
    description: string;
    year: number;
    url?: string;
    images: string[];
};
