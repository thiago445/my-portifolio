import { scroller } from "react-scroll";

import { Box, Container, Typography, styled, Button, IconButton, keyframes } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import profileImage from '../../../../assets/images/avatar.jpeg'
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const downloadCV = () => {
  try {
    const fileUrl = '/Currículo.pdf';
    const fileName = 'Thiago_Vieira_Curriculo.pdf';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Erro ao baixar o currículo:', error);
    
  }
};

// Animação de digitação
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Animação de piscar o cursor
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #64ffda }
`;

// Animação de flutuação
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

// Animação de surgimento
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;


// Hero com overlay gradiente para melhorar contraste
const StyledHero = styled("section")({
  position: "relative",
  minHeight: "100vh",
  display: "flex", 
  alignItems: "center ",
  justifyContent: "center",
  zIndex: 1,
  overflow: "hidden",
  padding: "2rem 0",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle at 10% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 70%, rgba(100, 255, 218, 0.05) 0%, transparent 20%)",
    zIndex: -1,
  }
});

// Wrapper da imagem do avatar
const ProfileImageWrapper = styled("div")(() => ({
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  padding: "4px",
  background: "linear-gradient(45deg, #64ffda, #8892b0, #64ffda)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 1.5rem auto",
  boxShadow: "0 8px 32px rgba(100, 255, 218, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  animation: `${fadeIn} 1s ease-out, ${float} 6s ease-in-out infinite`,
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 40px rgba(100, 255, 218, 0.4)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-5px",
    left: "-5px",
    right: "-5px",
    bottom: "-5px",
    borderRadius: "50%",
    background: "linear-gradient(45deg, #64ffda, transparent, #64ffda)",
    zIndex: -1,
    animation: `${float} 4s ease-in-out infinite alternate`,
    opacity: 0.5,
  }
}));

const ProfileImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #0a192f",
  filter: "grayscale(20%)",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: "grayscale(0%)",
  }
}));



const Hero = () => {

  return (
    <StyledHero id="hero">
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 3, md: 4 }
        }}
      >
        {/* Avatar */}
        <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3 }, animation: `${fadeIn} 1s ease-out` }}>
          <ProfileImageWrapper>
            <ProfileImage src={profileImage} alt="Thiago Vieira - Full Stack Developer" />
          </ProfileImageWrapper>
        </Box>

        {/* Conteúdo de texto */}
        <Box sx={{ textAlign: "center", width: "100%", animation: `${fadeIn} 1s ease-out 0.3s both` }}>
          <Typography
            variant="h1"
            sx={{
              color: "#ccd6f6",
              fontWeight: 700,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
              mb: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              lineHeight: 1.2,
            }}
          >
            Thiago Vieira
          </Typography>

          {/* Título com indicador online */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            
            
            <Typography
              variant="h4"
              sx={{
                color: "#64ffda",
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                letterSpacing: "2px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "2px solid #64ffda",
                animation: `${typing} 3.5s steps(20, end), ${blinkCaret} 0.75s step-end infinite`,
                maxWidth: "max-content",
                display: "inline-block",
              }}
            >
              FULL STACK DEVELOPER
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "#8892b0",
              fontWeight: 400,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              mb: { xs: 3, md: 4 },
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto",
              animation: `${fadeIn} 1s ease-out 0.6s both`,
              px: 2,
            }}
          >
            Building scalable and efficient applications with clean, maintainable code 
            and modern technologies.
          </Typography>

          {/* Botões lado a lado */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              justifyContent: "center",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              mt: 3,
              mb: 4,
              animation: `${fadeIn} 1s ease-out 0.9s both`,
              px: 2,
            }}
          >
            <Button
              onClick={downloadCV}
              sx={{
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "2px solid #64ffda",
                color: "#0a192f",
                padding: { xs: "10px 20px", sm: "12px 30px" },
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                '&:hover': {
                  backgroundColor: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(100, 255, 218, 0.3)",
                },
                transition: "all 0.3s ease",
                minWidth: { xs: "140px", sm: "auto" },
              }}
              startIcon={<FileDownloadIcon />}
            >
              Download CV
            </Button>

            <Button
               onClick={() => scroller.scrollTo("contact", {
                  duration: 800,
                  smooth: "easeInOutQuart",
                  offset: -70
                })}
              sx={{
                backgroundColor: "#64ffda",
                border: "2px solid #64ffda",
                color: "#0a192f",
                padding: { xs: "10px 20px", sm: "12px 30px" },
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                '&:hover': {
                  backgroundColor: "#52e3c2",
                  borderColor: "#52e3c2",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(100, 255, 218, 0.4)",
                },
                transition: "all 0.3s ease",
                minWidth: { xs: "140px", sm: "auto" },
              }}
              startIcon={<EmailIcon />}
            >
              Contact Me
            </Button>
          </Box>

          {/* Redes Sociais */}
          <Box 
            sx={{ 
              display: "flex", 
              gap: 2, 
              justifyContent: "center",
              animation: `${fadeIn} 1s ease-out 1.2s both`,
              mt: 3,
              mb: { xs: 6, md: 0 }
            }}
          >
            <IconButton
              href="http://www.linkedin.com/in/thiago-vieira-09a45131b"
              target="_blank"
              sx={{ 
                color: "#64ffda", 
                border: "1px solid rgba(100, 255, 218, 0.3)",
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                '&:hover': {
                  backgroundColor: "rgba(100, 255, 218, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
                width: { xs: "40px", sm: "48px" },
                height: { xs: "40px", sm: "48px" },
              }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
            </IconButton>
            <IconButton
              href="https://github.com/thiago445"
              target="_blank"
              sx={{ 
                color: "#64ffda", 
                border: "1px solid rgba(100, 255, 218, 0.3)",
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                '&:hover': {
                  backgroundColor: "rgba(100, 255, 218, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
                width: { xs: "40px", sm: "48px" },
                height: { xs: "40px", sm: "48px" },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default Hero;