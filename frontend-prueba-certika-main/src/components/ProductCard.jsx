import React from "react";
import {useNavigate} from 'react-router-dom'
const ProductCard = ({libro}) => {
  
  const navigate = useNavigate()

  return (
    <>
      <div className="product-card" onClick={()=> navigate(`/view/book/${libro.id}`)}>
        <div className="nombreproduct">
          <h3 className="title-card">{libro.titulo}</h3>
        </div>
        <img
          src={libro.image}
          alt={libro.titulo}
          className="image-card-item"
        />
        <div className="product-info">
          <div>
            <p>Autor: {libro.autor}</p>
            <p>Stock: {libro.stock}Und</p>
          </div>
        </div>
      </div>
      {/* ejemplos de cardBooks */}
    
    </>
  );
};

export default ProductCard;
