import { type getDictionary } from "@/get-dictionary"

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type Icon = React.FC<React.SVGProps<SVGSVGElement>>;

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
    description: string[];
    year: number;
    image: string;
    url?: string;
    technologies?: Icon[];
};

export type Section = {
    linkName: string;
    icon: Icon;
    name: string;
    content: ({ t }: { t: Dictionary; }) => JSX.Element;
}
