import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { createContext, useMemo, useState } from "react";
import Dashboard from "./components/Dashboard";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ScopedCssBaseline enableColorScheme>
            <Dashboard />
          </ScopedCssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
