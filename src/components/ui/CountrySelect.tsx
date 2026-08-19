"use client";

import { useEffect, useRef, useState } from "react";
import Flag from "@/components/ui/Flag";

export type CountryOption = {
  iso: string;
  name: string;
  suffix?: string;
};

export default function CountrySelect({
  options,
  value,
  onChange,
  variant = "light",
}: {
  options: CountryOption[];
  value: number;
  onChange: (index: number) => void;
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options[value];

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const trigger =
    variant === "dark"
      ? "bg-white/10 border-white/10 text-white focus:border-teal-500/60"
      : "bg-gray-50 border-gray-200 text-gray-800 focus:border-teal-600";

  const menu =
    variant === "dark"
      ? "bg-navy-900 border-white/10"
      : "bg-white border-navy-100";

  const item =
    variant === "dark"
      ? "text-white/80 hover:bg-white/10 hover:text-white"
      : "text-navy-800 hover:bg-navy-50";

  const active =
    variant === "dark" ? "bg-white/10 text-white" : "bg-navy-50 text-navy-800";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`w-full flex items-center gap-2.5 appearance-none border rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition-colors cursor-pointer ${trigger}`}
      >
        <Flag code={selected.iso} name={selected.name} />
        <span className="flex-1 text-left truncate">
          {selected.name}
          {selected.suffix ? ` (${selected.suffix})` : ""}
        </span>
        <svg
          className={`w-4 h-4 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-30 mt-1.5 w-full max-h-64 overflow-auto rounded-xl border shadow-xl py-1 ${menu}`}
        >
          {options.map((opt, i) => (
            <li key={`${opt.iso}-${opt.suffix ?? opt.name}`}>
              <button
                type="button"
                role="option"
                aria-selected={i === value}
                onClick={() => {
                  onChange(i);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-left transition-colors ${
                  i === value ? active : item
                }`}
              >
                <Flag code={opt.iso} name={opt.name} />
                <span className="truncate">
                  {opt.name}
                  {opt.suffix ? ` (${opt.suffix})` : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
