import Image from 'next/image'

import { Dictionary, Project } from '@/app/_lib/definitions'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import TextButton from '@/app/_components/text-button'

export default function ProjectCard({
    t,
    project,
}: {
    t: Dictionary;
    project: Project;
}) {
    return (
        <div className="project-card">
            <div className="project-card-cover">
                <Image
                    width={300}
                    height={230}
                    src={project.image}
                    alt={project.title}
                />

                <div className="col gap p-y-small">
                    <Text classText="overflow-text" text={project.title} type="bodyLarge" />

                    {project.technologies && (
                        <div className="flex">
                            {
                                project.technologies.map((Technology, index) => (
                                    <Technology key={index} className="icon" />
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>

            <div className="project-card-detail">
                <div className="col gap p-y p-x-small">
                    <Text text={project.title} type="bodyLarge" />

                    {project.description.map((paragraph, index) => (
                        <Text key={index} type="body" text={paragraph} />
                    ))}

                    <div className="flex">
                        <Chip text={project.year.toString()} />

                        {project.url != null ? (
                            <TextButton isHrefExternal={true} href={project.url} text={t.common.see_project} />
                        ) : (
                            <Chip text={t.projects_section.private} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
