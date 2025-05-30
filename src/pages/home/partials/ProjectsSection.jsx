import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  // Example project to demonstrate layout - real projects will be added later
  const projects = [
    {
      title: "Project Example",
      description: "This is an example of how projects will be displayed. Real projects will be added here soon, showcasing actual work and achievements with detailed descriptions and live demos.",
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-green-500">.</span>projects<span className="text-green-500">()</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">Real projects will be added here soon</p>
          <p className="text-lg text-gray-400">Below is an example of how projects will be displayed</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group h-full relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" disabled className="opacity-50">
                      <FaGithub className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" disabled className="opacity-50">
                      <FaExternalLinkAlt className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
