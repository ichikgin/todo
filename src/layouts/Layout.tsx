import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";

<<<<<<< HEAD
 const Layout = () => {
=======
export const Layout = () => {
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
};
<<<<<<< HEAD
export default Layout
=======
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a
