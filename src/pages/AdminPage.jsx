import React, { useEffect, useState } from "react";
import "../css/styleRegister.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBook } from "../context/BookContext";
import Select from 'react-select';

const optionTiposLibros = [
  { value: 'DE PAPEL', label: 'DE PAPEL' },
  { value: 'ELECTRONICO', label: 'ELECTRONICO' },
  { value: 'DE CUERO', label: 'DE CUERO' },
  { value: 'DE BOLSILLO', label: 'DE BOLSILLO' },
  { value: 'DE ARTEFACTOS', label: 'DE ARTEFACTOS' },
  { value: 'CEDULA', label: 'CEDULA' },
  { value: 'TARJETA DE IDENTIDAD', label: 'TARJETA DE IDENTIDAD' },
  { value: 'PASAPORTE', label: 'PASAPORTE' },
];



const AdminPage = () => {
  const params = useParams();

  const { createBook, getBook, updateBook} = useBook();

  useEffect(() => {
    const loadBook = () => {
      if (params.id) {
        const book = getBook(params.id);
        console.log(book);
        setAutor(book.autor);
        setTitulo(book.titulo);
        setCategoria(book.categoria);
        setCodigo(book.codigo);
        setLugar(book.lugar);
        setEditorial(book.editorial);
        setAño(book.año);
        setPaginas(book.paginas);
        setImage(book.image);
        setStock(book.stock);
      }
    };
    loadBook();
  }, []);


  const navigate = useNavigate();

  const [libro, setLibro] = useState("");

  const [autor, setAutor] = useState("");

  const [titulo, setTitulo] = useState("");

  const [categoria, setCategoria] = useState("");

  const [codigo, setCodigo] = useState("");

  const [lugar, setLugar] = useState("");

  const [editorial, setEditorial] = useState("");

  const [año, setAño] = useState("");

  const [paginas, setPaginas] = useState("");

  const [image, setImage] = useState("");

  const [stock, setStock] = useState("");

  const [tipo, setTipo] = useState("")

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (params.id) {
        const newBook = {
          autor,
          titulo,
          categoria,
          codigo,
          lugar,
          editorial,
          año,
          paginas,
          image,
          stock,
        };
        updateBook(params.id, newBook)
      }
      const newBook = {
        autor,
        titulo,
        categoria,
        codigo,
        lugar,
        editorial,
        año,
        paginas,
        image,
        stock,
        tipo
      };
      setLibro(newBook);
      createBook(newBook);

      setAutor("");
      setTitulo("");
      setCategoria("");
      setCodigo("");
      setLugar("");
      setEditorial("");
      setAño("");
      setPaginas("");
      setImage("");
      setStock("");
      setTipo("")
      navigate("/catalogue");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container container-total-singup">
        <div className="row fila-principal">
          <div className="col-md-8 lado-formulario" id="lado-formulario">
            <form className="formulario-login" onSubmit={handleSubmit}>
              <div className="head-form">
                {params.id ? (
                  <h3>Modo Edicion.</h3>
                ) : (
                  <h3>Registra un nuevo libro</h3>
                )}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Nombre">
                      <p className="form_parrafo">Autor</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Javier S."
                          name="autor"
                          onChange={(e) => setAutor(e.target.value)}
                          value={autor}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Apellido">
                      <p className="form_parrafo">Titulo del libro</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="El bosón de Higgs"
                          onChange={(e) => setTitulo(e.target.value)}
                          name="titulo"
                          value={titulo}
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
                      <p className="form_parrafo">Categoría</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Ciencia"
                          name="categoria"
                          onChange={(e) => setCategoria(e.target.value)}
                          value={categoria}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Apellido">
                      <p className="form_parrafo">Código</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="12543"
                          name="codigo"
                          onChange={(e) => setCodigo(e.target.value)}
                          value={codigo}
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
                      <p className="form_parrafo">Lugar de edición</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Madrid, España"
                          name="lugar"
                          onChange={(e) => setLugar(e.target.value)}
                          value={lugar}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Cedula">
                      <p className="form_parrafo">Editorial</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Cosmos S.A"
                          name="editorial"
                          onChange={(e) => setEditorial(e.target.value)}
                          value={editorial}
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
                    <div className="form_grupo" id="grupo_Correo">
                      <p className="form_parrafo">Año de edición</p>
                      <div className="form_grupo-input">
                        <input
                          type="number"
                          className="form_input"
                          placeholder="2020"
                          name="año"
                          onChange={(e) => setAño(e.target.value)}
                          value={año}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="correo-form">
                    <div className="form_grupo" id="grupo_Correo">
                      <p className="form_parrafo">Numero de páginas</p>
                      <div className="form_grupo-input">
                        <input
                          type="number"
                          className="form_input"
                          placeholder="504"
                          name="paginas"
                          onChange={(e) => setPaginas(e.target.value)}
                          value={paginas}
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
                      <p className="form_parrafo">Foto de portada</p>
                      <div className="form_grupo-input">
                        <input
                          type="text"
                          className="form_input"
                          placeholder="image.jpg"
                          name="image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contrasena-form">
                    <div className="form_grupo" id="grupo_Contraseña">
                      <p className="form_parrafo">
                        Stock o cantidad disponible
                      </p>
                      <div className="form_grupo-input">
                        <input
                          type="number"
                          className="form_input"
                          placeholder="20"
                          name="stock"
                          onChange={(e) => setStock(e.target.value)}
                          value={stock}
                        />
                        <i className="form_validacion-estado bi bi-x-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                  <div className="contrasena-form">
                    <div className="form_grupo" id="grupo_Contraseña">
                      <p className="form_parrafo">
                        Tipo de libro
                      </p>
                      <div className="form_grupo-input">
                        <Select
                        options={ optionTiposLibros }
                        onChange = { (e)=> setTipo(e.target.value)}
                        value = {tipo}
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>

              <div className="form_mensaje" id="form_mensaje"></div>

              <div className="boton-login">
                {params.id ? (
                  <button
                    className="btn btn-warning"
                    type="submit"
                    value="Ingresar"
                    id="registro"
                  >
                    Editar
                  </button>
                ) : (
                  <button
                    className="btn-register"
                    type="submit"
                    value="Ingresar"
                    id="registro"
                  >
                    Registrar
                  </button>
                )}
              </div>
            </form>
          </div>

          {params.id ? (
            <></>
          ) : (
            <div className="col-md-4">
              <div className="formulario-login text-center mt-5">
                <div className="head-form">
                  <h5>¿Quieres eliminar o editar un libro?</h5>
                </div>

                <div className="my-4">
                  <Link
                    className="btn-account m-2 p-3 mt-4"
                    id="color-button-account"
                    to="/admin/config"
                  >
                    ¡Andando, click Aquí!
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
