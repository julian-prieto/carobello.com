import Link from "next/link";
import styles from "./styles.module.scss";

export default function ReadMoreLink({ href, color, className, children }) {
  return (
    <Link href={href}>
      <a className={`text-xs font-medium ${className}`}>
        <svg className={styles.arrow}>
          <defs>
            <marker
              id={`m-${color}`}
              markerWidth="4"
              markerHeight="6"
              refX="0"
              refY="1"
              viewBox="0 0 1 2"
            >
              <polygon points="0,0 1,1 0,2" fill={color} />
            </marker>
          </defs>
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke-width="1"
            marker-end={`url(#m-${color})`}
            stroke={color}
          />
        </svg>
        {children}
      </a>
    </Link>
  );
}
