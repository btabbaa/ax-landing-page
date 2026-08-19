import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/contact";

type StoreBadgesProps = {
  variant?: "navy" | "light" | "outline";
  size?: "sm" | "md";
  className?: string;
};

const stores = [
  {
    href: APP_STORE_URL,
    label: "Download on the",
    name: "App Store",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.37 3.62c.9-1.08 1.5-2.58 1.33-4.12-1.29.05-2.85.86-3.77 1.94-.83.96-1.56 2.5-1.37 3.97 1.45.11 2.94-.74 3.81-1.79zM20.5 17.15c-.37.86-.81 1.65-1.33 2.41-.71 1.05-1.62 2.23-2.76 2.25-1.09.02-1.45-.71-2.7-.71-1.26 0-1.65.68-2.77.73-1.14.05-2.01-1.14-2.73-2.18C6.4 17.18 5.2 12.7 6.85 9.7c.82-1.48 2.28-2.42 3.87-2.45 1.21-.02 2.35.81 3.1.81.74 0 2.13-1 3.59-.85.61.02 2.33.25 3.43 1.86-2.9 1.59-2.44 5.73.66 7.08z" />
      </svg>
    ),
  },
  {
    href: PLAY_STORE_URL,
    label: "Get it on",
    name: "Google Play",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M5.5 3.5v17l14-8.5-14-8.5z" />
      </svg>
    ),
  },
];

export default function StoreBadges({
  variant = "navy",
  size = "md",
  className = "",
}: StoreBadgesProps) {
  const styles = {
    navy: "bg-navy-800 hover:bg-navy-700 text-white",
    light: "bg-white hover:bg-navy-50 text-navy-800",
    outline: "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15",
  }[variant];

  const padding = size === "sm" ? "px-3.5 py-2.5" : "px-4 py-3";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((store) => (
        <a
          key={store.name}
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 rounded-xl ${padding} ${styles} transition-colors`}
        >
          {store.icon}
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-medium opacity-70">{store.label}</span>
            <span className="block text-sm font-bold">{store.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
