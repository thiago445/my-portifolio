import React from "react";
import { Box, Container, Typography, Link, styled } from "@mui/material";
import theme from "../../theme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",         // garante que respeite o fluxo da página
  zIndex: 1,                    // fica acima do fundo de partículas
  backgroundColor: theme.palette.secondary.dark, // Cor de fundo opaca
  color: "#FFFFFF",             // Texto branco para contraste
  padding: "0.5rem 0",
  textAlign: "center",
  borderTop: " 1px solid #505050",
}));


const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Desenvolvido por Thiago Dev.
                </Typography>
                <Box mt={1}>
                    {/* LinkedIn */}
                    <Link
                        href="www.linkedin.com/in/thiago-vieira-09a45131b"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: "inline-flex", alignItems: "center", marginRight: "1rem" }}
                    >
                        <LinkedInIcon sx={{ marginRight: "0.5rem" }} />
                        
                    </Link>

                    {/* GitHub */}
                    <Link
                        href="https://github.com/thiago445"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                        <GitHubIcon sx={{ marginRight: "0.5rem" }} />
                        
                    </Link>
                </Box>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
