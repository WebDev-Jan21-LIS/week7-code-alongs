import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery: '',
        inStock: false
    }

    handleOnChange = (event) => {
        let { onFilter } = this.props;
        let { value, name, type } = event.target;

        if (type === "checkbox") {
            value = event.target.checked;
        }

        this.setState({
            [name]: value
        }, () => {
            onFilter(this.state);
        })
    }

    render() {
        const { searchQuery, inStock } = this.state;
        return (
            <form>
                <input type="text"
                name="searchQuery"
                value={searchQuery} 
                onChange={this.handleOnChange}
                />

                <input type="checkbox"
                name="inStock"
                checked={inStock} 
                onChange={this.handleOnChange}/>
            </form>
        )
    }
}



export default SearchBar;