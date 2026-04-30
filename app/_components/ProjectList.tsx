'use client';
import SectionTitle from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 80%",
          toggleActions: "restart none none reverse",
          scrub: 1
        }
      });

      tl.from(containerRef.current, { y: 150, opacity: 0 });
    },
    { scope: containerRef }
  );

  return (
    <section className="pb-section" id="selected-projects">
      <div className="container">
        <SectionTitle title="SELECTED PROJECTS" />

        <div className="group/projects relative" ref={containerRef}>
          <div className="flex flex-col max-md:gap-10">
            {PROJECTS.map((project, index) => (
              <Project
                index={index}
                project={project}
                selectedProject={null}
                onMouseEnter={() => {}}
                key={project.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
