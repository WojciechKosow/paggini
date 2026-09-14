/* Lightweight inline stroke icons — no external dependency, no client JS. */
import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </>
  ),
  bolt: <path d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" />,
  devices: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M2 18h11" />
      <rect x="16.5" y="9" width="5.5" height="11" rx="1.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M5 5l3.4 3.4M15.6 15.6L19 19M19 5l-3.4 3.4M8.4 15.6L5 19" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  star: (
    <path d="M12 3l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L12 17.8 6.2 20.8l1.6-6.6L2.6 9.8l6.8-.5L12 3z" />
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  ...rest
}: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name] ?? paths.sparkles}
    </svg>
  );
}
