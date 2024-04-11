import { type getDictionary } from "@/get-dictionary";
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type IconType = JSX.Element;
export type IconData = React.FC<React.SVGProps<SVGSVGElement>>;

export type SelectItem = {
    display: string;
    value: string;
};

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
    technologies?: IconData[];
};

export type Section = {
    linkName: string;
    icon: IconData;
    name: string;
    content: ({ t }: { t: Dictionary; }) => JSX.Element;
}
