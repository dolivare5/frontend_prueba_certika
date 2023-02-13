import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LadingPage from "./pages/LadingPage";
import "./css/style.css";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SingUpPage from "./pages/SingUpPage";
import CataloguePage from "./pages/CataloguePage";
import AdminPage from "./pages/AdminPage";
import { BookContextProvider } from "./context/BookContext";
import ConfigBooksPage from "./pages/ConfigBooksPage";
import InfoBookPage from "./pages/InfoBookPage";
import ProfilePage from "./pages/ProfilePage";
import PrestamosPage from "./pages/PrestamosPage";
import InventarioPage from "./pages/InventarioPage";
import UsuariosPage from "./pages/UsuariosPage";
import RegistriExitosoPage from "./pages/RegistriExitosoPage";
import PrivateRoute from "./auth/PrivateRoute";
import { useBook } from "./context/BookContext";
function App() {
  const { token } = useBook();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUpPage />} />
        <Route path="/helloUser" element={<RegistriExitosoPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route element={<PrivateRoute token={token} />}>
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/view/book/:id" element={<InfoBookPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/prestamos" element={<PrestamosPage />} />
          <Route path="/inventario" element={<InventarioPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/edit/:id" element={<AdminPage />} />
          <Route path="/admin/config" element={<ConfigBooksPage />} />
        </Route>

        {/* Ruta para el error 404 */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
