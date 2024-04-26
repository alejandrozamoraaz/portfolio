import dynamic from 'next/dynamic';

import { Dictionary, ProjectType } from '@/app/_lib/definitions';

const AdobeXdIcon = dynamic(() => import('@/app/_lib/icons/adobe-xd'));
const DotNetIcon = dynamic(() => import('@/app/_lib/icons/dotnet'));
const WebIcon = dynamic(() => import('@/app/_lib/icons/web'));
const SqlIcon = dynamic(() => import('@/app/_lib/icons/sql'));
const BlazorIcon = dynamic(() => import('@/app/_lib/icons/blazor'));

export const projectTypes = (
    t: Dictionary["projects_section"]
): ProjectType[] => {
    return [
        {
            type: t.graphic_design_ui_ux,
            projects: [
                {
                    id: "prototipo-de-gestor-de-expedientes",
                    title: t["prototipo-de-gestor-de-expedientes"].title,
                    description: [
                        t["prototipo-de-gestor-de-expedientes"].description00,
                        t["prototipo-de-gestor-de-expedientes"].description01,
                        t["prototipo-de-gestor-de-expedientes"].description02
                    ],
                    image: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147584/projects/prototipo-de-gestor-de-expedientes/uf2hbkaogiwg9eo4mciq.webp",
                    year: 2022,
                    technologies: [
                        AdobeXdIcon
                    ]
                }
            ]
        },
        {
            type: t.full_stack_development,
            projects: [
                {
                    id: "gestor-de-expedientes-clinicos-citas-e-inventario",
                    title: t["gestor-de-expedientes-clinicos-citas-e-inventario"].title,
                    description: [
                        t["gestor-de-expedientes-clinicos-citas-e-inventario"].description00,
                        t["gestor-de-expedientes-clinicos-citas-e-inventario"].description01
                    ],
                    image: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147639/projects/gestor-de-expedientes-clinicos-citas-e-inventario/llnd2ozaftdajaltik5u.webp",
                    year: 2020,
                    technologies: [
                        AdobeXdIcon,
                        DotNetIcon,
                        WebIcon,
                        SqlIcon
                    ]
                },
                {
                    id: "aplicacion-web-para-la-calidad",
                    title: t["aplicacion-web-para-la-calidad"].title,
                    description: [
                        t["aplicacion-web-para-la-calidad"].description00,
                        t["aplicacion-web-para-la-calidad"].description01,
                        t["aplicacion-web-para-la-calidad"].description02 + "Thesis (Engineering) https://repositorio.unan.edu.ni/20529/"
                    ],
                    image: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147733/projects/aplicacion-web-para-la-calidad/lf5w3h5bzjlry2onwqsw.webp",
                    year: 2023,
                    technologies: [
                        BlazorIcon,
                        WebIcon,
                        SqlIcon
                    ]
                }
            ]
        }
    ];
};
