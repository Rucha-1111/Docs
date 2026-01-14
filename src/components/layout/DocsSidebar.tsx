import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, BookOpen, Rocket, Code, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { docsConfig } from '@/lib/content-config';
import { Button } from '@/components/ui/button';

interface DocsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  BookOpen,
  Rocket,
  Code,
  Settings,
};

export function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    docsConfig.categories.map(cat => cat.slug) // All expanded by default
  );

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  const sidebarContent = (
    <div className="h-full overflow-y-auto py-6 px-4">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-end mb-4">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-6">
        {docsConfig.categories.map((category) => {
          const Icon = iconMap[category.icon] || FileText;
          const isExpanded = expandedCategories.includes(category.slug);

          return (
            <div key={category.slug}>
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {category.title}
                </span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden ml-4 mt-1 space-y-0.5 border-l border-border"
                  >
                    {category.items.map((item) => {
                      const isActive = location.pathname === `/docs/${item.slug}`;
                      
                      return (
                        <li key={item.slug}>
                          <Link
                            to={`/docs/${item.slug}`}
                            onClick={onClose}
                            className={cn(
                              "block px-4 py-1.5 text-sm transition-colors relative",
                              isActive
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="sidebar-indicator"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"
                              />
                            )}
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-sidebar flex-shrink-0 border-r border-border bg-sidebar sticky top-nav h-[calc(100vh-var(--nav-height))] overflow-hidden">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-nav bottom-0 w-sidebar bg-sidebar border-r border-border z-50"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
