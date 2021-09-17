import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppBar,
  Button,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            fontWeight="bold"
          >
            meeple.news
          </Typography>
          <Button href="#" sx={{ my: 1, mx: 1.5 }} startIcon={<Instagram />}>
            @donteatthemeeples
          </Button>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
