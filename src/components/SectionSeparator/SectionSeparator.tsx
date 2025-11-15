import { Box } from "@mui/material";


const SectionSeparator = () => {
  return (
    <Box
      sx={{
        width: "60%",
        height: "2px",
        background: "white",
        position: "relative",
        zIndex: 0,
        boxShadow: "0 0 3px white", // glow sutil
        margin: "16px auto", // apenas um margin, centraliza horizontal e dá espaçamento vertical
        borderRadius: "1px",
      }}
    />
  );
};

export default SectionSeparator;
