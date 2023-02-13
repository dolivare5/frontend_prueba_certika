import axios from "axios";
// import {useBookAccess} from './useBookAccess'
// const PORT_CLIENT=5173  http://localhost:3009/api/v1/libary/parametros
const PROTOCOL_SERVER = "http://";
const HOST_SERVER = "localhost:";
const PORT_SERVER = 3009;
// import {useBook} from '../context/BookContext'
// const {token} = useBook()
export const createUserRequiest = async (user) => {
  const response =   await axios.post(
    `${PROTOCOL_SERVER}${HOST_SERVER}${PORT_SERVER}/api/v1/libary/usuarios`,
    user
  );
  return response
};

export const redireccionVerificacionEmailRequiest = async () => {
  const response = await axios.get(
    `${PROTOCOL_SERVER}${HOST_SERVER}${PORT_SERVER}/api/v1/libary/usuarios/confirmar_cuenta?`
  );
  return response;
};

export const inicioDeSessionRequest = async (user) => {
  const { data } = await axios.post(
    `${PROTOCOL_SERVER}${HOST_SERVER}${PORT_SERVER}/api/v1/libary/usuarios/iniciar_sesion`,
    user
  );
    
  return data;
};



// const apiToken = axios.create({
//   baseURL: `${PROTOCOL_SERVER}${HOST_SERVER}${PORT_SERVER}/api/v1/libary/`,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

// export const cerrarSeccionRequest = async () => {
//   try {
//     const response = await apiToken.get("usuarios/cerrar_sesion");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
