import React, { useEffect, useState } from "react";
import { useBook } from "../context/BookContext";
import { useParams, Link } from "react-router-dom";
import "../css/infoBookStyles.css";

const InfoBookPage = () => {
  const params = useParams();
  console.log(params);
  const { getBook, token, createPrestamo } = useBook();
  const [libro, setlibro] = useState([]);
  
  useEffect(() => {
    const loadBook = () => {
      if (params.id) {
        const book = getBook(params.id);
        setlibro(book);
      }
    };
    loadBook();
  }, []);

 

  return (
    <>
      <header className="wave head-principal" id="inicio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 columna-principal-header text-white mt-4 ms-5">
              <h3 className="fw-normal h1-lema-principal h3-lemaprincipal">
                ‘{libro.titulo}’
              </h3>
              <h4>Autor: {libro.autor}</h4>
              <p className="parrafo-principal-p">Stock: {libro.stock}Und</p>

              <ul>
                <li>Categoría: {libro.categoria}</li>
                <li>Lugar de edicion: {libro.lugar}</li>
                <li>Editorial: {libro.editorial}</li>
                <li>Año de edicion: {libro.año}</li>
                <li>Numero de páginas: {libro.paginas}</li>
                <li>Tipo de libro: {libro.tipo}</li>
              </ul>

              {token ? (
                <>
                  <Link
                    className="btn-descubrenos"
                    onClick={() => createPrestamo(libro.id)}
                  >
                    ¡Lo quiero ahora! <i className="bi bi-book"></i>
                  </Link>
                  
                </>
              ) : (
                <Link className="btn-descubrenos" to="/login">
                  ¡Registrate ya! <i className="bi bi-book"></i>
                </Link>
              )}
            </div>
            <div className="col-md-4">
              <div className="container-image-book mt-4">
                <img
                  className="image-book"
                  src={libro.image}
                  alt={libro.title}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default InfoBookPage;
