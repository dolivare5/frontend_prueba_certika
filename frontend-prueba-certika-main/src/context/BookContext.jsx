import { useContext, useState } from "react";
import { BookContext } from "./CreateTaskContext";
import {useNavigate} from 'react-router-dom'

// import api request 

import {createUserRequiest, inicioDeSessionRequest, redireccionVerificacionEmailRequiest} from '../API/usuarios.api'



export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error(
      "Este cnotexto solo esta disponible para el sistema de libros"
    );
  } else {
    return context;
  }
};

export const BookContextProvider = ({ children }) => {

  const navigate = useNavigate()
  // creamos el hook de la lista de libros
  const [libros, setLibros] = useState([
    {
      id: 1,
      autor: "Javier S.",
      titulo: "El bosón de Higgs",
      categoria: "Ciencia",
      codigo: "AHG24",
      lugar: "Madrid, España",
      editorial: "Cosmos S.A",
      año: 2020,
      paginas: 504,
      image:
        "https://www.esferalibros.com/wp-content/uploads/2021/04/principal-portada-este-ano-el-boson-es.jpg",
      stock: 10,
    },
  ]);

  
  const [user, setUser] = useState([]);
  const [prestamos, setPrestamos] = useState([
    {
        id: 1,
        nombreUsuario: "Juancho",
        idUsuario: "3",
        nombreLibro: "Solid JS",
        idLibro: 2,
        fecha: "10-02-2023",
        devuelto: false
    }
  ])
  // creamos las funciones para crud de libros

  const getBooks = () => {
    try {
      //   const newBook = [
      //     {
      //       id: 1,
      //       autor: "Javier S.",
      //       titulo: "El bosón de Higgs",
      //       categoría: "Ciencia",
      //       codigo: "AHG24",
      //       lugar: "Madrid, España",
      //       Editorial: "Cosmos S.A",
      //       Año: 2020,
      //       paginas: 504,
      //       image:
      //         "https://www.esferalibros.com/wp-content/uploads/2021/04/principal-portada-este-ano-el-boson-es.jpg",
      //       stock: 10,
      //     },
      //   ];
      //   setLibros(newBook);
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = (id) => {
    const libroObtenido = libros.find((libro) => libro.id == id);

    return libroObtenido;
  };

  const createBook = (libro) => {
    try {
      const newBook = {
        ...libro,
        id: libros.length + 1,
      };

      setLibros([...libros, newBook]);
      console.log(libros);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = (id) => {
    try {
      const librosFiltrado = libros.filter((libro) => libro.id !== id);
      setLibros(librosFiltrado);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = (id, filds) => {};




  const [responseSingUp, setResponseSingUp] = useState([])
  // creamos la funcion para crud de usuarios
// crear un usuario
  const createUser = async(user) => {
    console.log(user)
   try {
    const response =  await createUserRequiest(user)
    console.log(response)
     return response
     
   } catch (error) {
   
    setResponseSingUp(error.response.data.message)
    
    return console.log(error)
   }

  };
    const [mensajeVerificado, setMensajeVerificado] = useState([])
  const redireccionVerificacionEmail = async () => {
      const response = await redireccionVerificacionEmailRequiest()
      setMensajeVerificado(response.data.message)
      console.log(mensajeVerificado)
      navigate('/login')
  }

  // inicio de sesion
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [mensajeInicioSession, setMensajeInicioSession] = useState("")

  const inicioDeSession = async (user) => {
    try {
      const response = await inicioDeSessionRequest(user)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        setToken(response.data.token)
        console.log("inicié seccion")
      
      }
      
     
    } catch (error) {
      
     return setMensajeInicioSession(error)
     
    }
  }
 


  const logOut =  () => {
    try {
    //   const response = await cerrarSeccionRequest()
    // console.log(response)
    setToken("")
    localStorage.removeItem("token")
    navigate('/login')
    console.log("seccion cerrada")
    } catch (error) {
      console.log(error)
    }
  }


  const createPrestamo = (idLibro) => {
    const obteniendoLibro = libros.find((libro)=> libro.id === idLibro)
    console.log(obteniendoLibro.stock) 
    // console.log(user)   
    if (parseInt(obteniendoLibro.stock) > 0) {
        const newPrestamo = {
            id: prestamos.length+1,
            nombreUsuario: user[0].nombre,
            idUsuario: prestamos.length+1,
            nombreLibro: obteniendoLibro.titulo,
            idLibro: obteniendoLibro.id,
            fecha: "10-02-2023",
            devuelto: false
        }
        setPrestamos([...prestamos, newPrestamo])
    }
    
    // console.log(prestamos)
  }

  return (
    <BookContext.Provider
      value={{
        libros,
        getBooks,
        createBook,
        deleteBook,
        getBook,
        updateBook,
        createUser,
        user,
        logOut,
        prestamos,
        createPrestamo,
        responseSingUp,
        redireccionVerificacionEmail,
        mensajeVerificado,
        inicioDeSession,
        token,
        mensajeInicioSession
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
