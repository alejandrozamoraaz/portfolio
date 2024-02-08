import { TFunction } from 'i18next'
import { ProjectType } from '@/app/_lib/definitions'
import { AdobeXd, DotNet, Web, Sql, Blazor } from '@/app/_lib/icons'

export const projectTypes = (
    t: TFunction<[]>
): ProjectType[] => {
    return [
        {
            type: t('graphic_design_ui_ux', { ns: 'projects_section' }),
            projects: [
                {
                    id: "prototipo-de-gestor-de-expedientes",
                    title: t('prototipo-de-gestor-de-expedientes.title', { ns: 'projects_section' }),
                    description: t('prototipo-de-gestor-de-expedientes.description', { ns: 'projects_section' }),
                    year: 2022,
                    technologies: [
                        { svgContent: AdobeXd }
                    ],
                    images: [
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147584/projects/prototipo-de-gestor-de-expedientes/uf2hbkaogiwg9eo4mciq.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/f8nnqyoh2x92dbo9lngo.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/t7sh6f9rqrrbotywzbj0.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/cih56rir0b2snxq6tw8v.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147582/projects/prototipo-de-gestor-de-expedientes/qfbddpaiaismwdei6wrm.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147582/projects/prototipo-de-gestor-de-expedientes/wctdrgzi4q0kg8xesutu.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/r2vg7z2vean3w7owlwuy.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/qzhdndazclm0fpszjxm0.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147583/projects/prototipo-de-gestor-de-expedientes/k5rujzabijmujyeqokx7.png"
                    ]
                }
            ]
        },
        {
            type: t('full_stack_development', { ns: 'projects_section' }),
            projects: [
                {
                    id: "gestor-de-expedientes-clinicos-citas-e-inventario",
                    title: t('gestor-de-expedientes-clinicos-citas-e-inventario.title', { ns: 'projects_section' }),
                    description: t('gestor-de-expedientes-clinicos-citas-e-inventario.description', { ns: 'projects_section' }),
                    year: 2020,
                    technologies: [
                        { svgContent: AdobeXd },
                        { svgContent: DotNet },
                        { svgContent: Web },
                        { svgContent: Sql }
                    ],
                    images: [
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147639/projects/gestor-de-expedientes-clinicos-citas-e-inventario/soctm9gkpxuvzdn0lhsf.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147639/projects/gestor-de-expedientes-clinicos-citas-e-inventario/itumoqmnv7b4napgqmzn.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147639/projects/gestor-de-expedientes-clinicos-citas-e-inventario/jrh1nxaxnqc7ijzvdb88.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147639/projects/gestor-de-expedientes-clinicos-citas-e-inventario/llnd2ozaftdajaltik5u.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147641/projects/gestor-de-expedientes-clinicos-citas-e-inventario/oqfqs1dchd9jhwncxjim.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147641/projects/gestor-de-expedientes-clinicos-citas-e-inventario/on7btfjc4vvrt3wohrwb.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147641/projects/gestor-de-expedientes-clinicos-citas-e-inventario/origur1mdzfgbtgoo1dx.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147642/projects/gestor-de-expedientes-clinicos-citas-e-inventario/rksrdwn4inbjefw1ivlw.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147643/projects/gestor-de-expedientes-clinicos-citas-e-inventario/ynzsuzxbgp4im5wixwnc.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147643/projects/gestor-de-expedientes-clinicos-citas-e-inventario/f1yqziiml2p1iivbemme.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147643/projects/gestor-de-expedientes-clinicos-citas-e-inventario/n0suygxuoksqkenqdaww.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147643/projects/gestor-de-expedientes-clinicos-citas-e-inventario/z12pi8bjbhixrjtveqxr.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147645/projects/gestor-de-expedientes-clinicos-citas-e-inventario/yhkopvdsl55hnlksqbv3.png"
                    ]
                },
                {
                    id: "aplicacion-web-para-la-calidad",
                    title: t('aplicacion-web-para-la-calidad.title', { ns: 'projects_section' }),
                    description: t('aplicacion-web-para-la-calidad.description', { ns: 'projects_section' }) + "<a target='_blank' class='button text-button' href='https://repositorio.unan.edu.ni/20529/'><small>Thesis (Engineering)</small></a>",
                    year: 2023,
                    technologies: [
                        { svgContent: Blazor },
                        { svgContent: Web },
                        { svgContent: Sql }
                    ],
                    images: [
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147733/projects/aplicacion-web-para-la-calidad/lf5w3h5bzjlry2onwqsw.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147733/projects/aplicacion-web-para-la-calidad/esp49rlzhttrj1muaxii.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147733/projects/aplicacion-web-para-la-calidad/ixu7nkpz3nqu0iolpzce.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147734/projects/aplicacion-web-para-la-calidad/cdqplqzlnifkkt7tuain.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147734/projects/aplicacion-web-para-la-calidad/g2tdagnys2fzetjla5gi.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147734/projects/aplicacion-web-para-la-calidad/qhwubno4rlj9rhvcaetv.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147735/projects/aplicacion-web-para-la-calidad/cgwjokxih6pimqvuyeph.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147735/projects/aplicacion-web-para-la-calidad/ownhwsury5io2culbn1k.png",
                        "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704147737/projects/aplicacion-web-para-la-calidad/adgshkacyhdkvsewxhpn.png"
                    ]
                }
            ]
        }
    ];
};
