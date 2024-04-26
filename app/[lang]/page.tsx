import dynamic from "next/dynamic";

const HeaderSection = dynamic(() => import('@/app/[lang]/_sections/header'));
const ProjectsSection = dynamic(() => import('@/app/[lang]/_sections/projects'));
const AboutSection = dynamic(() => import('@/app/[lang]/_sections/about'));
const BadgesSection = dynamic(() => import('@/app/[lang]/_sections/badges'));
const ContactSection = dynamic(() => import('@/app/[lang]/_sections/contact'));

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="col gap-large">
      <HeaderSection lang={lang} />

      <ProjectsSection lang={lang} />
      <AboutSection lang={lang} />
      <BadgesSection lang={lang} />
      <ContactSection lang={lang} />
    </div>
  )
}
