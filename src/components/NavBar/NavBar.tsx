import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

type Props = {
  onScrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
};

const itemSx = {
  color: "primary.contrastText",
  textTransform: "none",
  fontWeight: 700,
  borderRadius: "9999px",
  px: { xs: 2, sm: 4 },  // horizontal menor no mobile, maior no PC
  py: { xs: 1.5, sm: 2 }, // padding vertical maior
  mx: 0.5,
  letterSpacing: 0.2,
  fontSize: { xs: "0.95rem", sm: "1.1rem" }, // fonte responsiva
  textShadow: "0 0 6px rgba(255,255,255,.6)",
  "&:hover": {
    boxShadow: "0 0 10px rgba(255,255,255,.6)",
    backgroundColor: "rgba(255,255,255,0.06)",
  },
};
export default function NavBar({ onScrollToSection, aboutRef, skillsRef, projectRef }: Props) {
  return (
    <AppBar
      position="static" // ✅ Mudei de "fixed" para "static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(3px)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 1 }}>
        <Box>
          <Button sx={itemSx} onClick={() => onScrollToSection(aboutRef)}>About</Button>
          <Button sx={itemSx} onClick={() => onScrollToSection(skillsRef)}>Skills</Button>
          <Button sx={itemSx} onClick={() => onScrollToSection(projectRef)}>Project</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}