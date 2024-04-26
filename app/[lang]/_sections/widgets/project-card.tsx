import Image from 'next/image';

import { Dictionary, Project } from '@/app/_lib/definitions';

import Text from '@/app/_components/text/text';
import Chip from '@/app/_components/chip/chip';
import TextButton from '@/app/_components/buttons/text-button/text-button';
import Card from '@/app/_components/card/card';

export default function ProjectCard({
    t,
    project,
}: {
    t: Dictionary;
    project: Project;
}) {
    return (
        <Card classCard="flex p-x p-y custom-project-card">
            <div className="col flex-1">
                <div className="col flex-1 gap main-axis-center cross-axis-center">
                    <Image
                        width={300}
                        height={230}
                        src={project.image}
                        alt={project.title}
                    />

                    {project.technologies && (
                        <div className="flex p-x">
                            {
                                project.technologies.map((Technology, index) => (
                                    <Technology key={index} className="icon" />
                                ))
                            }
                        </div>
                    )}

                    <div className="flex p-y-large">
                        <Chip text={project.year.toString()} />

                        {project.url != null ? (
                            <TextButton hrefExternal={project.url} text={t.common.see_project} />
                        ) : (
                            <Chip text={t.projects_section.private} />
                        )}
                    </div>
                </div>

                <details className="hidden-laptop">
                    <summary><Text classText="display-inline-text" text={project.title} type="bodyLarge" /></summary>

                    <div className="col gap p-y">
                        {project.description.map((paragraph, index) => (
                            <Text key={index} type="bodySmall" text={paragraph} />
                        ))}
                    </div>
                </details>
            </div>

            <div className="col flex-1 gap hidden-mobile">
                <Text text={project.title} type="bodyLarge" classText="p-y" />
                {project.description.map((paragraph, index) => (
                    <Text key={index} type="bodySmall" text={paragraph} />
                ))}
            </div>
        </Card>
    );
};
