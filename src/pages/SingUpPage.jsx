import React, { useState } from "react";
import "../css/styleRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useBook } from "../context/BookContext";
import Select from "react-select";

const optionTiposDocumento = [
  { value: 9, label: "CEDULA" },
  { value: 10, label: "TARJETA DE IDENTIDAD" },
  { value: 11, label: "PASAPORTE" },
];

const SingUpPage = () => {
  const { createUser,  responseSingUp} = useBook();

  const navigate = useNavigate();

  const [responseMessage, setResponseMessage] = useState([])

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [nro_documento, setNro_documento] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const [id_tipo_documento, setId_tipo_documento] = useState("");
  // hook provicional mientras no tenemos back

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const newUser = {
        nombre,
        apellido,
        edad,
        nro_documento,
        id_tipo_documento,
        correo,
        genero,
        password,
        img,
      };

      const respuesta = await createUser(newUser);
      console.log(respuesta)

      if (respuesta.status == 201) {
        navigate('/helloUser')
      }
       
      // console.log(responseMessage)
      // setNombre("");
      // setApellido("");
      // setEdad("");
      // setGenero("");
      // setNro_documento("");
      // setCorreo("");
      // setPassword("");
      // setImg("");
      // setId_tipo_documento("");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container container-total-singup">
        <div className="row fila-principal">
          <div className="col-md-8 lado-formulario" id="lado-formulario">
            <form
              className="formulario-login"
              id="Formulario"
              onSubmit={handleSubmit}
            >
              <div className="head-form">
                <h3>Unete a LibAdmin</h3>
                <small>
                  ¿Ya tienes una cuenta?
                  <Link to="/login" className="linkRegister">
                    Inicia sesión
                  </Link>
                </small>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Nombre">
                      <p className="form_parrafo">Primer nombre</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Juan"
                          name="nombre"
                          id="nombre"
                          onChange={(e) => setNombre(e.target.value)}
                          value={nombre}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Apellido">
                      <p className="form_parrafo">Apellidos</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Borja Mayoral"
                          name="apellido"
                          id="apellido"
                          onChange={(e) => setApellido(e.target.value)}
                          value={apellido}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Apellido">
                      <p className="form_parrafo">Edad</p>
                      <div className="form_grupo-input">
                        <input
                          type="number"
                          className="form_input"
                          placeholder="21"
                          name="edad"
                          id="edad"
                          onChange={(e) => setEdad(e.target.value)}
                          value={edad}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Apellido">
                      <p className="form_parrafo">Genero</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Masculino"
                          name="sexo"
                          id="sexo"
                          onChange={(e) => setGenero(e.target.value)}
                          value={genero}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Cedula">
                      <p className="form_parrafo">Numero de identificación</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="1008233422"
                          name="identificacion"
                          id="cedula"
                          onChange={(e) => setNro_documento(e.target.value)}
                          value={nro_documento}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Correo">
                      <p className="form_parrafo">
                        Direccion de correo electrónico
                      </p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Username01@inox.com"
                          name="correo"
                          onChange={(e) => setCorreo(e.target.value)}
                          value={correo}
                          id="correo"
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="contrasena-form">
                    <div className="form_grupo" id="grupo_Contraseña">
                      <p className="form_parrafo">Contraseña</p>
                      <div className="form_grupo-input">
                        <input
                          type="password"
                          className="form_input"
                          placeholder="··········"
                          name="contraseña"
                          id="contraseña"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contrasena-form">
                    <div className="form_grupo" id="grupo_Contraseña">
                      <p className="form_parrafo">Foto</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="foto.jpg"
                          name="foto"
                          id="contraseña"
                          onChange={(e) => setImg(e.target.value)}
                          value={img}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contrasena-form">
                  <div className="form_grupo" id="grupo_Contraseña">
                    <p className="form_parrafo">Tipo de identificacion</p>
                    <div className="form_grupo-input">
                      <Select
                        options={optionTiposDocumento}
                        onChange={(e) => setId_tipo_documento(e.value)}
                        value={id_tipo_documento}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form_mensaje" id="form_mensaje"></div>

              <div className="boton-login">
                <button className="btn-register" value="Ingresar" id="registro">
                  Registrar
                </button>
              </div>

             
                
                <div>
                  <ul>
                    {
                      
                      responseSingUp ? responseSingUp.map((item, i)=>(
                        <li key={i}>{item}</li>
                      )): ""
                    }
                  </ul>
                </div>
            
            </form>
          </div>

          <div className="col-md-4">
            <div className="formulario-login text-center mt-5">
              <div className="head-form">
                <h5>Unete por medio de Google o Facebook</h5>
              </div>
              <button className="btn-account m-2 ">
                Registrate con Facebook <i className="bi bi-facebook"></i>
              </button>
              <div>
                <button
                  className="btn-account m-2 p-3 "
                  id="color-button-account"
                >
                  Registrate con Google <i className="bi bi-google"></i>
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUpPage;
