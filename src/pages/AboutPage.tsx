import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Code, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Download,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const philosophyPoints = [
  {
    icon: Users,
    title: 'User-First',
    description: 'Every piece of documentation starts with understanding the reader\'s goals and pain points.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity Over Completeness',
    description: 'Better to explain one thing perfectly than ten things poorly. Focus enables mastery.',
  },
  {
    icon: Code,
    title: 'Code That Works',
    description: 'Every example is tested, every snippet runs. Trust is built through reliability.',
  },
  {
    icon: FileText,
    title: 'Progressive Disclosure',
    description: 'Layer complexity appropriately. Quick answers first, deep dives available.',
  },
];

const skills = [
  'API Documentation',
  'Developer Guides',
  'SDK Documentation',
  'OpenAPI/Swagger',
  'Markdown/MDX',
  'Docs-as-Code',
  'Technical Editing',
  'Content Strategy',
  'Information Architecture',
  'Developer Experience',
  'Git/GitHub',
  'React/JavaScript',
];

const samples = [
  {
    title: 'REST API Reference',
    description: 'Complete endpoint documentation with examples, error codes, and best practices.',
    link: '/docs/endpoints',
  },
  {
    title: 'Getting Started Guide',
    description: 'Step-by-step onboarding that gets developers productive in minutes.',
    link: '/docs/quick-start',
  },
  {
    title: 'Concept Documentation',
    description: 'Deep dive into REST fundamentals with clear explanations and diagrams.',
    link: '/docs/rest-api-basics',
  },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-nav">
        {/* Hero */}
        <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="text-lg text-muted-foreground space-y-4 mb-8"
            >
              <p>
                I'm a <span className="text-foreground font-medium">Senior Technical Writer</span> with 
                a passion for making complex technologies accessible. My work bridges the gap between 
                engineering teams and developers, creating documentation that accelerates understanding 
                and adoption.
              </p>
              <p>
                With experience across API documentation, SDK guides, and developer portals, I've 
                helped companies reduce support overhead while improving developer satisfaction.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button asChild className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-card/50 border-t border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Documentation Philosophy</h2>
              <p className="text-muted-foreground max-w-2xl">
                Great documentation isn't just about explaining features—it's about empowering 
                users to succeed. These principles guide every document I create.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl bg-background border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium"
                >
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Writing Samples */}
        <section className="py-16 bg-card/50 border-t border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Writing Samples</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore documentation samples that demonstrate my approach to technical writing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {samples.map((sample, index) => (
                <motion.div
                  key={sample.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={sample.link}
                    className="block h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {sample.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      View Sample
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                Interested in working together? I'm always open to discussing new opportunities, 
                documentation projects, or just chatting about technical writing.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <a
                  href="mailto:hello@techwriter.dev"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              <Button asChild size="lg" className="glow">
                <a href="mailto:hello@techwriter.dev" className="gap-2">
                  <Mail className="h-4 w-4" />
                  hello@techwriter.dev
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
