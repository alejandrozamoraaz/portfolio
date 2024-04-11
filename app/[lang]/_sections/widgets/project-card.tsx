import Image from 'next/image';

import { Dictionary, Project } from '@/app/_lib/definitions';

import Text from '@/app/_components/text/text';
import Chip from '@/app/_components/chip/chip';
import TextButton from '@/app/_components/buttons/text-button/text-button';
import Icon from '@/app/_components/icon/icon';
import Card from '@/app/_components/card/card';

export default function ProjectCard({
    t,
    project,
}: {
    t: Dictionary;
    project: Project;
}) {
    return (
        <div className="project-card">
            <Card>
                <div className="main-axis-center">
                    <Image
                        width={300}
                        height={230}
                        src={project.image}
                        alt={project.title}
                    />
                </div>

                <div className="col gap p-y p-x-small">
                    <Text classText="overflow-text" text={project.title} type="bodyLarge" />

                    {project.technologies && (
                        <div className="flex p-x">
                            {
                                project.technologies.map((technology, index) => (
                                    <Icon key={index} iconData={technology} />
                                ))
                            }
                        </div>
                    )}
                </div>
            </Card>

            <Card type="fillBase" borderSize="large" classCard="p-y p-x-small">
                <div className="col gap">
                    <Text text={project.title} type="bodyLarge" />

                    <div className="flex">
                        <Chip text={project.year.toString()} />

                        {project.url != null ? (
                            <TextButton hrefExternal={project.url} text={t.common.see_project} />
                        ) : (
                            <Chip text={t.projects_section.private} />
                        )}
                    </div>

                    {project.description.map((paragraph, index) => (
                        <Text key={index} type="body" text={paragraph} />
                    ))}

                </div>
            </Card>
        </div>
    );
};
