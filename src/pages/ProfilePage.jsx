import React, { useEffect, useState } from "react";
import "../css/styleRegister.css";
import {useBook} from '../context/BookContext'
import '../css/profileStyles.css'
import {Link} from 'react-router-dom'
const ProfilePage = () => {


const {user} = useBook()
console.log(user)
  return (
    <>
      <div className="container container-total-singup">
        <div className="row fila-principal">
          <div className="col-md-8 lado-formulario" id="lado-formulario">
            <div className="formulario-login">
              <div className="row">
                

                <div className="container ">
                  <div className="row">
                    <div className="col-md-8">
                      <h1>Perfil de usuario.</h1>
                      <h3>Informacion personal:</h3>
                      <h6>Nombre: {user[0].nombre}</h6>
                      <h6>Apellido: {user[0].apellido}</h6>
                      <h6>Email: {user[0].correo}</h6>
                      <div className="my-4">
                        <h4>Panel de Administrador:</h4>
                        <Link className="btn btn-success  button-prestamos-link" to='/prestamos'>
                          Prestamos
                        </Link>
                        <Link className="btn btn-warning button-invent-link mx-1" to='/inventario'>
                          Inventario
                        </Link>
                        <Link className="btn btn-danger button-user-link mx-1" to='/usuarios'>
                          usuarios
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="foto-perfil-container mt-4">
                        <img className="foto-perfil-user" src={user[0].foto} alt={user[0].nombre} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
