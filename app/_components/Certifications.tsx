import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getCertifications } from "@/lib/certifications";

export default async function Certifications() {
  const certifications = await getCertifications();

  return (
    <section className="pb-section" id="certifications">
      <div className="container">
        <SectionTitle title="CERTIFICATIONS" />
        <div className="grid md:grid-cols-2 gap-[25px]">
          {certifications.map((cert) => (
            <a
              key={`${cert.title}-${cert.href}`}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-border bg-background-light/40 p-5 hover:bg-background-light transition-colors"
            >
              {cert.image ? (
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={800}
                  height={500}
                  className="w-full aspect-[16/10] object-cover mb-5"
                  unoptimized={cert.image.startsWith("https://raw.githubusercontent.com/")}
                />
              ) : (
                <div className="mb-5 flex aspect-[16/10] items-end border border-border bg-card p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-muted-foreground">{cert.issuer}</p>
                    <h3 className="mt-2 text-2xl font-anton leading-tight">{cert.title}</h3>
                  </div>
                </div>
              )}
              <p className="text-muted-foreground text-sm uppercase tracking-[2px]">{cert.issuer}</p>
              <h3 className="text-3xl font-anton mt-2 group-hover:text-primary transition-colors">{cert.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
