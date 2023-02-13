import React from "react";
import "../css/styleRegister.css";
import { useBook } from "../context/BookContext";
import "../css/profileStyles.css";

const InventarioPage = () => {

    const {prestamos , libros} = useBook();
    
  return (
    <>
      <div className="container container-total-singup">
        <div className="row fila-principal">
          <div className="col-md-12 lado-formulario" id="lado-formulario">
            <div className="formulario-login">
              <div className="row">
                <div className="container contenedor-lista-ordenes">
                  <h3>Inventario de libros.</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">id Libro</th>
                        <th scope="col">titulo del libro</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Editorial</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Año</th>
                        <th scope="col">Páginas</th>
                        <th scope="col">Lugar de edicion</th>
                        <th scope="col">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libros.map((libro) => (
                        <tr key={libro.id}>
                          <th scope="row">{libro.id}</th>
                          <td>{libro.titulo}</td>
                          <td>{libro.autor}</td>
                          <td>{libro.editorial}</td>
                          <td>{libro.categoria}</td>
                          <td>{libro.año}</td>
                          <td>{libro.paginas}</td>
                          <td>{libro.lugar}</td>
                          <td>{libro.stock}</td>
                          
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
  )
}

export default InventarioPage