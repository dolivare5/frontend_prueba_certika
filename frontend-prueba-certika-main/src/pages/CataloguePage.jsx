import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../css/catalogue.css";
import { useBook } from "../context/BookContext";
const CataloguePage = () => {
  const { libros, getBooks } = useBook();

  useEffect(() => {
    libros
  }, []);

  useEffect(() => {
    
  
    
  }, [])
  

  return (
    <div className="contenedor-total-catalogue">
      <header className="wave" id="inicio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 columna-principal-header text-white mt-4 ms-5">
              <h1 className="fw-normal h1-lema-principal">
                ‘<b>Catálogo.</b> Elige de entre todos nuestros fantasticos
                libros, tu favorito.’
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container contenedor-lista-de-productos">
        <div className="head-list-catalogue ">
          <div className="row mx-4">
            <div className="col-md-6">
              <h3>
                <b>Elige tu categría favorita.</b>
              </h3>
            </div>
            <div className="col-md-3">
              <h4 className="control-category-active h4-controllers">
                Estrenos
              </h4>
            </div>
            <div className="col-md-3">
              <h4 className="control-category-active h4-controllers">
                best seller
              </h4>
            </div>
          </div>
        </div>

        <div className="row" id="productos">
          {libros.map((libro, i) => (
            <ProductCard libro={libro} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CataloguePage;
