
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "../css/catalogue.css";
import { useBook } from "../context/BookContext";
import ConfigBookCard from "../components/ConfigBookCard";
const ConfigBooksPage = () => {

    const { libros, getBooks } = useBook();

    useEffect(() => {
      // getBooks();
      libros
    }, []);
    

  return (
    <>
      <div className="container contenedor-lista-de-productos">
        <div className="head-list-catalogue ">
          <div className="row mx-4">
            <div className="col-md-6">
              <h3>
                <b className="config-book">Elige tu categría favorita.</b>
              </h3>
            </div>
            <div className="col-md-3">
              <h4 className="control-category-active h4-controllers config-book h4-config">
                Estrenos
              </h4>
            </div>
            <div className="col-md-3">
              <h4 className="control-category-active h4-controllers config-book h4-config">
                best seller
              </h4>
            </div>
          </div>
        </div>

        <div className="row" id="productos">
          {libros.map((libro, i) => (
            <ConfigBookCard libro={libro} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ConfigBooksPage;
