import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  classNames?: {
    container?: string;
    title?: string;
    icon?: string;
  };
}

export default function SectionTitle({ title, className, classNames }: Props) {
  return (
    <div className={cn("flex items-center gap-4 mb-10", className, classNames?.container)}>
      <span className={cn("inline-flex size-6 items-center justify-center rounded-full border border-border text-primary animate-spin duration-7000", classNames?.icon)}>
        *
      </span>
      <h2 className={cn("text-xl uppercase leading-none", classNames?.title)}>{title}</h2>
    </div>
  );
}
