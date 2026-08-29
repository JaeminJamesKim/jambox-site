import { site } from "@/lib/site";

export function JamBoxMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="4.5"
        y="11"
        width="31"
        height="23"
        rx="4"
        fill="#FAF7F1"
        stroke="#1B1914"
        strokeWidth="1.75"
      />
      <path d="M4.5 18.5h31" stroke="#1B1914" strokeWidth="1.75" />
      <rect x="8" y="5" width="24" height="7.5" rx="2.5" fill="#B42318" />
      <circle cx="20" cy="8.75" r="1.65" fill="#FAF7F1" />
    </svg>
  );
}

export function JamBoxWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <JamBoxMark className="size-8 shrink-0" />
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-ink">
        {site.name}
      </span>
    </span>
  );
}
