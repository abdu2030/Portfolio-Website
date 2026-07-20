export type IconName =
  | 'ai'
  | 'store'
  | 'productivity'
  | 'recipe'
  | 'education'
  | 'shield'
  | 'map'
  | 'elearning'
  | 'briefcase'
  | 'kiosk'
  | 'mobile'
  | 'server'
  | 'frontend'
  | 'code'
  | 'database'
  | 'vscode'
  | 'android'
  | 'postman'
  | 'git'
  | 'docker'
  | 'figma'
  | 'experience'
  | 'goal';

interface VisualIconProps {
  name: IconName;
  className?: string;
}

export default function VisualIcon({ name, className = 'w-8 h-8' }: VisualIconProps) {
  const common = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (name) {
    case 'ai':
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path d="M9 9h6M9 15h6M9 12h6" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" />
        </svg>
      );
    case 'store':
      return (
        <svg {...common}>
          <path d="M4 10h16l-1.5-5h-13L4 10z" />
          <path d="M6 10v9h12v-9" />
          <path d="M9 19v-5h6v5" />
          <path d="M4 10c.5 1.2 2.5 1.2 3 0 .5 1.2 2.5 1.2 3 0 .5 1.2 2.5 1.2 3 0 .5 1.2 2.5 1.2 3 0 .5 1.2 2.5 1.2 3 0" />
        </svg>
      );
    case 'productivity':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 4V2M15 4V2M8 9h8" />
          <path d="M8 13l2 2 4-4" />
          <path d="M8 18h7" />
        </svg>
      );
    case 'recipe':
      return (
        <svg {...common}>
          <path d="M6 10h12v3a6 6 0 0 1-12 0v-3z" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <path d="M9 5c-.8-.9-2.3-.4-2.3.9 0 1 .8 1.5 1.8 1.5" />
          <path d="M15 5c.8-.9 2.3-.4 2.3.9 0 1-.8 1.5-1.8 1.5" />
          <path d="M8 21h8" />
        </svg>
      );
    case 'education':
      return (
        <svg {...common}>
          <path d="M3 8l9-4 9 4-9 4-9-4z" />
          <path d="M7 10v5c3 2 7 2 10 0v-5" />
          <path d="M20 9v6" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case 'map':
      return (
        <svg {...common}>
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      );
    case 'elearning':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="11" rx="2" />
          <path d="M10 9l4 2-4 2V9z" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case 'briefcase':
    case 'experience':
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2" />
        </svg>
      );
    case 'kiosk':
      return (
        <svg {...common}>
          <path d="M5 20V8l7-4 7 4v12" />
          <path d="M8 20v-7h8v7" />
          <path d="M10 10h4" />
          <path d="M17 6c1.5.8 2.5 2.2 3 4M7 6c-1.5.8-2.5 2.2-3 4" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M10 18h4" />
        </svg>
      );
    case 'server':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
        </svg>
      );
    case 'frontend':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M4 9h16M9 14l-2 2 2 2M15 14l2 2-2 2" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common}>
          <path d="M9 6l-5 6 5 6M15 6l5 6-5 6M13 4l-2 16" />
        </svg>
      );
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      );
    case 'vscode':
      return (
        <svg {...common}>
          <path d="M5 8l4-3 9 4v6l-9 4-4-3 4-4-4-4z" />
          <path d="M9 5v14" />
        </svg>
      );
    case 'android':
      return (
        <svg {...common}>
          <path d="M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7z" />
          <path d="M9 10V7a3 3 0 0 1 6 0v3M8 5L6.5 3.5M16 5l1.5-1.5M10 14h.01M14 14h.01" />
        </svg>
      );
    case 'postman':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8 13l8-5-4 8-1-3-3 0z" />
        </svg>
      );
    case 'git':
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path d="M6 8v8M8 6c4 0 6 2 8 8" />
        </svg>
      );
    case 'docker':
      return (
        <svg {...common}>
          <path d="M4 13h15c-.3 4-3.2 7-7.5 7H9c-2.8 0-5-2.2-5-5v-2z" />
          <path d="M7 10h3v3H7zM10 10h3v3h-3zM13 10h3v3h-3zM10 7h3v3h-3z" />
          <path d="M19 11c1.3 0 2 .6 2 1.5" />
        </svg>
      );
    case 'figma':
      return (
        <svg {...common}>
          <path d="M10 3h4a3 3 0 0 1 0 6h-4V3z" />
          <path d="M10 9h4a3 3 0 0 1 0 6h-4V9z" />
          <path d="M10 15h2a3 3 0 1 1-2 5.2V15z" />
          <path d="M10 3H8a3 3 0 0 0 0 6h2V3zM10 9H8a3 3 0 0 0 0 6h2V9z" />
        </svg>
      );
    case 'goal':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
          <path d="M16 8l4-4M20 4v4M20 4h-4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 12h6" />
        </svg>
      );
  }
}
