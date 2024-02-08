import Image from 'next/image'
import Link from 'next/link'
import { TFunction } from 'i18next'

import { Project } from '@/app/_lib/definitions'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import Icon from '@/app/_components/icon'
import TextButton from '@/app/_components/text-button'

import { TapTwo } from '@/app/_lib/icons'
import React from 'react'

export default function ProjectCard({
    project,
    t
}: {
    project: Project;
    t: TFunction<[]>;
}) {
    return (
        <>
            {project.images != null &&
                <div className="card-image">
                    <Link title={project.title} data-fancybox={project.id} data-title={project.title} data-description={project.description} href={project.images[0]}>
                        <Image
                            fill={true}
                            src={project.images[0]}
                            alt={project.title}
                        />
                    </Link>

                    {project.images!.map((image, index) => (
                        index > 1 &&
                        <Link key={index} hidden={true} title={project.title} data-fancybox={project.id} data-title={project.title} data-description={project.description} href={image}></Link>
                    ))}
                </div>
            }

            <div className="card-content overflow-text">
                <Text classText="overflow-text" text={project.title} type="bodyLarge" />
                <Text text={project.description.substring(0, 100).replace(/<p>/g, '')} type="bodySmall" />
            </div>

            <div className="card-footer">
                {project.url != null ? (
                    <TextButton isHrefExternal={true} href={project.url} text={t('see_project', { ns: 'common' })} />
                ) : (
                    <Chip text={t('private', { ns: 'common' })} />
                )}

                {project.technologies != null &&
                    <div className="made-with">
                        {
                            project.technologies!.map((technology, index) => (
                                <Icon key={index} svgIconProps={technology} />
                            ))
                        }
                    </div>
                }
            </div>

            <div className="p-x-small p-y-small bar-top-absolute">
                <Chip content={<TapTwo />} />

                <Chip text={project.year.toString()} />
            </div>
        </>
    );
};
