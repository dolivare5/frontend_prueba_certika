
import "../css/styleRegister.css";

import {useEffect, useState} from 'react'


const MensajeDeVerificacion = () => {

    const [mensajeVerificado, setMensajeVerificado] = useState([])


    useEffect(() => {
        fetch(`/product?id=${id}`, {
          method: 'POST',
          body: JSON.stringify({ id }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => setProduct(data))
          .catch(error => console.error(error));
      }, [id]);
    

  return (
    <>
    <div className="container container-total-singup">
      <div className="row fila-principal">
        <div className="col-md-8 lado-formulario" id="lado-formulario">
          <div className="formulario-login">
            <div className="row text-center">
              
                <h2>¡Te has registrado correctamente!</h2>
                <h5>Nota: Revisa tu bandeja de correo electronico para que puedas verificar tu cuenta de LibAdmin. </h5>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MensajeDeVerificacion