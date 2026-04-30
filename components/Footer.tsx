import { GENERAL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="text-center pb-5" id="contact">
      <div className="container">
        <p className="text-lg">Open to cybersecurity opportunities</p>
        <a href={`mailto:${GENERAL_INFO.email}`} className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline">
          {GENERAL_INFO.email}
        </a>
        <div>
          <p className="leading-none text-muted-foreground">
            Inspired by Tajmirul Islam&apos;s portfolio
            <br />
            Revised for Sidharth Krishna
          </p>
        </div>
      </div>
    </footer>
  );
}
