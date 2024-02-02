import Image from 'next/image'
import Link from 'next/link'
import { TFunction } from 'i18next'

import { Project } from '@/app/_lib/definitions'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import Icon from '@/app/_components/icon'
import TextButton from '@/app/_components/text-button'

import { TapTwo } from '@/app/_lib/icons'

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
                    {project.images!.map((image, index) => (
                        <Link key={index} data-fancybox={project.id} data-title={project.title} data-description={project.description} href={image}>
                            <Image
                                fill={true}
                                src={image}
                                alt={project.title + " Image " + (index + 1)}
                                hidden={index >= 2}
                            />
                        </Link>
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

                <div className="made-with">
                    {project.technologies.map((technology, index) => (
                        <Icon key={index} svgIconProps={technology} />
                    ))}
                </div>
            </div>

            <div className="p-x-small p-y-small bar-top-absolute">
                <Chip content={<TapTwo />} />

                <Chip text={project.year.toString()} />
            </div>
        </>
    );
};
