'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5
        }
      });

      tl.from(".slide-up-and-fade", { y: 150, opacity: 0, stagger: 0.05 });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5
        }
      });

      tl.to(".slide-up-and-fade", { y: -150, opacity: 0, stagger: 0.02 });
    },
    { scope: container }
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          I build security workflows that reduce noise, improve context, and make investigation outputs more useful for analysts.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">This is me.</p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">Hi, I&apos;m Sidharth.</p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[450px]">
              <p className="slide-up-and-fade">
                I&apos;m a cybersecurity graduate with experience in Wazuh, Splunk, ELK, vulnerability validation, CTI enrichment,
                and incident documentation.
              </p>
              <p className="mt-3 slide-up-and-fade">
                My approach is practical: improve signal quality, automate repetitive steps where useful, and design workflows that
                support SOC, threat detection, and incident response teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
