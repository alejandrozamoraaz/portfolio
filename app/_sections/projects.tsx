'use client'

import { useEffect } from 'react'
import { Carousel } from '@fancyapps/ui'
import { TFunction } from 'i18next'

import { renderToString } from '@/app/_lib/utils/render-to-string'
import { projectTypes } from '@/app/_lib/data/projects'

import { InitFancyboxProjects } from '@/app/_lib/utils/fancybox-projects-config'

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import ProjectCard from '@/app/_widgets/project-card'

export default function Projects({ t }: {
  t: TFunction<[]>;
}) {
  useEffect(() => {
    projectTypes(t).forEach((type, index) => {
      const typeProjectsCarousel = new Carousel(document.getElementById("typeProjectsCarousel_" + index), {
        center: false,
        classes: {
          slide: "f-carousel__slide project-carousel-slide card"
        },
        adaptiveHeight: true,
        fill: false
      });

      type.projects.map((project) => {
        renderToString(
          <ProjectCard project={project} t={t} />
        ).then((text) => typeProjectsCarousel.appendSlide({ html: text }));
      });
    });

    InitFancyboxProjects();
  }, [t]);

  return (
    <>
      <Chip text={t("projects_data_placeholder", { ns: "common" })} />

      {projectTypes(t).map((type, index) => {
        return (
          <div className="p-y col gap" key={type.type}>
            <Text classText="p-y" type="bodyLarge" text={type.type} />

            <div id={"typeProjectsCarousel_" + index} className="f-carousel p-y"></div>
          </div>
        );
      })}
    </>
  );
}
