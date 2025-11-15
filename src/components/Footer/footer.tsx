
    import { Box, Container, Typography, styled } from "@mui/material";

    const FooterContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(10, 25, 47, 0.6)", // Transparente, combina com espaço estelar
    color: "#ccd6f6",                          // Azul suave (padrão Portfólio Dev)
    padding: "1.5rem 0",
    textAlign: "center",
    borderTop: "1px solid rgba(100, 255, 218, 0.2)", // verde neon suave
    backdropFilter: "blur(4px)",               // efeito vidro (fica muito mais premium)
    }));

    const Footer = () => {
        return (
            <FooterContainer>
                <Container>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Desenvolvido por Thiago Dev.
                    </Typography>
                </Container>
            </FooterContainer>
        );
    };

    export default Footer;
