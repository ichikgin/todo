import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { RootState } from "../store";
import { useSelector } from "react-redux";

const Layout = () => {
   const theme = useSelector((state: RootState) => state.themeList.theme )
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme = {theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
export default Layout;
