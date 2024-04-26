import { getDictionary } from "@/get-dictionary";

import dynamic from 'next/dynamic';

import { projectTypes } from '@/app/_lib/data/projects';

import Text from '@/app/_components/text/text';
import Chip from '@/app/_components/chip/chip';

const ProjectCard = dynamic(() => import('@/app/[lang]/_sections/widgets/project-card'));
const ProjectsIcon = dynamic(() => import('@/app/_lib/icons/projects'));

export default async function Projects({
  lang,
}: {
  lang: string;
}) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="col gap-large p-x">
      <div className="flex gap cross-axis-center main-axis-center p-y-large">
        <ProjectsIcon className="icon-extralarge" />

        <Text text={dictionary["projects_section"].title} type="title" />
      </div>

      <Chip text={dictionary.projects_section.projects_data_placeholder} />

      {projectTypes(dictionary.projects_section).map((type, index) => {
        return (
          <div key={index} className="p-y-large">
            <Text classText="p-y-large center-text secondary-color" type="bodyLarge" text={type.type} />

            <div className="col gap-large">
              {
                type.projects.map((project, index) => (
                  <ProjectCard key={index} t={dictionary} project={project} />
                ))
              }
            </div>
          </div>
        );
      })}
    </section>
  );
}
