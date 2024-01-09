import { FC, SVGProps } from "react"

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
    technologies: SvgIconProps[];
    url?: string;
    images?: string[];
};

export type SvgIconProps = {
    svgContent: FC<SVGProps<SVGSVGElement>>;
}

export type ImageIconProps = {
    src: string;
    alt: string;
}
