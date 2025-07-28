import { Route, Routes } from "react-router";
import Dashboard from "src/pages/Dashboard/index.jsx";
import RootLayout from "src/app/routes/RootLayout.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<Dashboard />} />
        <Route path="login" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
