import React from 'react'
import { FaTimes } from "react-icons/fa";

const Product = ({ product, onDelete, toggle }) => {
    return (
        <div className={`task ${product.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => toggle(product.id)}>
            <h3>{product.text} <FaTimes style={{color: 'grey', cursor: 'pointer'}} onClick={() => onDelete(product.id)} /></h3>
            <p>{product.price}</p>
            <p><strong>{product.size}</strong></p>
        </div>
    )
}


export default Product
