'use client'

import { useEffect } from 'react'
import { Carousel } from '@fancyapps/ui'

import { renderToString } from '@/app/_lib/utils/render-to-string'
import { projectTypes } from '@/app/_lib/data/projects'

import Text from '@/app/_components/text/text'
import ProjectCard from '@/app/_widgets/project-card'

export default function Projects() {
  useEffect(() => {
    projectTypes.forEach((type, index) => {
      const typeProjectsCarousel = new Carousel(document.getElementById("typeProjectsCarousel_" + index), {
        center: false,
        classes: {
          slide: "f-carousel__slide project-carousel-slide"
        },
        adaptiveHeight: true,
        fill: false
      });

      type.projects.map((project) => {
        renderToString(
          <ProjectCard project={project} />
        ).then((text) => typeProjectsCarousel.appendSlide({ html: text }));
      });
    });
  }, []);

  return (
    <>
      {projectTypes.map((type, index) => {
        return (
          <div className="p-y" key={type.type}>
            <Text type="bodyLarge" text={type.type} />

            <div id={"typeProjectsCarousel_" + index} className="f-carousel"></div>
          </div>
        );
      })}
    </>
  );
}
