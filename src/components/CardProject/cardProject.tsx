import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

interface MyCardProps {
  image: string;
  title: string;
  description: string;
  technologies?: string[];
  buttonText?: string;
  projectLink?: string; // Nova prop para o link
}

const MyCard: React.FC<MyCardProps> = ({
  image,
  title,
  description,
  technologies,
  buttonText = "Visit Website",
  projectLink // Recebe o link do projeto
}) => {
  const handleButtonClick = () => {
    if (projectLink) {
      window.open(projectLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card
      sx={{
        background: 'linear-gradient(145deg, #112240, #0a192f)',
        border: '1px solid rgba(100, 255, 218, 0.1)',
        borderRadius: '15px',
        padding: 0,
        color: '#ccd6f6',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        maxWidth: '100%',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)',
          borderColor: 'rgba(100, 255, 218, 0.3)',
          '& .card-media': {
            transform: 'scale(1.05)',
          }
        }
      }}
    >
      <Box
        sx={{
          height: '220px',
          overflow: 'hidden',
          position: 'relative',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      >
        <Box
          className="card-media"
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
      
      <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700,
            color: '#ccd6f6',
            mb: 1.5,
            fontSize: '1.4rem'
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#8892b0',
            mb: 2,
            lineHeight: '1.6',
            flexGrow: 1
          }}
        >
          {description}
        </Typography>
        
        {technologies && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {technologies.map((tech, index) => (
              <Box
                key={index}
                sx={{
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(100, 255, 218, 0.1)',
                  color: '#64ffda',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        )}
        
        <Button
          onClick={handleButtonClick}
          variant="outlined"
          disabled={!projectLink} // Desabilita se não houver link
          sx={{
            color: projectLink ? '#64ffda' : '#8892b0',
            borderColor: projectLink ? '#64ffda' : '#8892b0',
            fontWeight: 600,
            padding: '0.8rem 2rem',
            '&:hover': {
              backgroundColor: projectLink ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
              borderColor: projectLink ? '#64ffda' : '#8892b0',
              transform: projectLink ? 'translateY(-2px)' : 'none',
            },
            transition: 'all 0.3s ease',
            alignSelf: 'flex-start',
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;