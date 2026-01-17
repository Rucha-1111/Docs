import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BookOpen, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const features = [
  {
    icon: FileText,
    title: 'Technical Documentation',
    description: 'Crystal-clear API references, guides, and tutorials that developers actually want to read.',
  },
  {
    icon: BookOpen,
    title: 'Content Strategy',
    description: 'Structured information architecture that scales with your product.',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Documentation that reduces time-to-value and support overhead.',
  },
];

const stats = [
  { value: '50+', label: 'Documentation Projects' },
  { value: '10M+', label: 'Developer Reads' },
  { value: '99%', label: 'Client Satisfaction' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-nav">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px]"
              style={{ background: 'var(--gradient-glow)' }}
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-16 sm:py-20 md:py-32 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="h-4 w-4" />
                  Senior Technical Writer
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Documentation that{' '}
                <span className="text-gradient">developers love</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                I craft technical documentation that bridges complex systems and human understanding.
                Clear, precise, and developer-focused.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="glow">
                  <Link to="/docs" className="gap-2">
                    Explore Documentation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">About Me</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50 border-t border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Transforming complex technical concepts into accessible, actionable documentation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12 text-center"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)', opacity: 0.5 }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 break-words">
                  Ready to explore the documentation?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto break-words">
                  Dive into sample documentation showcasing my approach to technical writing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="break-words">
                    <Link to="/docs/introduction" className="gap-2">
                      Start Reading
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="break-words">
                    <Link to="/blog">Read the Blog</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
