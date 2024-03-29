import Link from "next/link";
import styles from "./styles.module.css";

export default function ReadMoreLink({ href, color, className, target, children, ...props }) {
  return (
    <Link href={href} {...props}>
      <a target={target} className={`text-xs font-medium ${className}`}>
        <svg className={styles.arrow}>
          <defs>
            <marker id={`m-${color}`} markerWidth="4" markerHeight="6" refX="0" refY="1" viewBox="0 0 1 2">
              <polygon points="0,0 1,1 0,2" fill={color} />
            </marker>
          </defs>
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            strokeWidth="1"
            markerEnd={`url(#m-${color})`}
            stroke={color}
          />
        </svg>
        {children}
      </a>
    </Link>
  );
}
