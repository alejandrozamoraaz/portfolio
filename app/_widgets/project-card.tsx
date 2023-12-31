import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@/app/_lib/definitions'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import Icon from '@/app/_components/icon'
import TextButton from '@/app/_components/text-button'

export default function ProjectCard({
    project
}: {
    project: Project;
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

            <div className="card-content">
                <Text classText="overflow-text" text={project.title} type="bodyLarge" />
                <Text classText="overflow-text" text={project.description} />
            </div>

            <div className="card-footer">
                {project.url != null ? (
                    <TextButton isHrefExternal={true} href={project.url} text="Ver proyecto" />
                ) : (
                    <Chip text="Privado" />
                )}

                <div className="made-with">
                    {project.technologies.map((technology, index) => (
                        <Icon key={index} type="svg" svgIconProps={technology} />
                    ))}
                </div>
            </div>

            <div className="p-x-small p-y-small bar-top-absolute">
                {/* https://www.svgrepo.com/svg/387167/click-tap-two */}
                <Chip content={icon} />

                <Chip text={project.year.toString()} />
            </div>
        </>
    );
};

const icon = <svg width="16px" height="16px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" fill="white" fillOpacity={0.01} />
    <path d="M11 44V15C11 12.7909 12.7909 11 15 11C17.2091 11 19 12.7909 19 15V35L42 40V44" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 25.2501V25.2501C6.90264 23.65 4 19.664 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 19.664 23.0974 23.65 19 25.2501" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
</svg>;