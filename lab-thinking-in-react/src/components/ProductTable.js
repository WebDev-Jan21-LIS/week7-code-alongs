import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ filteredProducts }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => {
                   return (
                       <ProductRow key={product.id} {...product}/>
                   )
                })}
            </tbody>
        </table>
    )
}

export default ProductTable;