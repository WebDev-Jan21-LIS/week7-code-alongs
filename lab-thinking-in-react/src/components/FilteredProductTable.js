import React from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilteredProductTable extends React.Component {
    state = {
        products: data.data,
        filteredProducts: data.data
    }

    handleFilterProducts = (filter) => {
        const { products } = this.state;
        let { searchQuery, inStock } = filter;
        let visibleProducts = 
        [...products].filter((product) => {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase())
        })

        if (inStock) {
            visibleProducts = visibleProducts.filter((product)=> {
                return product.stocked
            })
        }

        this.setState({
            filteredProducts: visibleProducts
        })
    }

    render() {
        const { filteredProducts } = this.state;
        return(
            <div>
               <SearchBar onFilter={this.handleFilterProducts} />
               <ProductTable filteredProducts={filteredProducts} /> 
            </div>
        )
    }
}

export default FilteredProductTable

