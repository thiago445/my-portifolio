import { Box, Container, Grid, styled, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import theme from "../../../../theme";
import Button from "../../../../components/buttons/Buttons";
import SectionSeparator from "../../../../components/SectionSeparator/SectionSeparator";

const StyledAbout = styled("div")(({ theme }) => ({
    padding: "2rem",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    color: "#fff", // texto padrão branco
    [theme.breakpoints.down('sm')]: {
        padding: "1rem",
    },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "1rem",
    color: "#ffffff", // branco puro para destaque
    [theme.breakpoints.up('md')]: {
        fontSize: "2.5rem",
    },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#b0c4de", // cinza azulado (mistura bem com céu estrelado)
    [theme.breakpoints.up('md')]: {
        fontSize: "1.2rem",
    },
}));

const slideInStyles = {
    transform: "translateX(0)",
    opacity: 1,
    transition: "transform 0.6s ease, opacity 0.6s ease",
};

const hiddenStyles = {
    transform: "translateX(-50px)",
    opacity: 0,
};

const skills = [
    "JavaScript", "Java", "Python", "React", "Git", "HTML",
    "CSS", "Material UI", "Mysql", "MongoDb", "PostgreSQL"
];

const About = () => {
    const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });
    const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
    const [showSkills, setShowSkills] = useState(false);

    return (
        <StyledAbout>
            <Container maxWidth="md">
                <StyledTitle variant="h4" marginTop={"50px"}>Who I Am</StyledTitle>
                

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={6} md={4} >
                        <Box
                            ref={experienceRef}
                            sx={experienceInView ? slideInStyles : hiddenStyles}
                            textAlign="center"
                        >
                            <WorkIcon fontSize="large" sx={{ color: "#4fc3f7" }} />
                            <Typography variant="h6" sx={{ color: "#ffffff" }}>Experience</Typography>
                            <Typography variant="body1" sx={{ color: "#b0c4de" }}>2+ years</Typography>
                            <Typography variant="body2" sx={{ color: "#b0c4de" }}>Dev fullStack</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Box
                            ref={educationRef}
                            sx={educationInView ? slideInStyles : hiddenStyles}
                            textAlign="center"
                        >
                            <SchoolIcon fontSize="large" sx={{ color: "#4fc3f7" }} />
                            <Typography variant="h6" sx={{ color: "#ffffff" }}>Education</Typography>
                            <Typography variant="body1" sx={{ color: "#b0c4de" }}>Fatec</Typography>
                            <Typography variant="body2" sx={{ color: "#b0c4de" }}>
                                Software development and cross-platform
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={4} mb={4}>
                    <StyledSubtitle variant="body1" paragraph>
                        I am a passionate developer who transitioned into programming to transform ideas into real solutions. 
                        My focus is on creating clean, efficient, and user-friendly applications. 
                        Always eager to learn and adapt, I’m continuously improving my skills to stay ahead in the tech world.
                    </StyledSubtitle>
                </Box>

                <Button onClick={() => setShowSkills(!showSkills)}>
                    {showSkills ? "Hide Skills" : "View Skills"}
                </Button>

                {showSkills && (
                    <Grid container spacing={2} justifyContent="center" marginTop={2}>
                        {skills.map(skill => (
                            <Grid item key={skill}>
                                <Box
                                    sx={{
                                        border: "1px solid #4fc3f7",
                                        borderRadius: "8px",
                                        padding: "8px 16px",
                                        color: "#ffffff"
                                    }}
                                >
                                    <Typography variant="body2">{skill}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </StyledAbout>
    );
};

export default About;
