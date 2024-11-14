import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { saveProductsToLocalStorage, getProductsFromLocalStorage } from './utils/localStorageUtils';

const App = () => {
  const [products, setProducts] = useState(getProductsFromLocalStorage());
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    saveProductsToLocalStorage(products);
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
    setIsEditing(false);
  };

  const deleteProduct = (productName) => {
    setProducts(products.filter((product) => product.name !== productName));
  };

  const selectProductForEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>Product Management</h1>
      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        currentProduct={currentProduct}
        isEditing={isEditing}
      />
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        selectProductForEdit={selectProductForEdit}
      />
    </div>
  );
};

export default App;
