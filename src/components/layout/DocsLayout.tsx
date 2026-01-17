import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DocsSidebar } from './DocsSidebar';
import { TableOfContents } from '@/components/docs/TableOfContents';

interface DocsLayoutProps {
  children: React.ReactNode;
  headings?: { id: string; text: string; level: number }[];
}

export function DocsLayout({ children, headings = [] }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-var(--nav-height))]">
      {/* Sidebar */}
      <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Mobile Menu Button */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="gap-2"
            >
              <Menu className="h-4 w-4" />
              Menu
            </Button>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            {children}
          </div>
        </main>

        {/* Table of Contents - Desktop Only */}
        {headings.length > 0 && (
          <aside className="hidden xl:block w-64 flex-shrink-0 py-8 pr-4">
            <TableOfContents headings={headings} />
          </aside>
        )}
      </div>
    </div>
  );
}
