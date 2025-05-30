import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aymanelbachiri',
      icon: FaGithub,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayman-elbachiri-97246b234/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:ayman.elbachiri666@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`flex space-x-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-colors duration-300 ${link.color}`}
            aria-label={link.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.3,
              color: "#10b981",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <IconComponent size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
