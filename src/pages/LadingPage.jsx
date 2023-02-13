import React from "react";
import {Link, Navigate} from "react-router-dom";
import {useBook} from '../context/BookContext'
const LadingPage = () => {


  const {user} = useBook()
  return (
    <>
      <header className="wave" id="inicio">
        <div className="container">
          <div className="row">
            <div className="col-md-10 columna-principal-header text-white mt-4 ms-5">
              <h1 className="fw-normal h1-lema-principal">
                ‘El conocimiento es un Super Poder’
              </h1>
              <p className="parrafo-principal">
                Los mejores libros, realmente al alcance de tu mano.
              </p>

              {
                user.length == 1 ?
                <Link className="btn-descubrenos" to="/catalogue">
                !A prestar! <i className="bi bi-book"></i>
              </Link>:
              <Link className="btn-descubrenos" to="/login">
              !A prestar! <i className="bi bi-book"></i>
            </Link>
              }
            </div>
          </div>
        </div>
      </header>

      <section id="descubre" className="about">
        <div className="container">
          <div className="section-title">
            <h2>
            Library Store es un sistema de prestamos de libros a nivel nacional pensado para la facilidad de los mejores lectores del mundo.
            </h2>
            <div className="h3-container">
              <h3>
                Te ofrecemos un lugar seguro y flexible donde puedes hacer prestamos de los libros más asombrosos y unicos en el mercado.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" member">
                <div className="info-estadisticas">
                  <h2>2+</h2>
                  <div className="h3-container">
                    <h3>Miles de libros</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className=" member">
                <div className="info-estadisticas">
                  <h2>4+</h2>
                  <div className="h3-container">
                    <h3>Semanas de prestamo</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer className="footer" id="comunidad">
      <div className="footer-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
        <h2 className="text-center">This is a footer</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, 
        sit recusandae culpa ipsum facere amet. Quia, deleniti numquam aut cum deserunt 
        repellat fugit possimus inventore recusandae eligendi, suscipit sapiente.
      </div>
    </footer>
    </>
  );
};

export default LadingPage;
