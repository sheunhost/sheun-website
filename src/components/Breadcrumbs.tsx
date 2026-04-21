import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-navy/40 hover:text-green transition-colors group"
          >
            <Home size={14} className="group-hover:scale-110 transition-transform" />
            <span>Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-navy/20" />
              {isLast || !item.path ? (
                <span className="text-green truncate max-w-[150px] md:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-navy/40 hover:text-green transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
