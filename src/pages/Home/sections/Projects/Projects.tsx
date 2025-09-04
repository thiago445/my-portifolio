import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import MyCard from '../../../../components/CardProject/cardProject';
import scheduling from '../../../../assets/images/serviço.png';
import icaros from '../../../../assets/images/icaros.png';
import salaoBeleza from '../../../../assets/images/salao_beleza.png';

interface Project {
  image: string;
  title: string;
  description: string;
  technologies?: string[];
  projectLink?: string; // Nova propriedade para o link do projeto
}

const Project = () => {
  const theme = useTheme();

  const projects: Project[] = [
    {
      image: scheduling,
      title: 'Scheduling App',
      description: 'Beauty salon booking application with real-time availability.',
      technologies: ['Handlebars', 'Node.js', 'MySQL'],
      
    },
    {
      image: icaros,
      title: 'Icaros',
      description: 'Music education platform for musicians and learners.',
      technologies: ['React', 'MySQL', 'MongoDB', 'Node.js'],
      
    }
  ];

  return (
    <Box 
      id="projects" 
      sx={{ 
        py: 8,
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 30%)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#ccd6f6',
              mb: 1,
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                background: '#64ffda',
                borderRadius: '2px',
                margin: '1rem auto 0',
              }
            }}
          >
            Projects
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#8892b0',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Explore my latest work and innovative solutions
          </Typography>
        </Box>
        
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <MyCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  buttonText="Visit Website"
                  projectLink={project.projectLink} // Passa o link para o card
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;