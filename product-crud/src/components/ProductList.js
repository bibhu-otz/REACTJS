import React from 'react';

const ProductList = ({ products, deleteProduct, selectProductForEdit }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => selectProductForEdit(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.name)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
