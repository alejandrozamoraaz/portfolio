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
    images: string[];
    url?: string;
    technologies?: SvgIconProps[];
};

export type SvgIconProps = {
    svgContent: FC<SVGProps<SVGSVGElement>>;
}

export type ImageIconProps = {
    src: string;
    alt: string;
}

export type Language = {
    display: string;
    code: string
}
