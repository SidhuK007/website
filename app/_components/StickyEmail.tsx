import { GENERAL_INFO } from "@/lib/data";

export default function StickyEmail() {
  return (
    <div className="max-xl:hidden fixed bottom-32 left-0 block">
      <a
        href={`mailto:${GENERAL_INFO.email}`}
        className="px-3 text-muted-foreground tracking-[1px] transition-all hover:text-foreground"
        style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
      >
        {GENERAL_INFO.email}
      </a>
    </div>
  );
}
