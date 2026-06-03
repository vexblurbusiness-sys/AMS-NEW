import { useId } from 'react';

export function Logo({ className = "h-12", variant = 'dark' }: { className?: string, variant?: 'dark' | 'light' }) {
  const textColor = variant === 'dark' ? '#242424' : '#ffffff';
  const titleId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 260 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>Award Mortgage Solutions</title>
      <rect x="10" y="15" width="50" height="50" fill="#f08519" />
      <g transform="rotate(-45 35 40)">
        <ellipse cx="35" cy="40" rx="30" ry="12" fill="white" />
      </g>

      <text
        x="72"
        y="38"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="24"
        fill={textColor}
        letterSpacing="0"
      >
        Award Mortgage
      </text>

      <text
        x="72"
        y="62"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="21"
        fill={textColor}
      >
        Mortgage Solutions
      </text>
    </svg>
  );
}
