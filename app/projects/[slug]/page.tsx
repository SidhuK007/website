import { Metadata } from "next";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} - ${project.techStack.slice(0, 3).join(", ")}` : "Project",
    description: project?.description
  } as Metadata;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const media = [...new Set([project.longThumbnail, ...project.images])];

  return (
    <section className="py-28">
      <div className="container">
        <Link href="/#selected-projects" className="text-muted-foreground hover:text-primary">
          Back
        </Link>

        <div className="grid lg:grid-cols-12 mt-10 gap-[25px]">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-anton leading-none">{project.title}</h1>
            <p className="text-muted-foreground mt-5">{project.year}</p>
            <div className="markdown-text text-lg text-muted-foreground mt-8">{parse(project.description)}</div>
            <div className="markdown-text text-lg text-muted-foreground mt-8">{parse(project.role)}</div>

            <div className="flex gap-3 flex-wrap mt-8">
              {project.techStack.map((item) => (
                <span key={item} className="px-3 py-2 bg-background-light text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {project.sourceCode ? (
                <a href={project.sourceCode} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                  Source
                </a>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-[25px]">
            {media.map((image) => (
              <Image key={image} src={image} alt={project.title} width={1200} height={900} className="w-full h-auto object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
