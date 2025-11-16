import { Box, Container, Grid, styled, Typography, TextField, Button, Alert, Snackbar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const StyledContact = styled("div")(({ theme }) => ({
    border: "0.5px solid white",
    padding: "2rem",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    color: "#fff",
    [theme.breakpoints.down('sm')]: {
        padding: "1rem",
    },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "1rem",
    color: "#ffffff",
    [theme.breakpoints.up('md')]: {
        fontSize: "2.5rem",
    },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#b0c4de",
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

const Contact = () => {
    const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });
    const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });

    // 🔧 SUBSTITUA POR SUAS CREDENCIAIS DO EMAILJS
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_8oxznng',
        TEMPLATE_ID: 'template_y1uw395', 
        USER_ID: 'xGlDgpu97vvkvGbst',
        YOUR_EMAIL: 'thiago.magalhaes11@fatec.sp.gov.br'
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: EMAILJS_CONFIG.YOUR_EMAIL,
                    reply_to: formData.email,
                    subject: `Nova mensagem de ${formData.name} - Portfólio`
                },
                EMAILJS_CONFIG.USER_ID
            );

            setSnackbar({
                open: true,
                message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
                severity: 'success'
            });
            
            setFormData({ name: '', email: '', message: '' });
            
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setSnackbar({
                open: true,
                message: 'Erro ao enviar mensagem. Tente novamente ou me envie um email diretamente.',
                severity: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const phoneNumber = "5511934629535";
    const email = "thiago.magalhaes11@fatec.sp.gov.br";
    const linkedinUrl = "www.linkedin.com/in/thiago-vieira-09a45131b";
    const githubUrl = "https://github.com/thiago445";

    const openWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setSnackbar({
            open: true,
            message: 'Email copiado para a área de transferência!',
            severity: 'success'
        });
    };

    return (
        <StyledContact id="contact">
            <Container maxWidth="md">
                <StyledTitle variant="h4" marginTop={"50px"}>Get In Touch</StyledTitle>
                <StyledSubtitle variant="body1" paragraph>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </StyledSubtitle>

                <Grid container spacing={4} justifyContent="center">
                    {/* Informações de Contato - LATERAL ESQUERDA */}
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={contactRef}
                            sx={contactInView ? slideInStyles : hiddenStyles}
                            textAlign="center"
                        >
                            <Typography variant="h6" sx={{ color: "#ffffff", mb: 3 }}>Contact Information</Typography>
                            
                            <Box sx={{ mb: 3, cursor: 'pointer' }} onClick={copyEmail}>
                                <EmailIcon fontSize="medium" sx={{ color: "#4fc3f7", mr: 1 }} />
                                <Typography variant="body1" sx={{ color: "#b0c4de", display: 'inline', '&:hover': { color: '#64ffda' } }}>
                                    {email}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 3, cursor: 'pointer' }} onClick={openWhatsApp}>
                                <PhoneIcon fontSize="medium" sx={{ color: "#4fc3f7", mr: 1 }} />
                                <Typography variant="body1" sx={{ color: "#b0c4de", display: 'inline', '&:hover': { color: '#64ffda' } }}>
                                    +55 (11) 93462-9535
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 3, cursor: 'pointer' }} onClick={() => window.open(linkedinUrl, '_blank')}>
                                <LinkedInIcon fontSize="medium" sx={{ color: "#4fc3f7", mr: 1 }} />
                                <Typography variant="body1" sx={{ color: "#b0c4de", display: 'inline', '&:hover': { color: '#64ffda' } }}>
                                    linkedin
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 3, cursor: 'pointer' }} onClick={() => window.open(githubUrl, '_blank')}>
                                <GitHubIcon fontSize="medium" sx={{ color: "#4fc3f7", mr: 1 }} />
                                <Typography variant="body1" sx={{ color: "#b0c4de", display: 'inline', '&:hover': { color: '#64ffda' } }}>
                                    github
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Formulário de Contato - LATERAL DIREITA */}
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={formRef}
                            sx={formInView ? slideInStyles : hiddenStyles}
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            <Typography variant="h6" sx={{ color: "#ffffff", mb: 3, textAlign: 'center' }}>
                                Send me a message
                            </Typography>

                            <TextField
                                fullWidth
                                name="name"
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    input: { color: '#ffffff' },
                                    label: { color: '#b0c4de' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#4fc3f7' },
                                        '&:hover fieldset': { borderColor: '#64ffda' },
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    input: { color: '#ffffff' },
                                    label: { color: '#b0c4de' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#4fc3f7' },
                                        '&:hover fieldset': { borderColor: '#64ffda' },
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                margin="normal"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    textarea: { color: '#ffffff' },
                                    label: { color: '#b0c4de' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#4fc3f7' },
                                        '&:hover fieldset': { borderColor: '#64ffda' },
                                    }
                                }}
                            />

                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                sx={{ 
                                    mt: 2,
                                    backgroundColor: isSubmitting ? "#666" : "rgba(255,255,255,0.9)",
                                    border: "2px solid #64ffda",
                                    color: "#0a192f",
                                    padding: "12px 30px",
                                    borderRadius: "4px",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    '&:hover': {
                                        backgroundColor: isSubmitting ? "#666" : "white",
                                        transform: isSubmitting ? "none" : "translateY(-2px)",
                                        boxShadow: isSubmitting ? "none" : "0 5px 15px rgba(100, 255, 218, 0.3)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {isSubmitting ? "Enviando..." : "Send Message"}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert 
                        onClose={handleCloseSnackbar} 
                        severity={snackbar.severity}
                        sx={{ width: '100%' }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </StyledContact>
    );
};

export default Contact;