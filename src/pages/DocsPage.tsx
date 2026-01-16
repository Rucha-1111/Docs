import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { MarkdownRenderer, extractHeadings } from '@/components/docs/MarkdownRenderer';
import { docsConfig, getDocBySlug, getFirstDocSlug } from '@/lib/content-config';
import { docsContent } from '@/lib/docs-content';
import { Button } from '@/components/ui/button';

export default function DocsPage() {
  const { slug } = useParams<{ slug: string }>();

  // Default to the first available doc if no slug
  const currentSlug = slug || getFirstDocSlug() || 'introduction';
  const doc = getDocBySlug(currentSlug);
  const content = docsContent[currentSlug];

  if (!doc || !content) {
    const firstDocSlug = getFirstDocSlug();
    return <Navigate to={`/docs/${firstDocSlug}`} replace />;
  }

  const headings = extractHeadings(content);

  // Find previous and next docs for navigation
  const allDocs = docsConfig.categories.flatMap(cat => cat.items);
  const currentIndex = allDocs.findIndex(d => d.slug === currentSlug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-nav">
        <DocsLayout headings={headings}>
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/docs" className="hover:text-foreground transition-colors">
                Docs
              </Link>
              <span>/</span>
              <span className="text-foreground">{doc.title}</span>
            </nav>

            {/* Content */}
            <MarkdownRenderer content={content} />

            {/* Navigation */}
            <nav className="mt-8 grid grid-cols-2 gap-4">
              {prevDoc ? (
                <Button asChild variant="outline" className="justify-start h-auto py-4 px-4">
                  <Link to={`/docs/${prevDoc.slug}`}>
                    <ChevronLeft className="h-4 w-4 mr-2 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground mb-0.5">Previous</div>
                      <div className="font-medium">{prevDoc.title}</div>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextDoc && (
                <Button asChild variant="outline" className="justify-end h-auto py-4 px-4">
                  <Link to={`/docs/${nextDoc.slug}`}>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-0.5">Next</div>
                      <div className="font-medium">{nextDoc.title}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              )}
            </nav>
          </motion.article>
        </DocsLayout>
      </main>

      <Footer />
    </div>
  );
}
