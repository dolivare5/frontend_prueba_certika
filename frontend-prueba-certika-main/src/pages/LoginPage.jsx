import React, { useState } from 'react'
import "../css/styleRegister.css";
import {Link , useNavigate} from "react-router-dom"
import {useBook} from '../context/BookContext'


const LoginPage = () => {

  const { inicioDeSession, mensajeInicioSession} = useBook()
const navigate = useNavigate()
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
const handleSubmit = async(e)=>{
  e.preventDefault()

    try {
      const user = {
        correo,
        password
      }
      const response = await inicioDeSession(user);
      navigate('/catalogue')
      
      console.log(mensajeInicioSession)
      
      
    } catch (error) {
      console.log(error)
    }

}
  return (
    <>
    <div className="container container-total-singup">
      <div className="row fila-principal">
        <div className="col-md-8 lado-formulario" id="lado-formulario">
          <form
            onSubmit={handleSubmit}
            className="formulario-login"
            id="Formulario"
          >
            <div className="head-form">
              <h3>Unete a LibAdmin</h3>
              <small>
                ¿No tienes una cuenta?
                <Link to="/singup" className="linkRegister">
                   Registrate
                </Link>
              </small>
            </div>


            
             
            <div className="correo-form">
              <div className="form_grupo" id="grupo_Correo">
                <p className="form_parrafo">
                  Direccion de correo electrónico
                </p>
                <div className="form_grupo-input">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Username01@libAdmin.com"
                    name="Correo"
                    id="correo"
                    onChange={(e)=> setCorreo(e.target.value)}
                    value={correo}
                  />
                  <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                </div>
                
              </div>
            </div>

            <div className="contrasena-form">
              <div className="form_grupo" id="grupo_Contraseña">
                <p className="form_parrafo">Contraseña</p>
                <div className="form_grupo-input">
                  <input
                    type="password"
                    className="form_input"
                    placeholder="··········"
                    name="Contraseña"
                    id="contraseña"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                  />
                  <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                </div>
               
              </div>
            </div>

            <div className="form_mensaje" id="form_mensaje">
              
            </div>

            <div className="boton-login">
              <button className="btn-register" value="Ingresar" id="registro">
                Ingresar
              </button>
              <h5 className='mt-2'>{mensajeInicioSession ? mensajeInicioSession.response.data.message: ""}</h5>
            
            </div>
          </form>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  </>
  )
}

export default LoginPage