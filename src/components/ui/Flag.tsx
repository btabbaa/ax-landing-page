type FlagProps = {
  code: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "w-5 h-3.5",
  md: "w-6 h-4",
  lg: "w-8 h-[22px]",
};

export default function Flag({ code, name, size = "md", className = "" }: FlagProps) {
  const iso = code.toLowerCase();

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/${iso}.svg`}
      alt={name ? `${name} flag` : ""}
      className={`${sizes[size]} rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)] flex-shrink-0 ${className}`}
    />
  );
}
