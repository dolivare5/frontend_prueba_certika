import React from "react";
import {useBook} from '../context/BookContext'
import {useNavigate, useParams} from 'react-router-dom'


const ConfigBookCard = ({ libro }) => {


  const  {deleteBook} = useBook()
  const navigate = useNavigate()
 
  return (
    <>
      <div className="product-card">
        <div className="nombreproduct">
          <h3 className="title-card">{libro.titulo}</h3>
        </div>
        <img src={libro.image} alt={libro.titulo} className="image-card-item" />
        <div className="product-info">
          <div>
            <p>Autor: {libro.autor}</p>
            <p>Stock: {libro.stock}Und</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-danger m-1" onClick={()=> deleteBook(libro.id)}>Eliminar</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-warning m-1" onClick={()=> navigate(`/edit/${libro.id}`)}>Editar</button>
          </div>
        </div>
      </div>
      {/* ejemplos de cardBooks */}
    </>
  );
};

export default ConfigBookCard;
