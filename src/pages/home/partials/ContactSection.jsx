import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SocialLinks from '../../../components/SocialLinks';
import ContactForm from '../../../components/ContactForm';

const ContactSection = () => {
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.5, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
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
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-green-500">.</span>contact<span className="text-green-500">()</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500">
                <CardContent className="p-8">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                  <motion.h3
                    className="text-3xl font-bold text-foreground mb-6"
                    variants={itemVariants}
                    whileHover={{ color: "#10b981", scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Let's Work Together
                  </motion.h3>
                  <motion.p
                    className="text-xl text-muted-foreground leading-relaxed mb-8"
                    variants={itemVariants}
                  >
                    Ready to bring your digital vision to life? I'm here to help you create exceptional
                    web experiences that drive results. Whether you need a new website, want to optimize
                    your existing platform, or require ongoing digital marketing support, let's discuss
                    how we can achieve your goals together.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    variants={itemVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button size="lg" asChild>
                        <a href="mailto:ayman.elbachiri666@gmail.com">
                          Get In Touch
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button variant="outline" size="lg" asChild>
                        <a href="#projects">
                          View My Work
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex justify-center mb-8"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <SocialLinks />
                  </motion.div>

                  {/* Logo */}
                  <motion.div
                    className="flex justify-center items-center space-x-3 pt-8 border-t border-border"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src="/logo.svg"
                      alt="Ayman El Bachiri Logo"
                      className="w-12 h-12"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="text-foreground font-semibold text-xl"
                      whileHover={{ color: "#10b981" }}
                      transition={{ duration: 0.3 }}
                    >
                      Ayman El Bachiri
                    </motion.span>
                  </motion.div>
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

export default ContactSection;
