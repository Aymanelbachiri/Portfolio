import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  const experiences = [
    {
      title: "Full-Stack Web Developer & Entrepreneur",
      period: "2020 - Present",
      description: "Building custom web solutions for clients worldwide, specializing in modern web technologies and digital marketing strategies.",
      achievements: [
        "Developed 50+ websites and web applications",
        "Helped startups establish their online presence",
        "Optimized websites for performance and SEO",
        "Provided comprehensive digital marketing solutions"
      ]
    },
    {
      title: "Freelance Web Developer",
      period: "2018 - 2020",
      description: "Started my journey in web development, working with local businesses to create their digital presence.",
      achievements: [
        "Built responsive websites using modern frameworks",
        "Implemented e-commerce solutions",
        "Provided ongoing maintenance and support",
        "Developed custom CMS solutions"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "PHP", "Laravel", "Express.js", "RESTful APIs", "GraphQL", "Python", "MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Design & UX",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Responsive Design", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Digital Marketing",
      skills: ["SEO", "Google Analytics", "Social Media Marketing", "Content Strategy", "Email Marketing", "PPC Advertising", "Conversion Optimization"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "WordPress", "Shopify", "Stripe", "PayPal", "Google APIs"]
    },
    {
      title: "Business Skills",
      skills: ["Project Management", "Client Communication", "Branding", "Strategy", "Problem Solving", "Team Leadership"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-green-500/20"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="text-green-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              .
            </motion.span>
            resume
            <motion.span
              className="text-green-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ()
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            variants={itemVariants}
          >
            Experience
          </motion.h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={skillCardVariants}
                whileHover={{
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.4,
                              ease: "easeOut"
                            }
                          }
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#10b981",
                          color: "#000"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-pointer">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
