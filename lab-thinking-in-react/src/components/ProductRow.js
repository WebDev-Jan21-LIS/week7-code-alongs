import React from 'react';

function ProductRow({ name, price, stocked}) {
    return (
        <tr>
            <td style={{color: stocked ? "black" : "red" }}>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    )
}

export default ProductRow