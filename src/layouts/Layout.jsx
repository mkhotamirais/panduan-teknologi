import Footer from "./Footer";
import Header from "./Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
