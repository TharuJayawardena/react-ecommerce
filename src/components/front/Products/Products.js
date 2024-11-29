import React, { useState } from 'react';
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) =>
{

    const [search, setSearch] = useState("");

    const handleSearch = (event) =>
    {
        setSearch(event.target.value);
    };

    const filteredProducts = productItems.filter((productItem) =>
        productItem.name.toLowerCase().includes(search.toLowerCase()) ||
        productItem.description.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='products-container'>
            <input
                type="text"
                className="search-input"
                placeholder="Search Products..."
                value={search}
                onChange={handleSearch}
            />
            <div className='products'>
                {filteredProducts.length > 0 ?
                    (filteredProducts.map((productItem) => (
                        <div className='card' key={productItem.id}>
                            <div>
                                <img className="product-image"
                                    src={productItem.image}
                                    alt={productItem.name} />
                            </div>

                            <div>
                                <h3 className='product-name'>
                                    {productItem.name}
                                </h3>
                            </div>
                            <div>
                                <h3 className='product-description'>
                                    {productItem.description}
                                </h3>
                            </div>
                            <div className="product-price">
                                ${productItem.price}
                            </div>
                            <div>
                                <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                    ) : (
                        <p>No products found</p>
                    )}
            </div>
        </div>
    );
};

export default Products;