import React from "react";
import "../css/styleRegister.css";
import { useBook } from "../context/BookContext";
import "../css/profileStyles.css";

const PrestamosPage = () => {
  const { user, prestamos } = useBook();
  console.log(prestamos);
  return (
    <>
      <div className="container container-total-singup">
        <div className="row fila-principal">
          <div className="col-md-12 lado-formulario" id="lado-formulario">
            <div className="formulario-login">
              <div className="row">
                <div className="container contenedor-lista-ordenes">
                  <h3>Prestamos realizados.</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">id Prestamo</th>
                        <th scope="col">Nombre del libro</th>
                        <th scope="col">Nombre del usuario</th>
                        <th scope="col">Fecha de prestamo</th>
                        <th scope="col">Devuelto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prestamos.map((prestamo) => (
                        <tr key={prestamo.id}>
                          <th scope="row">{prestamo.id}</th>
                          <td>{prestamo.nombreLibro}</td>
                          <td>{prestamo.nombreUsuario}</td>
                          <td>{prestamo.fecha}</td>
                          <td>{prestamo.devuelto === false ? "❌": "✔️"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestamosPage;
