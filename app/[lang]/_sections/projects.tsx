import { projectTypes } from '@/app/_lib/data/projects'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import ProjectCard from '@/app/[lang]/_sections/widgets/project-card'

import { Dictionary } from '@/app/_lib/definitions'

export default function Projects({ t }: {
  t: Dictionary;
}) {
  return (
    <>
      <Chip text={t.projects_section.projects_data_placeholder} />

      {projectTypes(t.projects_section).map((type, index) => {
        return (
          <div key={index} className="p-y col gap">
            <Text classText="p-y" type="bodyLarge" text={type.type} />

            <div className="projects-grid gap-large">
              {
                type.projects.map((project, index) => (
                  <ProjectCard key={index} t={t} project={project} />
                ))
              }
            </div>
          </div>
        );
      })}
    </>
  );
}
