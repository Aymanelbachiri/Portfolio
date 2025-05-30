import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'JavaScript', 'PHP', 'Laravel',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Git',
    'Docker', 'AWS', 'Digital Marketing', 'SEO', 'UI/UX Design', 'Figma', 'Adobe Creative Suite','Wordpress', 'Shopify', 'Stripe', 'PayPal', 'Google APIs'
  ];

  const services = [
    'Website Development',
    'Web Application Development',
    'UI/UX Design',
    'SEO Optimization',
    'Digital Marketing',
    'Branding & Identity',
    'E-commerce Solutions',
    'Performance Optimization'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-green-500">.</span>about<span className="text-green-500">("me")</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Story */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-500 group">
              <CardContent className="p-8">
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    variants={itemVariants}
                  >
                    I'm a self-driven entrepreneur and full-stack web developer passionate about crafting digital
                    experiences that make an impact. With a strong foundation in modern web technologies, I specialize
                    in creating fast, user-focused websites and web applications that solve real-world problems.
                  </motion.p>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    variants={itemVariants}
                  >
                    I provide a wide range of services—from website development and UI/UX design to SEO, digital
                    marketing, and branding. Whether it's helping startups establish their online presence or
                    optimizing existing platforms for performance and engagement, I bring both technical expertise
                    and creative vision to the table.
                  </motion.p>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    variants={itemVariants}
                  >
                    Driven by curiosity and a commitment to quality, I take pride in delivering work that is not
                    only functional but also elegant and scalable. I believe in the power of technology to transform
                    businesses and create meaningful connections between brands and their audiences.
                  </motion.p>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    variants={itemVariants}
                  >
                    When I'm not coding or designing, you'll find me exploring the latest web technologies,
                    studying market trends, or collaborating with fellow entrepreneurs to bring innovative
                    ideas to life.
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies & Services */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-500">
                <CardContent className="p-8">
                  <motion.h3
                    className="text-2xl font-semibold text-foreground mb-6"
                    whileHover={{ color: "#10b981" }}
                    transition={{ duration: 0.3 }}
                  >
                    Technologies & Tools
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    I work with modern technologies to deliver cutting-edge solutions:
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        variants={badgeVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-pointer">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-500">
                <CardContent className="p-8">
                  <motion.h3
                    className="text-2xl font-semibold text-foreground mb-6"
                    whileHover={{ color: "#10b981" }}
                    transition={{ duration: 0.3 }}
                  >
                    Services I Offer
                  </motion.h3>
                  <motion.div
                    className="grid grid-cols-2 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        />
                        <span className="text-muted-foreground text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
