import { Outlet } from "react-router";
import Header from "src/components/Header/index.jsx";
import Footer from "src/components/Footer/index.jsx";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
