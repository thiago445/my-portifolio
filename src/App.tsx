// src/App.tsx
import Home from "./pages/Home/Home";
import BackgroundStars from "./components/backgound/BackgroundStars";
import { GlobalStyles } from "@mui/material";

const App = () => {
  return (
    <>
      {/* garante que nada pinte o fundo de branco */}
      <GlobalStyles styles={{ "html, body, #root": { height: "100%", background: "transparent" } }} />
      <BackgroundStars />
      <Home />
    </>
  );
};

export default App;
