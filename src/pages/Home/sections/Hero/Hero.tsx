import { Box, Container, Grid2, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Avatar from "../../../../assets/images/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButom from "../../../../components/styledButtom/StyledButtom";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/styledButtom/animatedBackground/animatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{ // <= mobile
            paddingTop:"0"
        },
        [theme.breakpoints.up('md')]:{ // >= mobile
            paddingTop:"0"
        }

    }));

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <Box position="absolute" width={"150%"} top={-100} right={0} >
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>


                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primory.contrastText" variant="h1" textAlign="center" pb={2}>Thiago Vieira</Typography>
                            <Typography color="primory.contrastText" variant="h2" textAlign="center">I'am a Softaware Enginner</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                    <StyledButom>
                                        <FileDownloadIcon />

                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButom>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButom>
                                        <EmailIcon />
                                        <Typography>
                                            Contact Me
                                        </Typography>

                                    </StyledButom>
                                </Grid>

                            </Grid>



                        </Grid>
                    </Grid>
                </Container>





            </StyledHero>
        </>
    );
}

export default Hero;
