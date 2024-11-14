import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, editProduct, currentProduct, isEditing }) => {
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    if (isEditing) setProduct(currentProduct);
  }, [currentProduct, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editProduct(product);
    } else {
      addProduct(product);
    }
    setProduct({ name: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
