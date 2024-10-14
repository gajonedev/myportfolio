import { cn } from "@/lib/utils";

export default function Logo({
  mobile,
  className,
}: {
  mobile?: boolean;
  className?: string;
}) {
  let bracket1 = "({";
  let bracket2 = "})";

  return (
    <div
      className={cn(
        "flex w-auto font-calSans text-2xl md:text-3xl xl:text-4xl",
        className
      )}
    >
      {bracket1}
      <div>
        ...
        <span
          className={cn("md:inline-flex transition-all", mobile ?? "hidden")}
        >
          gajone
        </span>
      </div>
      {bracket2}
    </div>
  );
}
