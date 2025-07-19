import { Outlet } from "react-router-dom";
import Header from "src/components/Header/index.jsx";

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
