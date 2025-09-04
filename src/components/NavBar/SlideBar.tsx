// src/components/Sidebar/Sidebar.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  onScrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
};

const Sidebar = ({ onScrollToSection, aboutRef, skillsRef, projectRef }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (ref: React.RefObject<HTMLElement>) => {
    onScrollToSection(ref);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  // Estilo dos itens da sidebar
  const itemSx = {
    color: "#ccd6f6",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: "4px",
    px: 3,
    py: 1.5,
    my: 0.5,
    width: "100%",
    justifyContent: "flex-start",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(100, 255, 218, 0.1)",
      color: "#64ffda",
    },
  };

  // Conteúdo da sidebar
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "rgba(10, 25, 47, 0.95)",
        backdropFilter: "blur(10px)",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(100, 255, 218, 0.1)",
      }}
    >
      {/* Logo/Nome */}
      <Typography
        variant="h6"
        sx={{
          color: "#64ffda",
          fontWeight: 700,
          mb: 3,
          px: 2,
          fontSize: "1.4rem",
        }}
      >
        Thiago Vieira
      </Typography>
      
      <Divider sx={{ borderColor: "rgba(100, 255, 218, 0.2)", mb: 2 }} />

      {/* Itens de navegação */}
      <Box sx={{ flexGrow: 1 }}>
        <Button sx={itemSx} onClick={() => handleNavigation(aboutRef)}>
          Sobre
        </Button>
        <Button sx={itemSx} onClick={() => handleNavigation(skillsRef)}>
          Habilidades
        </Button>
        <Button sx={itemSx} onClick={() => handleNavigation(projectRef)}>
          Projetos
        </Button>
      </Box>

      {/* Informações de contato ou outros links */}
      <Box sx={{ mt: "auto", p: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#8892b0", textAlign: "center", mt: 2 }}
        >
          &copy; {new Date().getFullYear()} Thiago Vieira
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Botão de menu para mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1300,
            color: "#64ffda",
            backgroundColor: "rgba(10, 25, 47, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(100, 255, 218, 0.1)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer para mobile */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              border: "none",
              background: "transparent",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1400,
                color: "#64ffda",
              }}
              onClick={handleDrawerToggle}
            >
              <CloseIcon />
            </IconButton>
            {drawerContent}
          </Box>
        </Drawer>
      ) : (
        // Sidebar fixa para desktop
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            width: 280,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 280,
              boxSizing: "border-box",
              border: "none",
              background: "transparent",
              position: "static",
              height: "100vh",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;